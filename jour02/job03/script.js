document.addEventListener("DOMContentLoaded", () => {
    
    const btn = document.getElementById("button");    
    const p = document.getElementById("compteur");
  // p.textContent = "0";

    function addone(){
      p.textContent++;
      console.log("click".innerHTML);
    }

    btn.addEventListener("click", addone);
})
