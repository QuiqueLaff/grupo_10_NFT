const Pepe  = require("../database/models")

function userLogged(req, res, next){
    res.locals.isLogged = false;
    if(req.session.loggedUser){
        res.locals.islogged = true;
        res.locals.loggedUser = req.session.loggedUser;
    }
    let emailInCookie = req.cookies.userEmail;
    let userFromCookie = Pepe.Users.findOne({ where: { email: emailInCookie } 
    })
    console.log(userFromCookie)

    next();
}
module.exports = userLogged