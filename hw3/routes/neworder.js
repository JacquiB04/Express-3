/**
 * neworder.js
 * Name: Jacqui Bouchard
 * 
 * Notes from 3/20/2025:
 *    - app lives on personal machine
 *    - we are sending a request to the VM
 *    - personal computer has a backend with points, when we send a request, it will send a response back
 *    - when we send a request to the backend, it will send another request to the database, and that will
 *      send data
*/

const PORT = 3002;
const express = require('express');
const neworderRouter = express.Router(`http://localhost:${PORT}/neworder`); //establish relation with server
var dbms = require('./dbms');

//Define a route for the new orders
neworderRouter.post('/', (req, res) => {
    //FOR HW5 PART 3
    const toppings = ["Plain", "Vegan", "Chocolate", "Cherry"];
    var toppingID = toppings.indexOf(req.body.topping) + 1; //get month
    var quantity = req.body.quantity;
    var notes = req.body.notes;

    dbms.dbquery(
        `INSERT INTO orders (t_id, quantity, notes, month, year) VALUES (${toppingID},${quantity},'${notes}',3,2025);`,
        (err, result) => {
            if (err) {
                res.status(500);
            }
        }
    );
});

//Send a JSON object to be displayed on the url: http://localhost:3002/orders
neworderRouter.get('/', (req, res) => {
    res.send(myJSON);
});

module.exports = neworderRouter;