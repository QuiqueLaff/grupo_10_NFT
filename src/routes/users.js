const express = require('express');
const { check } = require("express-validator")
const router = express.Router();
const path = require('path');
const multer = require ('multer');
const usersControllers = require('../controllers/usersControllers');
const guestMiddleare = require ('../middlewares/guestMiddleare')
const authMidelware = require ('../middlewares/authMidelware')

// Validaciones 
const validator =[
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

const logvalidator = [
        check("email")
        .notEmpty().withMessage("Debes ingresar un Email").bail()
        .isEmail().withMessage("Debes ingresar un Email valido"),
        check("password")
        .notEmpty().withMessage("Debes ingresar tu password").bail()
        .isLength({min:8}).withMessage("Contraseña demasiado corta"),
]


// MULTER

const storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null, path.resolve(__dirname, '../../public/images/users'))
    },
    filename: function(req,file,cb){
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
});

const upload = multer({storage: storage})


// Todos los usuarios 
router.get('/', usersControllers.renderUserList);


// Registro 

router.get('/register', guestMiddleare, usersControllers.register);
router.post('/register', upload.single('userImage'), validator , usersControllers.store);

// Update 
router.get("/:id/update",usersControllers.viewUpdateUser)
router.put("/:id/update",upload.single('image'), usersControllers.updateUser)

//Delete
router.delete('/:id/delete', usersControllers.deleteUser);


// Login

router.get("/login", guestMiddleare, usersControllers.loginView)
router.post("/login", logvalidator ,usersControllers.login)

//profile
router.get("/profile", authMidelware, usersControllers.profileView)


//logout

router.get("/logout", usersControllers.logout);

module.exports = router;
