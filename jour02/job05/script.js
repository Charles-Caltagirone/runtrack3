document.addEventListener("DOMContentLoaded", () =>{
  window.onscroll = function() {
    let scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
    let windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    let bodyHeight = document.body.scrollHeight; 
    let scrollPercentage = (scrollTop / (bodyHeight - windowHeight)) * 100;
    let footerColor = "linear-gradient(to right, #00bfff " + scrollPercentage + "%, #ccc " + scrollPercentage + "%)";
    document.querySelector("footer").style.background = footerColor;
  };
})