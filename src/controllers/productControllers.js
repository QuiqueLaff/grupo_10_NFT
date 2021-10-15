const path = require('path');


module.exports = {
    productDetail: (req, res) => {
        res.render(path.resolve('src/views/product.ejs'));
    },
    addProduct: function(req, res){
        res.render(path.resolve('src/views/addProduct.ejs'));
    },
    editProduct: function(req, res){
        res.render(path.resolve('src/views/editProduct.ejs'));
    },
    listOfProducts: function(){

    }
}