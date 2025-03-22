//HW 3,4,5
/**
 * cheesecake.js
 * Name: Jacqui Bouchard
 * 
 * This file contains the server-side functions that handle post 
 * functions.
 */

const PORT = 3002;

//HELPER METHODS
getFormDetails = function() {
    if ($("#notes").val().indexOf("vegan") !== -1) {
        window.alert("WARNING! These cheesecakes contain dairy.");
    } else {
        //Get the form details
        var quantity = $("#quantity").val();

        //Find which topping is selected
        var topping;
        if(document.getElementById("plain").checked) {
            topping = "Plain";
        } else if(document.getElementById("vegan").checked) {
            topping = "Vegan";
        } else if(document.getElementById("chocolate").checked) {
            topping = "Chocolate";
        } else if(document.getElementById("cherry").checked) {
            topping = "Cherry";
        }

        var textAreaNotes = $("#notes").val();
        console.log(topping);

        //Hide the form details
        $(".form").hide();
        
        //Print a review of the form details
        $('#review').html("Thank you! Your order has been placed:<br><br>Quantity: " + quantity + 
            "<br>Topping: " + topping + "<br>Notes: " + textAreaNotes);
    }

    //FOR HW5 PART3
    $.post(`http://localhost:${PORT}/neworder`, {"topping":topping,"quantity":quantity,"notes":textAreaNotes}); //Add the new order to the database
}

updateMonth = function() {
    //Get the month the user clicked
    var defaultMonth = $(this).data("value");

    //HW4: update the html Past Orders List based on JSON objects
    //HW5: update the html Past Orders List based on entries in a database
    $.post(`/orders`, {"month":defaultMonth}, function(response) {
        //Clear the default order list
        $("#past-order-list").empty();

        /* The following was redacted from HW5, as the code wouldn't
        work if I passed a string to be parsed instead of a JSON Object.
        //The post response should be a string
        //Convert it to JSON
        if (typeof response === "string") {
            myArray = JSON.parse(response);
        }*/
        
        //Update the html based on the response
        response.forEach(function(order) {
            $('#past-order-list').append(`<li>Order ID: ${order.o_id}, Quantity: ${order.quantity}, Topping: ${order.t_id}, Notes: ${order.notes}</li><tr></tr>`);
        });
    });

    //Update the button text to reflect user's choice
    $(".dropbtn").text(defaultMonth);
}

//METHOD CALLS FOR INDEX.HTML
$("#order").on("click", getFormDetails);
$(".dropdown-content a").on("click", updateMonth);