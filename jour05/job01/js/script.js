const btn = document.getElementById("#submit")

let nom = document.querySelector("#nom");
let prenom = document.querySelector("#prenom");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let cPassword = document.querySelector("#cpassword");
let p = document.querySelector("p");


$("#submit").on("submit", function () {
    // console.log(prenom.value, nom.value);
    if (nom.value.length === 0 || prenom.value.length === 0 || email.value.length === 0 || password.value.length === 0 || cPassword.value.length === 0) {
        console.log("Veuillez complétez tous les champs.");
        p.innerHTML = ("Veuillez complétez tous les champs.")
        return false;
    }else if(password.value != cPassword.value){
        console.log('Les mdp doivent correspondrent')
        p.innerHTML = ("Les mdp doivent correspondrent")
        return false;
    } else {
        console.log('ok bébé');
        p.innerHTML = ("Bien enregistré !")
        return true
    }
})
