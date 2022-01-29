const express = require('express');
const router = express.Router();
const path = require('path');
const authMiddleware = require ('../middlewares/autorizations/authMiddleware')
const mainControllers = require('../controllers/mainControllers');

router.get('/', mainControllers.home);

router.post('/cart',authMiddleware, mainControllers.cart);

//Compra realizada
router.post("/compraRealizada", mainControllers.compra);

module.exports = router;