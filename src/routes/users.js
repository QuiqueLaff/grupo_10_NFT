const express = require('express');
const router = express.Router();
const path = require('path');
const multer = require ('multer');
const usersControllers = require('../controllers/usersControllers');
const adminMiddleware = require("../middlewares/autorizations/adminMiddleware")
const guestMiddleware = require ('../middlewares/autorizations/guestMiddleware')
const authMiddleware = require ('../middlewares/autorizations/authMiddleware')
const userOwnerMiddleware = require("../middlewares/autorizations/userOwnerMiddleware")
const userApi = require('../API/userApi')
const validatorUser = require ('../middlewares/validations/userValidator')
const logValidator = require('../middlewares/validations/logValidator')


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
router.get('/',adminMiddleware, usersControllers.renderUserList);


// Registro 

router.get('/register', guestMiddleware, usersControllers.register);
router.post('/register', upload.single('userImage'), validatorUser , usersControllers.store);

// Update 
router.get("/:id/update",userOwnerMiddleware, usersControllers.viewUpdateUser)
router.put("/:id/update",upload.single('image'), usersControllers.updateUser)

//Delete
router.delete('/:id/delete',userOwnerMiddleware, usersControllers.deleteUser);


// Login

router.get("/login", guestMiddleware, usersControllers.loginView)
router.post("/login", logValidator ,usersControllers.login)

//profile
router.get("/profile/:id",userOwnerMiddleware, usersControllers.profileView)


//logout

router.get("/logout",authMiddleware, usersControllers.logout);

// API User
router.get("/api/users/", userApi.getUserList)

// API UserId
router.get ("/api/users/:id", userApi.getUserDetail)



module.exports = router;
