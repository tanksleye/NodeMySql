var inquirer = require("inquirer");

function Purchase(id, units) {
    this.id = id;
    this.units = units;

    this.makePurchase = function() {
        if (Math.floor(Math.random() * 2) === 0) {
            this.units--;
            console.log("There are " + units + " units left");
        }
    };
    console.log("Product ID is: " + this.id);
    console.log("How many units are left: " + this.units);
}

function promptPurchase() {
    console.log("\n--------\npromptPurchase: Select your purchase\n--------\n");
    inquirer.prompt([
        {name: "ID",
        message: "What is the product ID that you would like to buy: "
    }, {
        name: "units",
        message: "How many units of the porduct would you like to buy",
        validate: function(value) {
            if (isNaN(valve) === false && parseInt(value) > 0 && parseInt(value) <=10){
                return true;
            }
            return false;
        }
    }
    ])
    .then(function(answer) {
        var purchase = new Purchase
    })
};




// The first should ask them the ID of the product they would like to buy.
// The second message should ask how many units of the product they would like to buy.