// File to define routes
const express = require('express');
const router = express.Router();
const controller = require('../containers/form');

router.get('/', controller.getForm);
router.post('/', controller.postForm);

module.exports = router;