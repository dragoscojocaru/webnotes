var express = require('express');
var router = express.Router();
const userController = require('../controller/user');


router.route('/all')
    .get(userController.getAll); 
router.route("/:id")
    .get(userController.getUser);
router.route("/login")
    .post(userController.authenticateUser);

module.exports = router;
