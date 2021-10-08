const express = require('express');
const router = express.Router();
const path = require('path');
const cartControllers = require('../controllers/cartControllers');


router.get('/', cartControllers.index);


module.exports = router;