function guestMiddleare (req, res, next){
    if (req.session.loggedUser){
        res.redirect('/users/profile');
    }else{
        next();
    }
}

module.exports = guestMiddleare;