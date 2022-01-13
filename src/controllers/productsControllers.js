const path = require('path');
const fs = require('fs');
const res = require('express/lib/response');
const { validationResult } = require('express-validator');
const db= require("../database/models")


module.exports = {

    productList: (req, res) => {
        db.Products.findAll()
            .then((product)=>{
                //return res.send(product)
                return res.render("listOfProducts",{products:product})
            }).catch((error)=>{
                return res.send(error)
            })
    },

    productsAddView: (req, res) => {
        db.Categories.findAll()
            .then((category)=>{
                return res.render("addProduct" ,{category})
            })
    },   
 

    productsAdd: (req, res) =>{
        let validationProducts = validationResult(req);
        if (validationProducts.errors.length > 0){
            db.Categories.findAll()
            .then((category)=>{
                return res.render("addProduct" ,{category, errors: validationProducts.mapped(),
                    oldData: req.body})
            })
        }else{

        db.Products.create({
            name:req.body.name,
            detail:req.body.detail,
            price:req.body.price,
            artist_name: req.body.artistname,
            artist_bio: req.body.artistbio,
            artist_code: req.body.artistcode,
            category_id: req.body.category,
            image: req.file ? req.file.filename : "default-image.png"

        }).then(()=>{
            res.redirect("/product")
        }).catch((error)=>{
            return res.send(error)
        })
    }
    },
    
    productsUpdateView: (req, res) => {
        db.Products.findByPk(req.params.id)
            .then((product)=>{
                return res.render('editProduct', { product });
            })
    },

    productsUpdate: (req, res) => {
        // console.log(req.body);
        console.log("El req.file es este")
        console.log(req.file)
        db.Products.update({
            name:req.body.name,
            price:req.body.price,
            artist_name: req.body.artistname,
            artist_bio: req.body.artistbio,
            artist_code: req.body.artistcode,
            category_id: req.body.category,
            image: req.file ? req.file.filename : "image-default.png"
            
        },{
            where:{id:req.params.id}
        }).then(()=>{
            return res.redirect('/product');
        }).catch((error)=>{
            res.send(error)
        })
    },

    productsDelete: (req, res) => {
        db.Products.destroy({
            where: {id:req.params.id}
        }).then(()=>{
            return res.redirect('/');
        })
    },

    productsDetail: (req, res) => {
        db.Products.findByPk(req.params.id)
            .then((product)=>{
                return res.render('product', { product });
            }).catch((error)=>{
                return res.send(error);
            })
    },

}
