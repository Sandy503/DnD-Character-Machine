var express = require("express");
var path = require("path");

var router = express.Router();

module.exports = function(app) {
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "../Public/DandD.html"));
});

app.get("/character", function(req, res) {
  res.sendFile(path.join(__dirname, "../Public/newCharacter.html"))
});

app.get("/all", function(req, res) {
  res.sendFile(path.join(__dirname, "../Public/allCharacters.html"));
});
// When we have the html files for the "character creation" and "Stored characters" pages, I'll update the "/all" & "/character" routes.


};
