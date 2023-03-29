$("#buttonShow").on("click", function(){
    $("p").text("Some appended text.");
    $('p').show()
})
$("#buttonHide").on("click", function(){
    $('p').hide()
})