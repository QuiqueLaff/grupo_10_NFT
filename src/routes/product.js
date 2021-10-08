const express = require('express');
const router = express.Router();
const path = require('path');
const productControllers = require('../controllers/productControllers');

router.get('/', productControllers.productDetail);


module.exports = router;