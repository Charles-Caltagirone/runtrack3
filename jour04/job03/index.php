<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="../../../jquery-3.6.4.min.js"></script>
    <title>Document</title>
</head>
<body>    
    <form action="">
        <input type="text" id="id" placeholder="id"><br>
        <input type="text" id="nom" placeholder="name"><br>
        <select name="type" id="type">
            <option value="">Choisir un type</option>
            <option value="Normal">normal</option>
            <option value="Grass">plante</option>
            <option value="Poison">poison</option>
            <option value="Fire">feu</option>
            <option value="Flying">vol</option>
            <option value="Water">eau</option>
            <option value="Bug">Bug</option>
            <option value="Electric">Electric</option>
            <option value="Ground">Ground</option>
            <option value="Fairy">Fairy</option>
        </select><br>
        <input type="button" name="filter" value="Filtrer" id="filter">
    </form>
    <p></p>
    <script src="script.js"></script>
    <script src="pokemon.json"></script>
</body>
</html>