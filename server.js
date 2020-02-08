var mysql = require("mysql");

var connection = require("./config/connection")
connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  showMods();
});

function showMods() {
  connection.query("SELECT * FROM race", function(err, res) {
    if (err) throw err;
    for (var i = 0; i < res.length; i++) {
      console.log(res[i].id + " | " + res[i].STR_mod + " | " + res[i].DEX_mod + " | " + res[i].CONST_mod + " | " + res[i].INT_mod + " | ");
    }
    console.log("-----------------------------------"); 
  });
}
