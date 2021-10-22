const path = require('path');
const fs = require('fs');
const res = require('express/lib/response');

let jsonProducts = fs.readFileSync(path.resolve(__dirname, '../db/products.json'), 'utf-8');
let products = JSON.parse(jsonProducts); 



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
    listOfProducts: (req, res) => {
        res.render('listOfProducts', { products })

    }
}

