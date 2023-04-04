let citation = document.querySelector("#citation")
let contenuJumbotron = document.querySelector("#contenuJumbotron")


$("#accueil").click(function () {
    window.location.href = 'https://laplateforme.io/';
});

$("#reboot").click(function () {
    let allCitations = ["Tous ces moments se perdront dans l'oubli, comme des larmes dans la pluie.", "Avez-vous déjà désactivé un humain par erreur ?", "T'endors pas, c'est l'heure de mourir.", "C'est dommage qu'elle doive mourir, mais on en est tous là !"];
    const randomCitations = allCitations[Math.floor(Math.random() * allCitations.length)];
    citation.innerHTML = randomCitations;
});
$("#page1").click(function () {
    let page1 = "Il existe plusieurs visions du terme : <br> le monde est la matière, l'espace et les phénomènes qui nous sont accessibles par les sens, l'expérience ou la raison.<br> Le sens le plus courant désigne notre planète, la Terre, avec ses habitants, et son environnement plus ou moins naturel.";
    contenuJumbotron.innerHTML = page1;
});
$("#page2").click(function () {
    let page2 = "One Piece (ワンピース, Wan Pīsu?) est une série de shōnen mangas créée par Eiichirō Oda. Elle est prépubliée depuis le 22 juillet 1997 dans le magazine hebdomadaire Weekly Shōnen Jump, puis regroupée en tankōbon aux éditions Shūeisha depuis le 24 décembre 1997. 105 tomes sont commercialisés au Japon en mars 2023. La version française est publiée en volumes reliés depuis le 1er septembre 2000 par Glénat, et 103 volumes sont commercialisés en décembre 2022.";
    contenuJumbotron.innerHTML = page2;
});
$("#page3").click(function () {
    let page3 = "Naruto (ナルト?) est un shōnen manga écrit et dessiné par Masashi Kishimoto. Naruto a été prépublié dans l'hebdomadaire Weekly Shōnen Jump de l'éditeur Shūeisha entre septembre 1999 et novembre 2014. La série a été compilée en 72 tomes. La version française du manga est publiée par Kana entre mars 2002 et novembre 2016. À la suite de son succès sous forme de manga, une adaptation en anime est réalisée par les studios Pierrot et Aniplex et est diffusée sur TV Tokyo depuis le 3 octobre 2002. Une seconde partie du récit a aussi vu le jour et a été renommée Naruto Shippuden lors de son adaptation.";
    contenuJumbotron.innerHTML = page3;
});

let header = document.getElementById("listeBtn");
let btns = header.getElementsByClassName("list-group-item-action");
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  let current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}
