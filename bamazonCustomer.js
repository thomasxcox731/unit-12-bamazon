var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    // Your port; if not 3306
    port: 3306,
    // Your username
    user: "root",
    // Your password
    password: "zbikowski731",
    database: "bamazon"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    afterConnection();
});

function afterConnection() {
    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw err;
        for (var i = 0; i < res.length; i++) {
            console.log(res[i].id + " | " + res[i].name + " | " + res[i].department + " | " + res[i].price + " | " + res[i].quantity);

        };
        inquirer.prompt([

            {
                type: "list",
                name: "products",
                message: "What would you like to buy?",
                choices: [res[0], res[1], res[2], res[3], res[4], res[5], res[6], res[7], res[8], res[9]]
            },
        
            {
                type: "input",
                name: "units",
                message: "How many would you like?"
            }
        
            ]).then(function (user) {
                //I haven't found the right syntax to reference the items from the SQL list back here in the js. I've pseudocoded it to the best of my ability, but without that part of the syntax, I won't be able to get my app functional.
                if(user.products.quantity < user.units){
                    console.log("Insufficient Quantity!");
                };
                if(user.products.quantity >= user.units){
                    function Update(){
                        connection.query("UPDATE products SET quantity = user.products.quantity-1 WHERE id=user.products"), function (err, res){
                            if (err) throw err;
                        }
                    };
                    Update();
                    console.log("Your total will be: " + user.products.price);
                }
            });
        connection.end();
    });
};


