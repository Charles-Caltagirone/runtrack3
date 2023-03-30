$("#button").on("click", function () {
    fetch('expression.txt')
        .then((response) => response.text())
        .then((data) => {
            // let p = $("p")
            let p = document.querySelector('p');
            p.textContent = data;
            console.log(p)
        })
})
