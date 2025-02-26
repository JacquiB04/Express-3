//Construct an array of objects
//Each object should have two properties: topping and quantity
//Convert it to JSON format
//Send it to the client with proper headers

const express = require('express');
const router = express.Router();

myObj1 = {"topping":"cherry", "quantity":2};
myObj2 = {"topping":"plain", "quantity":6};
myObj3 = {"topping":"chocolate", "quantity":3};

myArray = [myObj1, myObj2, myObj3];

myJSON = JSON.stringify(myArray);

// Define a simple route for orders
router.get('/', (req, res) => {
    res.send(myJSON);
});

module.exports = router;
