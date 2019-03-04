const express = require('express');
const router = express.Router();
const controller = require('./controller');

router.get('/', controller.getUsers);
router.post('/:email', controller.createUser);

module.exports = router;