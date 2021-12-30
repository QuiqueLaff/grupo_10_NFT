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
    check("firstname").notEmpty().withMessage("El nombre es obligatorio"),
    check("lastname").notEmpty().withMessage("El apellido es obligatorio"),
    check("email")
        .notEmpty().withMessage("El Email es obligatorio").bail()
        .isEmail().withMessage("Debe ingresar un formato de Email valido").bail(),
    check("password")
        .notEmpty().withMessage("La contraseña no puede estar vacia").bail()
        .isLength({min:8}).withMessage("la contraseña debe tener al menos 8 caracteres"),
    check("confirm-password").custom((value,{req})=>{
        if(value != req.body.password){
            throw new Error("Las contraseñas deben de ser iguales");
        }
        return true;
    }),
    check("avatar").custom((value,{req})=>{
        let file = req.filename;
        if(value = req.body.avatar){
            throw new Error("Debes subir una imagen");
        }
        return true;
    }),
]

const logvalidator = [
        check("email")
        .notEmpty().withMessage("Ingresa un Email valido").bail()
        .isEmail().withMessage("Debes ingresar un Email"),
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
module.exports = router;

