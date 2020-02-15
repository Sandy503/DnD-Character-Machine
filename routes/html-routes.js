var express = require("express");
var path = require("path");

var router = express.Router();

module.exports = function(app) {
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/DandD.html"));
});

app.get("/characters", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/characters.html"))
});

app.get("/create", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/newCharacter.html"));
});
// When we have the html files for the "character creation" and "Stored characters" pages, I'll update the "/all" & "/character" routes.


};
