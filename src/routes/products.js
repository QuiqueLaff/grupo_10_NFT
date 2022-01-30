const express = require('express');
const router = express.Router();
const path = require('path');
const multer = require ('multer');
const productsControllers = require('../controllers/productsControllers');
const productOwnerMiddleware = require("../middlewares/autorizations/productOwnerMiddleware")
const authMiddleware = require ('../middlewares/autorizations/authMiddleware')
const productApi = require('../API/productApi')
const validationProducts = require('../middlewares/validations/prodValidator')
const totalApi = require('../API/totalApi')

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
router.get('/addProduct',authMiddleware, productsControllers.productsAddView);
router.post('/addProduct', upload.single("artistimg"), validationProducts, productsControllers.productsAdd);

/* Detalle del Producto */
router.get('/:id', productsControllers.productsDetail);

/* Editar Producto */
router.get('/:id/editProduct',productOwnerMiddleware, productsControllers.productsUpdateView);
router.put('/:id/editProduct',upload.single("artistimg"), productsControllers.productsUpdate);

/* Borrar Producto */
router.delete('/:id',productOwnerMiddleware, productsControllers.productsDelete);


// API Total products 
router.get('/api/products', totalApi.getTotalProducts)

// API Product
router.get('/api/products/page/:offset', productApi.getProductList)

// API UserId
router.get ("/api/products/:id", productApi.getProductDetail)




module.exports = router;