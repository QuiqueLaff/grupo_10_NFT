const { check } = require("express-validator")

const logValidator = [
    check("email")
    .notEmpty().withMessage("Debes ingresar un Email").bail()
    .isEmail().withMessage("Debes ingresar un Email valido"),
    check("password")
    .notEmpty().withMessage("Debes ingresar tu password").bail()
    .isLength({min:8}).withMessage("Contraseña demasiado corta"),
]

module.exports = logValidator