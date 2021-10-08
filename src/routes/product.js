const express = require('express');
const router = express.Router();
const path = require('path');
const productControllers = require('../controllers/productControllers');


/* Detalle del Producto */
router.get('/', productControllers.productDetail);


/* Agregar Producto */

router.get('/', productControllers.addProduct);


/* Editar Producto */

router.get('/', productControllers.editProduct);


/* Lista de Productos */

router.get('/', productControllers.listOfProducts);

module.exports = router;