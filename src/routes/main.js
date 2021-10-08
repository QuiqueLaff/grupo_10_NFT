const express = require('express');
const router = express.Router();
const path = require('path');
const mainControllers = require('../controllers/mainControllers');

router.get('/', mainControllers.home);

router.get('/cart', mainControllers.cart);

module.exports = router;