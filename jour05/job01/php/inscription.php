<?php
session_start();
require("./include/config.php");

?>
<!DOCTYPE html>
<html lang="fr" dir="ltr">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- CSS -->
    <link rel="stylesheet" href="../css/common.css">
    <link rel="stylesheet" href="../css/inscription.css">
    <!-- GOOGLE FONTS -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Lato&display=swap" rel="stylesheet">
    <!-- FONT AWESOME -->
    <script src="https://kit.fontawesome.com/9a09d189de.js" crossorigin="anonymous"></script>
    <!-- <script src="../../job01/js/script.js" defer></script> -->
    <title>Inscription</title>
</head>

<body id="bc_inscription">
    <header>
        <nav>
            <?php require('./include/header-include.php') ?>
        </nav>
    </header>

    <main>

        <form method="POST" action="">
            <h3>Sign Up</h3>
            <p></p>

            <label for="nom">nom</label>
            <input type="text" id="nom" name="nom" placeholder="nom" autofocus autocomplete="off">
            <label for="nom">prénom</label>
            <input type="text" id="prenom" name="prenom" placeholder="prénom" autofocus autocomplete="off">
            <label for="nom">email</label>
            <input type="text" id="email" name="email" placeholder="email" autofocus autocomplete="off">
            <label for="password">Password</label>
            <input type="password" id="password" name="password" placeholder="Password">
            <label for="cpassword">Confirmation</label>
            <input type="password" id="cpassword" name="cpassword" placeholder="Confirmation">

            <?php
            if (isset($_POST['submit'])) {
                $nom = htmlspecialchars($_POST['nom']);
                $prenom = $_POST['prenom'];
                $email = $_POST['email'];
                $password = $_POST['password'];
                $confirmPassword = $_POST['cpassword'];
                $passwordHash = password_hash($password, PASSWORD_DEFAULT);

                // $recupUser = $bdd->prepare("SELECT * FROM utilisateurs WHERE nom = ?");
                // $recupUser->execute([$nom]);

                $insertUser = $bdd->prepare("INSERT INTO utilisateurs(nom, prenom, email, password)VALUES(?,?,?,?)");
                $insertUser->execute([$nom, $prenom, $email, $passwordHash]);
                // header("Location: connexion.php");
                // echo "Bien joué !";
            }
            ?>


            <input type="submit" name="submit" id="submit" class="button" value="Sign Up">
        </form>
    </main>

    <footer>
    </footer>
</body>

</html>