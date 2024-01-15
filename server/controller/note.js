const sequelize = require("../db/sequelize");

const db = require("../models");

const Note = db.note;

// to retrieve resource
exports.getAll = (req, res, next) => {
    Note.findAll().then(note => {
        res.json(note)
    }).catch(next);
};

exports.getNote = (req, res, next) => {
    Note.findOne({ where: { id: req.params.id } }).then( note=> {
        res.json(note)
        
    }).catch(next);
};

