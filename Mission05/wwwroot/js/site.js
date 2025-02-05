$(document).ready(function () {

    $("#calculateTotal").click(function () { 

    var hours = parseFloat($("#hours").val());
    var rate = parseFloat($("#rate").val());

    if (isNaN(hours) || hours <= 0) {
        alert("Please enter a valid positive number for hours.");
        return;
    }
    var total = hours * rate;
    $("#total").text("$" + total.toFixed(2));
});
});