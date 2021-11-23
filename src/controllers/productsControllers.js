const path = require('path');
const fs = require('fs');
const res = require('express/lib/response');
const { validationResult } = require('express-validator');

let jsonProducts = fs.readFileSync(path.resolve(__dirname, '../db/products.json'), 'utf-8');
let products = JSON.parse(jsonProducts); 

const nuevoId = () => {
    let ultimo = 0;
    products.forEach(product => {
        if (products.id > ultimo) {
            ultimo = product.id;
        }
    });
    return ultimo + 1;
}

module.exports = {

    productList: (req, res) => {
        res.render('listOfProducts', { products })
    },

    productsAddView: (req, res) => {
        res.render('addProduct');
    },   

    productsAdd: (req, res) =>{
        //let validations = validationResult(req);
        let images = [ req.files[0].filename, req.files[1].filename]
        let newProduct = {
            id: nuevoId(),
            ...req.body,
             image: images || 'default-image.png',
        }
     
        products.push(newProduct);
        let jsonDeProducts = JSON.stringify(products, null, 4);
        fs.writeFileSync(path.resolve(__dirname, '../db/products.json'), jsonDeProducts);
        res.redirect('/');
    },
    
    productsUpdateView: (req, res) => {
        let productoEditar = products.find(product => {
            return product.id == req.params.id;
        })
        res.render('editProduct', { product: productoEditar });
    },

    productsUpdate: (req, res) => {
        for(let i =0; i < products.length; i++){
            if(req.file && products[i].avatar != "default-image.png" ){
                fs.unlinkSync(path.resolve(__dirname, "../../public/images/users", products[i].avatar))
            }
            let product = {
                ...products[i],
                username : req.body.username ? req.body.username: products[i].user,
                avatar : req.file ? req.file.filename : products[i].avatar,
                password : bcrypt.compareSync(req.body.password,products[i].password) ? products[i].password : 
                bcrypt.hashSync(req.body.password),
                adress : req.body.adress ? req.body.adress: products[i].adress,
            }
                        
            if(products[i].id == user.id){
                products.splice(i,1,user);
            }
            
        };
        usersJSON = JSON.stringify(products,null, 4);
        fs.writeFileSync(path.resolve(__dirname,"../db/users.json"), usersJSON);
        res.redirect("/users");

        /*products.forEach(product => {
            if (product.id == req.params.id) {
                product.name = req.body.name;
                product.detail = req.body.detail;
                product.price = req.body.price;
                product.artistname = req.body.artistname;
                product.artistbio = req.body.artistbio;
                product.artistcode = req.body.artistcode;
                product.image = (req.files && req.files[0]) ? [req.files[0].filename, req.files[1].filename] : ['default-image.png', 'default-image.png'];
            }
        })
        let productToEdit = products.find(product => {
            return product.id == req.params.id;
        })
        
        let jsonDeProductos = JSON.stringify(products, null, 4);
        fs.writeFileSync(path.resolve(__dirname, '../db/products.json'), jsonDeProductos);
        res.redirect('/product');*/
    },

    productsDelete: (req, res) => {
        let productosRestantes = products.filter(product => {
            return product.id != req.params.id;
        })

        let jsonDeProducts = JSON.stringify(productosRestantes, null, 4);
        fs.writeFileSync(path.resolve(__dirname, '../db/products.json'), jsonDeProducts);
    
        res.redirect('/');
    },
    productsDetail: (req, res) => {
        let id = req.params.id;
        let productoDetalle = products.find(product => {
            return product.id == id;
        })
        res.render('product', { product: productoDetalle });
    },

}
