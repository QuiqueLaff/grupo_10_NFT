const db = require("../database/models")

module.exports = {

    getProductList: (req, res) => {
        let categorias = db.Categories.findAll({include : {all: true}})
        let productos = db.Products.findAll({include : {all: true}})
        Promise.all([productos, categorias])
        
        
        .then(function([productos, categorias]){
            const list = []
            const countByCategory = {}
            productos.forEach(producto => {
                list.push({  
                    id: producto.id,
                    name: producto.name,
                    description : producto.detail,
                    detail: "http://localhost:3050/product/" + producto.id,
                })

                if (countByCategory[producto.category_id]) {
                    countByCategory[producto.category_id] += 1
                } else {
                    countByCategory[producto.category_id] = 1
                }
            })
            
            const formatedCategories = {}
        
            
            Object.keys(countByCategory).forEach(key => {
                const catName = categorias.find(c => c.id === parseInt(key)).category
                formatedCategories[catName] = countByCategory[key] 
                
            }) 


            return res.json({
                count: productos.length,
                countByCategory: formatedCategories,
                products: list,
            })

         
        }).catch((error)=>{
            return res.send(error)
        })
    },

    getProductDetail: (req, res) => {
    let categorias = db.Categories.findAll({include : {all: true}})

    db.Products.findAll()
            .then((product)=>{
                return res.json({
                    campoEnBase : product.map(function(prod){
                        return {
                            id: prod.id,
                            name: prod.name,
                            price: prod.price,
                            artist_name: prod.artist_name,
                            artist_bio: prod.artist_bio,
                            artist_code: prod.artist_code,
                            category_id: prod.category_id,
                            detail: prod.detail,
                            order_id: prod.order_id,
                            image : "http://localhost:3050/images/" + prod.id
                            
                        }
                    })
                });
                
            }).catch((error)=>{
                return res.send(error)
            })
    }


    

}