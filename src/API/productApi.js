const db = require("../database/models")

module.exports = {

    getProductList: (req, res) => {
        let categorias = db.Categories.findAll(
            {
                include : {all: true},
                limit :10,
                offset : 0
            }
        ) 
        let productos = db.Products.findAll(
            {
                include : {all: true},
                limit :3,
                offset :3
            }
        )
        Promise.all([productos, categorias])
        
        
        .then(function([productos, categorias]){
            const list = []
            const categoryList = []
            const countByCategory = {}

            
            
            productos.forEach(producto => {
                list.push({  
                    id: producto.id,
                    name: producto.name,
                    category: categorias[producto.category_id -1].category,
                    description : producto.detail,
                    image_url: "http://localhost:3050/images/" + producto.image
                })
                
                if (countByCategory[producto.category_id]) {
                    countByCategory[producto.category_id] += 1
                } else {
                    countByCategory[producto.category_id] = 1
                }
            })
            
            categorias.forEach(categoria =>
                categoryList.push({
                    name:categoria.category,
                    quantity: categoria.categoryProducts.length})
            )
            
            const formatedCategories = {}


            Object.keys(countByCategory).forEach(key => {
                const catName = categorias.find(c => c.id === parseInt(key)).category
                formatedCategories[catName] = countByCategory[key] 
                
            }) 
            
    
            
            return res.json({
                count: productos.length,
                categorys: categoryList,
                countByCategory: formatedCategories,
                products: list,
            })

         
        }).catch((error)=>{
            return res.send(error)
        })
    },

   
    getProductDetail: (req, res) => {
        db.Products.findByPk(req.params.id)
         .then((prod)=>{
            return res.json({
                id: prod.id,
                name: prod.name,
                price: prod.price,
                artist_name: prod.artist_name,
                artist_bio: prod.artist_bio,
                artist_code: prod.artist_code,
                category_id: prod.category_id,
                detail: prod.detail,
                order_id: prod.order_id,
                image :  prod.image
                
            })

            }).catch((error)=>{
                return res.send(error)
            })
    }

}