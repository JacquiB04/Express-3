/**
 * dbms.js
 * Name: Jacqui Bouchard
 *
 * This file contains functions for accessing the MySQL database
 * which contains the Cheesecake order data.
 *
 */

exports.version = '0.0.1';

var mysql = require('mysql');
    async = require('async');

var host = "10.6.2.7";    //pdx0mysql00 IP address
var database = "db_boucharj27";  //database name
var user = "cs341-05";         //username (change to match your db)
var password = "gn2c8TMVw3tWK(xE";  //password (change to match your db, yes THIS IS VERY POOR PRACTICE)

//ssh into VM: ssh boucharj27@campus.up.edu@cs341game2.campus.up.edu
//to connect to sql: mysql -u cs341-05 -h pdx0mysql00.campus.up.edu -p
//to connect to db: use db_boucharj27;

/**
 * dbquery
 *
 * performs a given SQL query on the database and returns the results
 * to the caller
 *
 * @param query     the SQL query to perform (e.g., "SELECT * FROM ...")
 * @param callback  the callback function to call with two values
 *                   error - (or 'false' if none)
 *                   results - as given by the mysql client
 */
exports.dbquery = function(query_str, callback) {

    var dbclient;
    var results = null;
    
    async.waterfall([

        //Step 1: Connect to the database
        function (callback) {
            console.log("\n** creating connection.");
            dbclient = mysql.createConnection({
                host: host,
                user: user,
                password: password,
                database: database,
            });

            dbclient.connect(callback);
        },

        //Step 2: Issue query
        function (results, callback) {
            console.log("\n** retrieving data");
            dbclient.query(query_str, callback);
        },

        //Step 3: Collect results
        function (rows, fields, callback) {
            console.log("\n** dumping data:");
            results = rows;
            console.log("" + rows);
            callback(null);
        }

    ],
    // waterfall cleanup function
    function (err, res) {
        if (err) {
            console.log("Database query failed.  sad");
            console.log(err);
            callback(err, null);
        } else {
            console.log("Database query completed.");
            callback(false, results);
        }

        //close connection to database
        dbclient.end();

    });

}//function dbquery
