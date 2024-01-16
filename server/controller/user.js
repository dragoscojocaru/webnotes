const sequelize = require("../db/sequelize");

var crypto = require('crypto');

const db = require("../models");
const token = require("../models/token");

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

exports.getUserByToken = (req, res, next) => {
    User.findOne({ where: { id: req.params.id } }).then( user=> {
        res.json(user)
        
    }).catch(next);
};

exports.authenticateUser = (req, res, next) => {
    User.findOne({ where: { email: req.body.email } }).then( user=> {

        if (user.password = req.body.password) {

            var token = crypto.randomBytes(64).toString('hex');

            res.json(token).status(200).send();
            

        } else {
            res.status(401).send();
        }
        
    }).catch(next);
};

// to create new resources
exports.createUser = (req, res, next) => {
            // Return our request body and return status OK
            res.json(req.body).status(200).send();
};
