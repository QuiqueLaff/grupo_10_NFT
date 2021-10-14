const path = require('path');


module.exports = {
    home: (req, res) => {
        res.render('home')
    },
    cart: (req, res) => {
        res.render('cart');
    }
}