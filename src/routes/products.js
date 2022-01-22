const express = require('express');
const router = express.Router();
const path = require('path');
const multer = require ('multer');
const productsControllers = require('../controllers/productsControllers');
const productOwnerMiddleware = require("../middlewares/autorizations/productOwnerMiddleware")
const authMiddleware = require ('../middlewares/autorizations/authMiddleware')
const productApi = require('../API/productApi')


const {check} = require("express-validator")

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

const validationProducts = [
    check("name")
    .notEmpty().withMessage("No puede estár vacio!").bail()
    .isLength({min:5}).withMessage("Debe tener al menos 5 caracteres"),
    check("detail")
    .notEmpty().withMessage("La descripción no debe estar vacia").bail()
    .isLength({min:20}).withMessage("Debe tener al menos 20 caracteres"),
    check("price")
    .notEmpty().withMessage("Debes asiganar un valor"),
    check("artistname")
    .notEmpty().withMessage("Debes ingresar el nombre del artista").bail()
    .isLength({min:2}).withMessage("El nombre debe tener mas de 2 caracteres"),
    check("artistbio")
    .notEmpty().withMessage("Debes ingresar una biografia").bail()
    .isLength({min:20}).withMessage("Debe tener al menos 20 caracteres"),
    check("artistcode").notEmpty().withMessage("Debes asígnarte un codigo"),
    check("artistimg").custom((value, { req }) => {
		let file = req.file;
		let acceptedExtensions = ['.jpg', '.png', '.gif'];
		
		if (!file) {
			throw new Error('Debes subir una imagen');
		} else {
			let fileExtension = path.extname(file.originalname);
			if (!acceptedExtensions.includes(fileExtension)) {
				throw new Error(`El archivo debe ser: ${acceptedExtensions.join(', ')}`);
			}
		}

		return true;
	})

]

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

// API Product
router.get('/api/products', productApi.getProductList)

// API UserId
router.get ("/api/products/:id", productApi.getProductDetail)




module.exports = router;