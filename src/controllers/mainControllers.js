const path = require('path');


module.exports = {
    home: (req, res) => {
        res.render(path.resolve('src/views/home.ejs'));
    },
    cart: (req, res) => {
        res.render(path.resolve('src/views/cart.ejs'));
    }
}