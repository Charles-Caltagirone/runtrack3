<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>

<body>
    <header>
        <nav class="text-center text-orange-600">
            <a href="index.php" class="decoration-red-50">Accueil</a>
            <a href="index.php">Inscription</a>
            <a href="index.php">Connexion</a>
            <a href="index.php">Rechercher</a>
        </nav>
    </header>
    <main>
        <section>
            <form action="">
                <label for="sexe">Sexe :</label><br>
                <input type="radio" id="homme" name="sexe" value="homme">
                <label for="homme">Homme</label><br>
                <input type="radio" id="femme" name="sexe" value="femme">
                <label for="femme">Femme</label><br><br>
                <label for="fname">Prénom :</label>
                <input type="text" id="prenom" name="prenom"><br><br>
                <label for="prenom">Nom :</label>
                <input type="text" id="nom" name="nom"><br><br>
                <label for="email">Email:</label>
                <input type="email" id="email" required><br><br>
                <label for="password">Password :</label>
                <input type="password" id="password" name="password"><br><br>
                <label for="cPassword">Confirm password :</label>
                <input type="cPassword" id="cPassword" name="cPassword"><br><br>
                <label for="prenom">Passions :</label><br>
                <input type="checkbox" id="informatique" name="informatique" value="">
                <label for="voyages"> Informatique</label><br>
                <input type="checkbox" id="voyages" name="voyages" value="">
                <label for="voyages"> Voyages</label><br>
                <input type="checkbox" id="sport" name="sport" value="">
                <label for="sport"> Sport</label><br>
                <input type="checkbox" id="lecture" name="lecture" value="">
                <label for="lecture"> Lecture</label><br><br>
                <input type="submit" value="Submit">
            </form><br>
        </section>
    </main>
    <footer class="text-center text-orange-600">
        <nav>
            <a href="index.php">Accueil</a>
            <a href="index.php">Inscription</a>
            <a href="index.php">Connexion</a>
            <a href="index.php">Rechercher</a>
        </nav>
    </footer>
</body>

</html>