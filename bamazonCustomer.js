var inquirer = require("inquirer");
var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",

    PORT: 3306,

    user: "root",
    password: "35l4eJazz",
    database: "bamazone_db"
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
    promptPurchase();
  });
  
var table = "SELECT * FROM products";
connection.query(table, function (err, res) {
    console.log(res);
});


function promptPurchase() {
    console.log("\n--------\npromptPurchase: Select your purchase\n--------\n");
    inquirer.prompt([
        {
        name: "productID",
            message: "What item ID are you looking for",
        },{
        name: "units",
            message: "How many units would you like",
        }
    ])
    .then(function(answer) {
        var productID = answer.productID;
        var units = answer.units;
        var query = "SELECT * FROM products WHERE ?";

        connection.query(query, { item_id: answer.productID }, function (err, res) {
            console.log(res);
           
            var currentQuantity = res[0].stock_quantity;
            var newQuantity = currentQuantity - units;
                if (currentQuantity < units) {
                    console.log("Insufficent amount. Please make a new selection");
                    promptPurchase();
                } else if (currentQuantity > units) {
            console.log("There are " + newQuantity + " left");
                
            var currentPrice = res[0].price;
            var totalCost = (units * currentPrice);
                connection.query(totalCost, function (err, res) {
                    console.log("your total cost is " + totalCost);
                    
                  
            });
        var updateQuery = "UPDATE products SET stock_quantity = ? WHERE item_id = ?";
        connection.query(updateQuery, [newQuantity, productID], function (err, res) {
            console.log(res);
            promptPurchase();

        });
                }
    
        })


    });
}
