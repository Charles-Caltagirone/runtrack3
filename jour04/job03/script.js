let id = document.querySelector("#id")
let nom = document.querySelector("#nom")
let type = document.querySelector("#type")
let p = document.querySelector('p');

// let ligne = document.write("re");
// let line = '\r\n'
let saut = document.createElement('br');
let test = document.querySelector('#test');
// console.log(ligne)


$("#filter").on("click", function () {
    console.log(nom.value)
    fetch("pokemon.json")
        .then((response) => response.json())
        .then((data) => {
            let result = data.filter(function (pokemon) {
                if (id.value != pokemon.id) {
                    // console.log(pokemon.id)
                    // console.log('pas de pokemon')
                    // return false;
                } else {
                    p.innerHTML = 'Nom : ' + pokemon.name.french + '. Type : ' + pokemon.type;
                    // console.log(pokemon.name.french)
                    // console.log(pokemon.type)
                }
                if (nom.value != pokemon.name.french) {
                    // console.log(pokemon.id)
                    console.log('pas de pokemon')
                    // return false;
                } else {
                    p.innerHTML = 'Id : ' + pokemon.id +'. Type : ' + pokemon.type;
                    // console.log(pokemon.name.french)
                    // console.log(pokemon.type)
                }
                if (type.value != pokemon.type) {
                    // console.log(pokemon.id)
                    console.log('pas de pokemon')
                    // return false;
                } else {
                    p.append("-" + pokemon.name.french + "\r\n");
                    // test.innerHTML = `<p>${pokemon.name.french}</p>`;
                    // p.appendChild('test');
                    // console.log(pokemon.name.french)
                    // console.log(pokemon.type)
                }
            })
        })
    // console.log(id[0].value)        
})