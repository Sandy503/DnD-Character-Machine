const express = require("express");
const db = require("./models");

const app = express();
const PORT = process.env.PORT || 8080;

require("./routes/html-routes")(app);
require("./routes/api-routes")(app);

db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
  });
});
