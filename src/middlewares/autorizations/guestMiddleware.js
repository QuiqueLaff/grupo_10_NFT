function guestMiddleware (req, res, next){
    if (req.session.loggedUser){
        res.redirect('/users/profile/' + req.session.id);
    }else{
        next();
    }
}

module.exports = guestMiddleware;