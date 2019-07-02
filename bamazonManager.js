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
    runSearch();
  });


function runSearch() {
    console.log("\n--------\nSelect your option\n--------\n");
    inquirer.prompt({
        name: "action",
        type: "rawlist",
        message: "What are you looking for?",
        choices: [
            "View Products for sale",
            "View Low Inventory",
            "Add to inventory",
            "Add New Product"
        ]
    })
    .then(function(answer) {
        switch (answer.action) {
            case "View Products for sale":
                forSale();
                break;

            case "View Low Inventory":
                lowInventory();
                break;

            case "Add to Inventory":
                addInventory();
                break;

            case "Add New Product":
                newProduct();
                break;
        }
    });
}


function forSale() {
    inquirer
      .prompt({
          name: "sale",
          type: "input",
          message: "This is what you have for sale. Press Enter"
      }).then(function(answer) {
        var table = "SELECT * FROM products";
        connection.query(table, function (err, res) {
        console.log(res);
    runSearch();
        });
      });
    
}

function lowInventory() {
    inquirer
      .prompt({
          name: "low",
          type: "input",
          message: "This is the list of inventory that have less than 5 units. Press Enter"
      }).then(function(answer) {
        var query = "SELECT * FROM products WHERE stock_quantity < 5";
        connection.query(query, function (err, res) {
            console.log(res);
            runSearch();
        })
      })
}

function addInventory() {
    inquirer
      .prompt([
          {
          name: "productId",
          message: "Which product would you like add inventory to?",
          },{
              name: "units",
              message: "How many units would you like to add?"
          }
      ]).then(function(answer) {
          var query = "UPDATE products set stock_quantity = 5 where item_id = 1; "
      })
}

function newProduct() {
    inquirer
        .prompt([
            {
            name: "name",
            type: "input",
            message: "What product would you like to add?"
            },
            {
            name: "department",
            type: "input",
            message: "What department is it in?"
            },
            {
            name: "price",
            type: "input",
            message: "What is the Price"
            },
            {
            name: "quantity",
            type: "input",
            message: "How many are in stock"
            }
        ])
        .then(function(answer) {
            var query = "INSERT INTO products (product_name, department_name, price, stock_quantity)";
            query += "VALUES (?, ?, ?, ?)";

            connection.query(query, [answer.name, answer.department, answer.price, answer.quantity], function(err, res) {
              console.log(
                  "Product: " +
                    res[0].product_name +
                    "Department: " +
                    res[1].department_name +
                    "Price: " +
                    res[2].price +
                    "Quantity: " +
                    res[3].stock_quantity
              );
              runSearch();
            });
        });
    }















//         var productID = answer.productID;
//         var units = answer.units;
//         var query = "SELECT * FROM products WHERE ?";

//         connection.query(query, { item_id: answer.productID }, function (err, res) {
//             console.log(res);
           
//             var currentQuantity = res[0].stock_quantity;
//             var newQuantity = currentQuantity - units;
//                 if (currentQuantity < units) {
//                     console.log("Insufficent amount. Please make a new selection");
//                     promptPurchase();
//                 } else if (currentQuantity > units) {
//             console.log("There are " + newQuantity + " left");
                
//             var currentPrice = res[0].price;
//             var totalCost = (units * currentPrice);
//                 connection.query(totalCost, function (err, res) {
//                     console.log("your total cost is " + totalCost);
                    
                  
//             });
//         var updateQuery = "UPDATE products SET stock_quantity = ? WHERE item_id = ?";
//         connection.query(updateQuery, [newQuantity, productID], function (err, res) {
//             console.log(res);
//             promptPurchase();

//         });
//                 }
    
//         })


//     });
// }