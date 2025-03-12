//Jacqui Bouchard

//Construct an array of objects
//Each object should have two properties: topping and quantity
//Convert it to JSON format
//Send it to the client with proper headers

const express = require('express');
const ordersRouter = express.Router("http://localhost:3002/orders"); //establish relation with server

order1 = {"topping":"cherry", "quantity":2};
order2 = {"topping":"plain", "quantity":6};
order3 = {"topping":"chocolate", "quantity":3};

myObj = [order1, order2, order3];

myJSON = JSON.stringify(myObj);

//Define a route for the orders
ordersRouter.post('/', (req, res) => {
    res.send(myJSON);
});

//Send a JSON object to be displayed on the url: http://localhost:3002/orders
ordersRouter.get('/', (req, res) => {
    res.send(myJSON);
});

module.exports = ordersRouter;
