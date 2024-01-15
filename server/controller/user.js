const sequelize = require("../db/sequelize");

const db = require("../models");

const User = db.users;

// to retrieve resource
exports.getAll = (req, res, next) => {
    User.findAll().then(users => {
        res.json(users)
    }).catch(next);
};

exports.getUser = (req, res, next) => {
    User.findOne({ where: { id: req.params.id } }).then( user=> {
        res.json(user)
        
    }).catch(next);
};

// to create new resources
exports.createUser = (req, res, next) => {
            // Return our request body and return status OK
            res.json(req.body).status(200).send();
};
