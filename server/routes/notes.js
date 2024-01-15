var express = require('express');
var router = express.Router();
const notesController = require('../controller/note');

router.route('/all')
    .get(notesController.getAll); 
router.route("/:id")
    .get(notesController.getNote);
router.route("/:id")
    .put(notesController.updateNote);
router.route("/create")
    .post(notesController.createNote);
router.route("/:id")
    .delete(notesController.deleteNote);

module.exports = router;
