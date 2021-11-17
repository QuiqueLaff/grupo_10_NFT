function userLogged(req, res, next){
    res.locals.isLogged = false;
    if(req.session.loggedUser){
        res.locals.islogged = true;
        res.locals.loggedUser = req.session.loggedUser;
    }
    next();
}
module.exports = userLogged