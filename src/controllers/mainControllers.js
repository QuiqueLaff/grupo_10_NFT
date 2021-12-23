const path = require('path');
const db =require("../../database/models")


module.exports = {
    home: (req, res) => {
        res.render('home')
    },
    cart: (req, res) => {
        res.render('cart');
    }
}