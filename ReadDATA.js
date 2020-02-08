var mysql = require("mysql");
//test comment
var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "Fall2019",
  database: "DNDcharacter_db",
  
});
connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  showMods();
  showClasses();
});

function showMods() {
  connection.query("SELECT * FROM race", function(err, res) {
    if (err) throw err;
    for (var i = 0; i < res.length; i++) {
      console.log(res[i].id + " | " + res[i].race + " | " + res[i].STR_mod + " | " + res[i].DEX_mod + " | " + res[i].CONST_mod + " | " + res[i].INT_mod + " | ");
    }
    console.log("-----------------------------------"); 
  });
}

function showClasses() {
  connection.query("SELECT * FROM class", function(err, res) {
    if (err) throw err;
    for (var i = 0; i < res.length; i++) {
      console.log(res[i].id + " | " + res[i].Class + " | " + res[i].Hit_die + " | " + res[i].Primary_ability);
    }
    console.log("-----------------------------------"); 
    connection.end();
  });
}
