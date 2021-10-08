const express = require('express');
const router = express.Router();
const path = require('path');
const productControllers = require('../controllers/productControllers');

router.get('/product', productControllers.productDetail);


module.exports = router;