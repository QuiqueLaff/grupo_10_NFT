const path = require('path');
const db = require("../database/models")

module.exports = {
    home: (req, res) => {
        


        db.Products.findAll({ include: "productCategory" })
            .then((product) => {
                if (product.length >= 3) {
                    let myArray = []
                    while (myArray.length < 3) {
                        var randomIndex = Math.floor(Math.random() * product.length);
                        var checked = false;
                        for (var i = 0; i < myArray.length; i++) {
                            if (myArray[i] == randomIndex) {
                                checked = true;
                                break;
                            }
                        }
                        if (!checked) {
                            myArray[myArray.length] = randomIndex;
                        }
                    }

                    return res.render("home", { product, myArray })
                } else {
                    return res.render("home", { product })
                }
            }).catch((error) => {
                return res.send(error)
            })
    },
    cart: (req, res) => {
        
       
        if (req.body.product){
            db.Products.update({
                order_id : req.session.order.id
            },{
                where:{id : req.body.product}
            }).then((data)=>{
                
                db.Products.findAll({
                    where:{
                        order_id:req.session.order.id
                    }
                }).then(products =>{
                    res.render("products/cart",{products})
                }).catch((error)=>{
                    res.send(error)
                })
            })
        }else{
            db.Products.findAll({
                where:{
                    order_id :req.session.order.id
                }
            }).then(products =>{
                    
                res.render("products/cart",{products, total})
            })
        }
        
    },

    compra: (req,res) =>{
        
        
        if(req.body.owner){
            db.Cart.create({
                user_id:req.session.loggedUser.id
            }).then((data)=>{
                db.Orders.update(
                    {
                        quantity : req.body.owner,
                        cart_id : data.id
                    },{
                        where:{
                            id: req.session.order.id
                        }
                    })
            }).then(()=>{
                db.Products.update({
                    user_id: req.session.loggedUser.id
                },{
                    where:{
                        order_id : req.session.order.id
                    }
                })
            }).then(()=>{
                
                return res.render("compraRealizada")
            })
            
        }else{
            return res.render("/")
        }
        
    }
}