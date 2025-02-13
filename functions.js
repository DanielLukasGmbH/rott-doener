$("#viereck").click(function(){
    alert($("#text").text());
});
$("#text").click(function(){
    $("#text").text("Du hast den Text angeklickt");
});

$("#viereck").hover(function(){
    $("#viereck").css("width", "50px")
});