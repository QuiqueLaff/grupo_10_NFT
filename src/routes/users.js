const express = require('express');
const {check} = require("express-validator")
const router = express.Router();
const path = require('path');
const multer = require ('multer');
const usersControllers = require('../controllers/usersControllers');

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
router.get('/', usersControllers.home);


// Registro 

router.get('/register', usersControllers.register);
router.post('/register', upload.single('userImage'), usersControllers.store);


// Login

router.get('/login', usersControllers.loginView)
router.post("/login", [
    check("email").isEmail().withMessage("Email incorrecto"),
    check("password").isLength({min:8}).withMessage("Contraseña demasiado corta"),
    ],usersControllers.login)

//profile
router.get("/profile", usersControllers.profileView)
module.exports = router;