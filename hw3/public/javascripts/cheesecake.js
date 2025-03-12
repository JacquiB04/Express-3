//Author: Jacqui Bouchard
//HW 3

const PORT = 3002;

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

    //A4: update the html Past Orders List based on JSON objects
    $.post(`http://localhost:${PORT}/orders`, {"month": month}, function(response) {
        //console.log("TEST TEST TEST"); //For testing the function call

        //Clear the default order list
        //$("#past-order-list").empty();

        //The post response should be a string
        //Convert it to JSON
        if (typeof response === "string") {
            myArray = JSON.parse(response);
        }
        
        //Update the html based on the response
        document.querySelector("#past-order-list li:nth-child(1)").textContent = myArray[0].quantity + " " + myArray[0].topping;      
        document.querySelector("#past-order-list li:nth-child(2)").textContent = myArray[1].quantity + " " + myArray[1].topping;        
        document.querySelector("#past-order-list li:nth-child(3)").textContent = myArray[2].quantity + " " + myArray[2].topping;        
  
    });

    //Update the button text to reflect user's choice
    $(".dropbtn").text(month);
}

//METHOD CALLS FOR INDEX.HTML
$("#order").on("click", getFormDetails);
$(".dropdown-content a").on("click", updateMonth);
//$(".dropdown-content").on("click", updateMonth);
