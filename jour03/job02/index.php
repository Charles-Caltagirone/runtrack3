<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="../jquery-3.6.4.min.js"></script>
    <title>Document</title>
</head>
<body>    
    <style>
        img{
            width: 75px;        
        }
        section{
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        .header{
            text-align: center;
        }
    </style>
    <div class="header">
    <button id="random">Mélanger</button>
    <button id="reset">Reset</button>
    <p id="fin"></p>
    </div>
    <section>
    <div class="divEmpty game" style="height: 250px;">
        <img src="" id="7" data-id="">
        <img src="" id="8">
        <img src="" id="9">
        <img src="" id="10">
        <img src="" id="11">
        <img src="" id="12">
    </div>
    <div class="divImages game" style="height: 250px;">
        <img src="./img/arc1.png" id="1">
        <img src="./img/arc2.png" id="2">
        <img src="./img/arc3.png" id="3">
        <img src="./img/arc4.png" id="4">
        <img src="./img/arc5.png" id="5">
        <img src="./img/arc6.png" id="6">
    </div>
    </section>
    <script src="script.js"></script>
</body>
</html>