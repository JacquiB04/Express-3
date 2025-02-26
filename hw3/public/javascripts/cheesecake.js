//Author: Jacqui Bouchard
//HW 3

//HELPER METHODS
getFormDetails = function() {
    if ($("#notes").val().indexOf("vegan") !== -1) {
        window.alert("WARNING! These cheesecakes contain dairy.");
    } else {
        //Get the form details
        var quantity = $("#quantity").val();
        var topping = $("input[type='radio']").val();
        var textAreaNotes = $("#notes").val();

        //Hide the form details
        $(".form").hide();
        
        //Print a review of the form details
        $('#review').html("Thank you! Your order has been placed:<br><br>Quantity: " + quantity + 
            "<br>Topping: " + topping + "<br>Notes: " + textAreaNotes);
    }
}

updateMonth = function() {
    //Get the month the user clicked
    var month = $(this).data("value");

    //Update the button text to reflect user's choice
    $(".dropbtn").text(month);
}

//METHOD CALLS FOR INDEX.HTML
$("#order").on("click", getFormDetails);
$(".dropdown-content a").on("click", updateMonth);