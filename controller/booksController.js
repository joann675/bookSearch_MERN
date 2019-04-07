const db = require("../models");
module.exports = {
    findAll: function (req, res) {
        db.Book.find(req.query).sort({ title: +1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => json(err));
    },

    
    create: function (req, res) {
        console.log("Server create " + JSON.stringify(req.body, null, 2));
        db.Book.create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.json(err));
    },

    
    remove: function (req, res) {
        db.Book.findById({ _id: req.params.id })
            .then(dbModel => dbModel.remove())

            .then(dbModel => res.json(dbModel))

            .catch(err => res.json(err));

    }
}