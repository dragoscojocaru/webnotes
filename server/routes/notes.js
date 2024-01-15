var express = require('express');
var router = express.Router();
const notesController = require('../controller/note');

router.route('/all')
    .get(notesController.getAll); 
router.route("/:id")
    .get(notesController.getNote);


module.exports = router;
