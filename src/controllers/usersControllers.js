const path = require('path');
const fs = require('fs');
const res = require('express/lib/response');
const bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator');
const db = require("../database/models");


module.exports = {
    register: (req, res) => {
        
        res.render('users/register');  
    },

    renderUserList: (req, res) => {
        db.Users.findAll()
            .then((users)=>{
                return res.render("users/listUsers" ,{ users });
                
            }).catch((error)=>{
                return res.send(error)
            })
    },
    
    store (req, res) {
        let error = validationResult(req);
        if (error.errors.length > 0){
            return res.render ('users/register', {
                errors: error.mapped(),
                oldData: req.body
            })
        }

        db.Users.create({
            first_name:req.body.firstname,
            last_name:req.body.lastname,
            email:req.body.email,
            avatar:req.file.filename,
            pass:bcrypt.hashSync(req.body.password, 10),
        })
            .then((user)=>{
                res.render("users/profile",{user})
           
            }).catch((error)=>{
                res.send(error)
            })
    },
    
    loginView: (req, res) => {
        res.render('users/login');
    },
  

    login: (req, res) => {      
        
        let error = validationResult(req);
        if (error.errors.length > 0){
            return res.render ('users/login', {
                errors: error.mapped(),
            })
        }


        let userToLog = db.Users.findOne({ where: { email: req.body.email } 
        }) .then((userToLog)=> {
            if(userToLog !== null && bcrypt.compareSync(req.body.password, userToLog.dataValues.pass )){
            req.session.loggedUser = userToLog;
            if (req.body.remember_user){
                res.cookie('userEmail', req.body.email, {maxAge: (1000 * 60) * 2})
            }
            res.redirect("/")
        }else res.render("login",{ errors :
            [{msg: "No exites como usuario"}]})

        })

    },

    profileView:(req, res)=> {
        let user = req.session.loggedUser
        res.render("users/profile",{"user":user})
    
    },
    viewUpdateUser:(req,res)=>{
        db.Users.findByPk(req.params.id)
            .then((user)=>{
                return res.render("users/updateUser",{user});
            })
        
    },
    updateUser: (req,res) =>{
        
        db.Users.update({
            first_name:req.body.firstname,
            last_name:req.body.lastname,
            email:req.body.email,
            avatar:req.file.filename,
            pass:bcrypt.hashSync(req.body.password, 10),

        },{
            where:{id:req.params.id}
        }).then(()=>{
            return res.redirect("/");
        }).catch((error)=>{
            return res.send(error)
        })
        
    },
    deleteUser:(req,res)=>{
        db.Users.destroy({
            where:{id:req.params.id},
        }).then(()=>{
            return res.redirect("/users")
        })
    },

   logout: (req, res) => {
       res.clearCookie("userEmail");
       req.session.destroy();
       res.redirect("/")
   }
    
    
}



