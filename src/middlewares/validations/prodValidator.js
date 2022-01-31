const {check} = require("express-validator")
const path = require('path');


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

module.exports = validationProducts