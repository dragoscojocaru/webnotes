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

exports.createNote = (req, res) => {
    if (!req.body.discipline_id) {
      res.status(400).send({
        message: "Discipline can not be empty!"
      });
      return;
    }

    if (!req.body.created_by) {
        res.status(400).send({
          message: "Created by can not be empty!"
        });
        return;
    }

    if (!req.body.title) {
        res.status(400).send({
          message: "Title can not be empty!"
        });
        return;
    }
  
    const note = {
      title: req.body.title ? req.body.title : "",
      content: req.body.content,
      created_by: req.body.created_by,
      discipline_id: req.body.discipline_id
    };
  
    Note.create(note)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "There was an error creating a new note!"
        });
      });
  };

exports.updateNote = (req, res) => {
    const id = req.params.id;
  
    Note.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: `Note with id: ${id} was updated successfully!`
          });
        } else {
          res.send({
            message: `There was an error updating note with id: ${id}`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: `Error updating note with id: ${id}`
        });
      });
  };


  exports.deleteNote = (req, res) => {
    const id = req.params.id;
  
    Note.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: `Tutorial with id: ${id} was deleted successfully!`
          });
        } else {
          res.send({
            message: `Cannot delete Tutorial with id=${id}. Maybe Tutorial was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Tutorial with id=" + id
        });
      });
  };

