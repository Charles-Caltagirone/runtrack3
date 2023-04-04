
<script src="../../job01/js/script.js" defer></script>
<script src="../../job01/js/jquery-3.6.4.min.js"></script>
<?php
$servername = 'localhost';
$username = 'root';
$password = '';

try {
    $bdd = new PDO("mysql:host=$servername;dbname=utilisateurs", $username, $password);

    $bdd->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    // echo 'Connexion réussie';
} catch (PDOException $e) {
    // echo "Erreur : " . $e->getMessage();
}
