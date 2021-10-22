const express = require('express');
const router = express.Router();
const path = require('path');
const multer = require ('multer');
const productControllers = require('../controllers/productControllers');


/* Detalle del Producto */
router.get('/:id', productControllers.productDetail);


/* Agregar Producto */

router.get('/addProduct', productControllers.addProduct);


/* Editar Producto */

router.get('/editProduct', productControllers.editProduct);


/* Lista de Productos */

router.get('/listOfProducts', productControllers.listOfProducts);




module.exports = router;