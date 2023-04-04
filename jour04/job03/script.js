let id = document.querySelector("#id")
let nom = document.querySelector("#nom")
let type = document.querySelector("#type")
let p = document.querySelector('p');

// let saut = document.createElement('br');
// let test = document.querySelector('#test');

$("#filter").on("click", function () {
    fetch("pokemon.json")
        .then((response) => response.json())
        .then((data) => {
            let result = data.filter(function (pokemon) {
                if (id.value == pokemon.id) {
                    p.innerHTML = 'Id : ' + pokemon.id + '. Nom : ' + pokemon.name.french + '. Type : ' + pokemon.type;
                }
                if (nom.value == pokemon.name.french) {
                    p.innerHTML = 'Id : ' + pokemon.id + '. Nom : ' + pokemon.name.french + '. Type : ' + pokemon.type;
                }
                for (let i = 0; i < pokemon.type.length; i++) {
                    if (type.value == pokemon.type[i]) {
                        p.innerHTML += ("- Id : " + pokemon.id + " : " + pokemon.name.french + ".<br>")
                    }
                }
            })
        })
})

    // console.log(id[0].value)        
