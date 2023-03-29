let images = $('.divImages').find("img");
// console.log(images)
// console.log(imagesSrc)

$("#random").on("click", function () {
    images.sort(() => Math.random() - 0.5);
    $('.divImages').append(images);
})
$("#reset").on("click", function () {
    location.reload()
})

let compteur = 0;
let erreur = 0;
let y = 7;

for (let i = 1; i <= 6; i++) {
    $('#' + i).on("click", function () {
        // $('.divEmpty').append($('#' + i));
        // $('#' + y++).attr('src').append($('#' + i).attr('src'));

        $('#' + i).css("display", "none")
        $('#' + y++).attr('src', $('#' + i).attr('src'));
        
        compteur++;
        let verif1 = $('#' + (i + 7)).attr("id")
        let verif2 = $('#' + y).attr("id")

        if (verif1 != verif2) {
            // console.log('test erreur')
            erreur++;
        }

        // console.log($('#' + i).attr("id"))
        // console.log($('#' + y).attr("id"))
        console.log(verif1)
        console.log(verif2)

        if (compteur == 6) {
            // console.log('test fin')

            if (erreur) {
                $('p').text('Vous avez perdu : '+erreur+' erreurs !');
                $("p").css({"color" : "red", "text-align" : "center"});
            } else {
                $("p").css({"color" : "green", "text-align" : "center"});
                $('p').text("!!! Vous avez gagné !!!");
            }
        }
        // }
        // console.log($('#' + i).attr("id"));
        console.log(compteur)
        console.log(erreur)
    })
}
