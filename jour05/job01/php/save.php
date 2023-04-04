<?php
            if (isset($_POST['envoi'])) {
                $nom = htmlspecialchars($_POST['nom']);
                $prenom = $_POST['prenom'];
                $email = $_POST['email'];
                $password = $_POST['password'];
                $confirmPassword = $_POST['cpassword'];
                $passwordHash = password_hash($password, PASSWORD_DEFAULT);

                $recupUser = $bdd->prepare("SELECT * FROM utilisateurs WHERE nom = ?");
                $recupUser->execute([$nom]);

                if (empty($nom) || empty($prenom) || empty($password) || empty($email) || empty($confirmPassword)) {
                    echo "<p><i class='fa-solid fa-triangle-exclamation'></i>&nbspVeuillez complétez tous les champs.</p>";
                } elseif (!preg_match("#^[a-z0-9]+$#", $nom)) {
                    echo "<p><i class='fa-solid fa-triangle-exclamation'></i>&nbspLe nom doit être renseigné en lettres minuscules sans accents, sans caractères spéciaux.</p>";
                } elseif (strlen($nom) > 15) {
                    echo "<p><i class='fa-solid fa-triangle-exclamation'></i>&nbspnom trop long (15 max).</p>";
                } elseif ($password != $confirmPassword) {
                    echo "<p><i class='fa-solid fa-triangle-exclamation'></i>&nbspLes deux mots de passe sont differents.</p>";
                } elseif ($recupUser->rowCount() > 0) {
                    echo "<p><i class='fa-solid fa-triangle-exclamation'></i>&nbspCe nom est déjà utilisé.</p>";
                } else {
                    $insertUser = $bdd->prepare("INSERT INTO utilisateurs(nom, prenom, email, password)VALUES(?,?,?,?)");
                    $insertUser->execute([$nom, $prenom, $email, $passwordHash]);
                    header("Location: connexion.php");
                }
            }
            ?>
