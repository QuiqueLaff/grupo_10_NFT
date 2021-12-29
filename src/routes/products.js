const express = require('express');
const router = express.Router();
const path = require('path');
const multer = require ('multer');
const productsControllers = require('../controllers/productsControllers');

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


/* Listado de Productos */
router.get('/', productsControllers.productList);

/* Agregado de Productos + Vista */
router.get('/addProduct', productsControllers.productsAddView);
router.post('/addProduct', upload.single("artistimg"),  productsControllers.productsAdd);

/* Detalle del Producto */
router.get('/:id', productsControllers.productsDetail);

/* Editar Producto */
router.get('/:id/editProduct', productsControllers.productsUpdateView);
router.put('/:id/editProduct',upload.any(), productsControllers.productsUpdate);

/* Borrar Producto */
router.delete('/:id', productsControllers.productsDelete);











module.exports = router;