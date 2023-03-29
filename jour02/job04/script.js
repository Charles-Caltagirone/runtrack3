document.addEventListener("DOMContentLoaded", () => {

  const text = document.getElementById("keylogger");

  document.addEventListener("keydown", (event) =>{
    if (/^[a-zA-Z]$/.test(event.key)){
      if(document.activeElement === text){
        text.value += event.key;
      }else{
        text.value += event.key;
      }
    }
  });
})