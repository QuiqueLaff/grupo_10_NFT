const path = require('path');


module.exports = {
    productDetail: (req, res) => {
        res.sendFile(path.resolve('src/views/product.html'));
    },
    addProduct: function(){

    },
    editProduct: function(){
        
    }
}