const db = require ("../../database/models")

function productOwnerMiddleware(req,res, next) {

    if(typeof (res.locals.loggedUser) !== 'undefined'){
        db.Products.findOne({where: {id:req.params.id}})
            .then((result)=>{
                if(result.user_id == res.locals.loggedUser.id || res.locals.loggedUser.email == "admin@gmail.com"){
                    next();

                }else{
                    res.redirect("/")
                }

            })
    }else{
        res.redirect("/users/login")
    }
}

module.exports = productOwnerMiddleware;