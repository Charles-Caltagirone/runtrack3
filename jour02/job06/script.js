document.addEventListener("DOMContentLoaded", () => {

    const konami = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"];

    let compteur = 0;

    document.addEventListener("keydown", event => {
        let key = event.key;
        let style = "background-color:#336699";
        console.log(key);

        if (key === konami[compteur]) { //si la keydown = truc tableau on incremente
            compteur++;
            if (compteur === konami.length) {
                document.querySelector("body").style = style;
            }
        } else {
            compteur = 0;
        }
    });
})