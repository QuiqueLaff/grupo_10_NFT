const path = require('path');
const fs = require('fs');
const res = require('express/lib/response');
const bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator');
const db =require("../../database/models")

const saltRounds = 10;

const jsonUsers = fs.readFileSync(path.resolve(__dirname, '../db/users.json'), 'utf-8');
const users = JSON.parse(jsonUsers); 


const nuevoUserId = () => {
    let ultimo = 0;
    users.forEach(user => {
        if (user.id > ultimo) {
            ultimo = user.id;
        }
    });
    return ultimo + 1;
}

module.exports = {
    register: (req, res) => {
        res.render('register');  
    },

    renderUserList: (req, res) => {
        
        res.render("listUsers",{ users });
    },
    


    store (req, res) {
       
        let userImage = req.file.filename || "default-image2.png"
       
        let newUser = {
            id: nuevoUserId(),
            ...req.body,
            password: bcrypt.hashSync(req.body.password, 10),
            image: userImage 
        }
        console.log(req.file);

        if(req.file){
            users.push(newUser);
            let jsonUsers = JSON.stringify(users, null, 4);
            fs.writeFileSync(path.resolve(__dirname, '../db/users.json'), jsonUsers);
            res.redirect('/');
        }else{
            res.render("/register")
        }    
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
        //res.send(user)
    },
    viewUpdateUser:(req,res)=>{
        let user = users.find(user => {
            return user.id = req.params.id
        })
        res.render("updateUser",{user});
    },
    updateUser: (req,res) =>{

        
        console.log(req.file)
        users.forEach(user => {
            if (user.id == req.params.id) {
                
                user.firstname = req.body.firstname;
                user.lastname = req.body.lastname;
                user.image = req.file ? req.file.image : user.image;
            }
        })
        
        let jsonUsers = JSON.stringify(users, null, 4); 
        fs.writeFileSync(path.resolve(__dirname, '../db/users.json'), jsonUsers);
        res.redirect('/users');

    }
    
    
}


// if (bcrypt.compareSync(req.body.password)
