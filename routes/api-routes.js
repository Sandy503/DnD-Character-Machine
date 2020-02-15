const db = require("../models");

module.exports = app => {
    //GET ALL
    app.get("/api/characters/", function(req, res) {
        db.Character.findAll({})
          .then(result => {res.json(result);});
    });
    //GET ONE
    app.get("/api/characters/:id", (req, res) => {
        db.Character.findOne({
            where: {
                id: req.params.id
         }
         }).then(result => {return res.json(result)});
    });
    //GET all of a class
    app.get("/api/characters/:class", (req, res) => {
        db.Character.findAll({
            where: {
                class: req.params.class //this may change depending on the public js
            }
        }).then(result => {return res.json(result)});
    })
    //GET all of a race
    app.get("/api/characters/:race", (req, res) => {
        db.Character.findAll({
            where: {
                race: req.params.race //this may change depending on the public js
            }
        }).then(result => {return res.json(result)});
    })
    //POST
    app.post("/api/characters/", (req,res) => {
        db.Character.create({
            name: req.body.name,
            class: req.body.class, //this may change depending on the public js
            race: req.body.race, //this may change depending on the public js
            STRENGTH: req.body.STRENGTH,
            DEXTERITY: req.body.DEXTERITY,
            CONSTITUTION: req.body.CONSTITUTION,
            INTELLIGENCE: req.body.INTELLIGENCE,
            WISDOM: req.body.WISDOM,
            Alignment: req.body.alignment
        }).then(result => (res.json(result)));
    })

    //DELETE/DESTROY
    app.delete("/api/characters/:id", (req, res) => {
        db.Character.destroy({
          where: {
            id: req.params.id
          }
        }).then(result => {res.json(result)});
      });
    //PUT/UPDATE
    app.put("/api/characters/", (req, res) => {
        db.Character.update(req.body,
          {
            id: req.body.id
          }
        ).then(result => {res.json(result)});
      });
}