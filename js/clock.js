$(document).ready(function () {
    var date = new Date($.now());
    var seconds = date.getSeconds();
    var minutes = date.getMinutes();
    var hours = date.getHours();
    $("#second").css("transform", "rotate(" + seconds * 6 + "deg)");
    $("#minute").css("transform", "rotate(" + minutes * 6 + "deg)");
    $("#hour").css("transform", "rotate(" + (hours * 30 + minutes/2) + "deg)");
});