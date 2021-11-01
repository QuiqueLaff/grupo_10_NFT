const express = require('express');
const router = express.Router();
const path = require('path');
const multer = require ('multer');
const productControllers = require('../controllers/productControllers');

// MULTER
const storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null, path.resolve(__dirname, '../../public/images'))
    },
    filename: function(req,file,cb){
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})
const upload = multer({storage: storage})
// 

router.post('/', upload.any(),  productControllers.store);

router.get('/', productControllers.listOfProducts);


/* Agregar Producto */

router.get('/addProduct', productControllers.addProduct);


/* Editar Producto */

router.get('/editProduct/:id', productControllers.editProduct);
router.put('/editProduct/:id', productControllers.update);

/* Detalle del Producto */

router.get('/:id', productControllers.productDetail);


/* Borrar Producto */

router.delete('/:id', productControllers.delete);








module.exports = router;