

function userOwnerMiddleware(req,res, next) {
    if(typeof (res.locals.loggedUser) !== 'undefined'){
        let email = req.session.loggedUser.email
        if (email == "admin@gmail.com" || req.session.loggedUser.id == req.params.id){
            next();
        }else{
            return res.redirect ('/');
        }
    }else{
        res.redirect("/users/login")
    }
}

module.exports = userOwnerMiddleware;