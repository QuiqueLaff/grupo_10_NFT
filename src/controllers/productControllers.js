const path = require('path');


module.exports = {
    productDetail: (req, res) => {
        res.render(path.resolve('src/views/product.ejs'));
    },
    addProduct: function(){

    },
    editProduct: function(){
        
    },
    listOfProducts: function(){

    }
}