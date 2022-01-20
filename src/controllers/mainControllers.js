const path = require('path');
const db = require("../database/models")
//llamada al nombre de la categoria product[3].productCategory.category

module.exports = {
    home: (req, res) => {
        
        db.Products.findAll({include: "productCategory"})
            .then((product)=>{
                if(product.length >= 3){
                    let myArray = []
                    while(myArray.length < 3){
                        var randomIndex = Math.floor(Math.random()*product.length);
                        var checked = false;
                        for(var i=0;i<myArray.length;i++){
                            if(myArray [i] == randomIndex){
                                checked = true;
                                break;
                            }
                        }
                        if(!checked){
                            myArray[myArray.length] = randomIndex;
                        }
                        }
                        
                        return res.render("home",{product,myArray})
                }else{
                    return res.render("home",{product})
                }
            }).catch((error)=>{
                return res.send(error)
            })
    },
    cart: (req, res) => {
        res.render('cart');
    }
}