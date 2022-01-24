

function adminMiddleware(req,res, next) {
    if(typeof (res.locals.loggedUser) !== 'undefined'){
        let email = req.session.loggedUser.email
        if (email == "admin@gmail.com"){
            next();
        }else{
            return res.redirect ('/');
        }
    }else{
        res.redirect("users/login")
    }
}

module.exports = adminMiddleware;