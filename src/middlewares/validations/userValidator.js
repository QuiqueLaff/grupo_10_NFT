const { check } = require("express-validator")

const validatorUser =[
    check("firstname")
    .notEmpty().withMessage("El nombre es obligatorio").bail()
    .isLength({min:2}).withMessage("Debe tener al menos 2 caracteres"),
    check("lastname").notEmpty().withMessage("El apellido es obligatorio"),
    check("email")
        .notEmpty().withMessage("El Email es obligatorio").bail()
        .isEmail().withMessage("Debe ingresar un formato de Email valido"),
    check("password")
        .notEmpty().withMessage("La contraseña no puede estar vacia").bail()
        .isLength({min:8}).withMessage("la contraseña debe tener al menos 8 caracteres"),
    check("confirmpassword").custom((value,{req})=>{
        console.log(value)
        console.log(req.body.password)
        if(value != req.body.password){
            throw new Error("Las contraseñas deben de ser iguales");
        } else {return true;}
    }),
    check('avatar').custom((value, { req }) => {
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

module.exports = validatorUser