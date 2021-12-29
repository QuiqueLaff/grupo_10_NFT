const path = require('path');
const fs = require('fs');
const res = require('express/lib/response');
const bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator');
const db = require("../database/models");


module.exports = {
    register: (req, res) => {
        res.render('register');  
    },

    renderUserList: (req, res) => {
        db.Users.findAll()
            .then((users)=>{
                return res.render("listUsers",{ users });
            }).catch((error)=>{
                return res.send(error)
            })
    },
    
    store (req, res) {
        db.Users.create({
            first_name:req.body.firstname,
            last_name:req.body.lastname,
            email:req.body.email,
            avatar:req.file.filename,
            password:bcrypt.hashSync(req.body.password, 10),
        })
            .then(()=>{
                res.redirect('/')
            }).catch((error)=>{
                res.send(error)
            })
    },
    
    loginView: (req, res) => {
        res.render('login');
    },
    login: (req, res) => {        
        for(let i = 0; i< users.length; i++){
            if ( users[i].email == req.body.email){
                if(bcrypt.compareSync(req.body.password, users[i].password)){
                    var userToLog = users[i];
                    break;
                }
            }
        }
        if(userToLog == undefined){
            return res.render("login",{errors :[
                {msg: "La contraseña o el email son incorrectas, revisa los campos y logueate de nuevo"}
            ]})
        }
        req.session.loggedUser = userToLog;
        res.redirect("/users/profile");
    },

    profileView:(req, res)=> {
        let user = req.session.loggedUser
        
        res.render("profile",{"user":user})
        
    },
    viewUpdateUser:(req,res)=>{
        db.Users.findByPk(req.params.id)
            .then((user)=>{
                return res.render("updateUser",{user});
            })
        
    },
    updateUser: (req,res) =>{
        
        db.Users.update({
            first_name:req.body.firstname,
            last_name:req.body.lastname,
            email:req.body.email,
            avatar:req.file.filename,
            password:bcrypt.hashSync(req.body.password, 10),

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
            return res.redirect("/")
        })
    }

    
    
}



