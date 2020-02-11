var mysql = require("mysql");
var inquirer = require("inquirer");
require("console.table");
var connection = mysql.createConnection({
    host: "localhost",
    port: 3006,
    user: "root",
    password: "password",
    database: "bamazon"
  });
connection.connect(function (err) {
  if (err) {
    console.log(error);
    
  }
  loadproducts();
});
function loadproducts () {
  connection.query("select * from products", function (err, res) {
    if (err) {
      throw err;
      
    }
  })
}
function checkinv (choiceId, inventory) {
  for (let i = 0; i < inventory.length; i++) {
    if (inventory[i].item_id === choiceId) {
      return inventory[i];
    }
    
  }
  return null;
}

function checshouldexit(choice) {
  if (choice.tolowercase() === "q") {
    console.log(bye);
    process.exit(0);
  }
}