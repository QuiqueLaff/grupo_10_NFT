const path = require('path');


module.exports = {
    productDetail: (req, res) => {
        res.render(path.resolve('src/views/product.ejs'));
    },
    addProduct: (req, res) => {
        res.render(path.resolve('src/views/addProduct.ejs'));
    },
    editProduct: (req, res) => {
        res.render(path.resolve('src/views/editProduct.ejs'));
    },
    listOfProducts: function(){

    }
}