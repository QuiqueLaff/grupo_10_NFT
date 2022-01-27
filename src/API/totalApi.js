const db = require("../database/models")

module.exports = {

    getTotalProducts: (req, res) => {
        let categorias = db.Categories.findAll(
            {
                include : {all: true},
            }
        ) 
        let productos = db.Products.findAll(
            {
                include : {all: true},
            }
        )
        console.log(typeof req.params.offset)

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
    }

}