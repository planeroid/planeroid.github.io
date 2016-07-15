$(document).ready(function () {
    var totaldiv = $("#total");
    var number = "";
    var newnumber = "";
    var operator = "";
    $("#numbers > a").not("#clear,#allclear").click(function () {
        number += $(this).text();
        totaldiv.text(number);
    });
    $("#operators > a").not("#equals").click(function () {
        var target = $(event.target)
        newnumber = number;
        number = "";
        operator = $(this).text();
        totaldiv.text(number);
    });
    $("#equals").click(function () {
        if(operator ==="+"){
            number = (parseFloat(newnumber, 10) + parseFloat(number, 10)).toString(10);
        } else if (operator === "-") {
            number = (parseFloat(newnumber, 10) - parseFloat(number, 10)).toString(10);
        } else if (operator === String.fromCharCode(247)) {
            number = (parseFloat(newnumber, 10) / parseFloat(number, 10)).toString(10);
        } else if (operator === String.fromCharCode(215)) {
            number = (parseFloat(newnumber, 10) * parseFloat(number, 10)).toString(10);
        }
        totaldiv.text(number);
        newnumber = "";
    });
    $("#clear").click(function () {
        number = "";
        totaldiv.text(number);
    });
    $("#allclear").click(function () {
        newnumber = "";
        number = "";
        totaldiv.text(number);
    });

    $(document).keydown(function () {
        if (event.which === 96 || event.which === 48) {
            $("#zero").click();
        } else if(event.which === 97 || event.which === 49){
            $("#one").click();
        } else if (event.which === 98 || event.which === 50) {
            $("#two").click();
        } else if (event.which === 99 || event.which === 51) {
            $("#three").click();
        } else if (event.which === 100 || event.which === 52) {
            $("#four").click();
        } else if (event.which === 101 || event.which === 53) {
            $("#five").click();
        } else if (event.which === 102 || event.which === 54) {
            $("#six").click();
        } else if (event.which === 103 || event.which === 55) {
            $("#seven").click();
        } else if (event.which === 104 || event.which === 56) {
            $("#eight").click();
        } else if (event.which === 105 || event.which === 57) {
            $("#nine").click();
        } else if (event.which === 107) {
            $("#plus").click();
        } else if (event.which === 109) {
            $("#subtract").click();
        } else if (event.which === 111) {
            $("#divide").click();
        } else if (event.which === 106) {
            $("#multiply").click();
        }else if (event.which === 187 || event.which === 13) {
            $("#equals").click();
        } else if (event.which === 27) {
            $("#allclear").click();
        }
    });
});