const path = require('path');
const db = require("../database/models")


module.exports = {
    home: (req, res) => {
        db.Products.findAll()
            .then((product)=>{
                console.log(product);
                return res.render("home",{product})
            }).catch((error)=>{
                return res.send(error)
            })
    },
    cart: (req, res) => {
        res.render('cart');
    }
}