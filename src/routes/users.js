const express = require('express');
const {check} = require("express-validator")
const router = express.Router();
const path = require('path');
const multer = require ('multer');
const usersControllers = require('../controllers/usersControllers');
const guestMiddleare = require ('../middlewares/guestMiddleare')
const authMidelware = require ('../middlewares/authMidelware')


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
router.post('/register', upload.single('userImage'), usersControllers.store);

// Update 
router.get("/:id/update",usersControllers.viewUpdateUser)
router.put("/:id/update",upload.single('image'), usersControllers.updateUser)


// Login

router.get('/login', guestMiddleare, usersControllers.loginView)
router.post("/login", [
    check("email").isEmail().withMessage("Email incorrecto"),
    check("password").isLength({min:8}).withMessage("Contraseña demasiado corta"),
    ],usersControllers.login)

//profile
router.get("/profile", authMidelware, usersControllers.profileView)
module.exports = router;

