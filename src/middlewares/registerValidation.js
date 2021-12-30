// const { check } = require("express-validator");

// const validator=[
//     check("firstname").notEmpty().withMessage("El nombre es obligatorio"),
//     check("lastname").notEmpty().withMessage("El apellido es obligatorio"),
//     check("email")
//         .notEmpty().withMessage("El Email es obligatorio").bail()
//         .isEmail().withMessage("Debe ingresar un formato de Email valido").bail(),
//     check("password")
//         .notEmpty().withMessage("La contraseña no puede estar vacia").bail()
//         .isLength({min:8}).withMessage("la contraseña debe tener al menos 8 caracteres"),
//     check("passwordconfirmation").custom((value,{req})=>{
//         if(value != req.body.password){
//             throw new Error("Las contraseñas deben de ser iguales");
//         }
//         return true;
//     })
// ]
//  module.exports = validator
