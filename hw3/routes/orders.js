/**
 * orders.js
 * Name: Jacqui Bouchard
 * 
 * error fixes from class 3/20/2025: npm install mysql, npm install async 
*/

const PORT = 3002;
const express = require('express');
const ordersRouter = express.Router(`http://localhost:${PORT}/orders`); //establish relation with server
var dbms = require('./dbms');

/* From HW4
order1 = {"topping":"cherry", "quantity":2};
order2 = {"topping":"plain", "quantity":6};
order3 = {"topping":"chocolate", "quantity":3};

myObj = [order1, order2, order3];

myJSON = JSON.stringify(myObj);
*/


//Define a route for the orders
ordersRouter.post('/', (req, res) => {
    
    //FOR HW5 PART 2
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July",
        "Aug", "Sept", "Oct", "Nov", "Dec"];
    const monthNumber = months.indexOf(req.body.month) + 1; //get month
    
    console.log(`\nTEST TEST ${monthNumber} TEST TEST\n`); //for testing

    //EXTRA PARAM FOR DBQUERY: mysql.except(monthNumber)
    dbms.dbquery(`SELECT * FROM orders WHERE month = ${monthNumber};`,
        (err, results) => { 
            if (err) {
                res.status(500);
            } else {
                console.log(results); // testing
                res.json(results);
            }
        }
    );
});

//Send a JSON object to be displayed on the url: http://localhost:${PORT}/orders
ordersRouter.get('/', (req, res) => {
    res.send(myJSON);
});

module.exports = ordersRouter;
