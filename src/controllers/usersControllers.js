const path = require('path');
const fs = require('fs');
const res = require('express/lib/response');
const bcrypt = require('bcryptjs');

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
    home: (req, res) => {

        res.render('users');
    }
    ,
    register: (req, res) => {
        res.render('register');  
    },

    store (req, res) {
        let userImage = req.file.filename

        let newUser = {
            id: nuevoUserId(),
            ...req.body,
            password: bcrypt.hashSync(req.body.password, 10),
             image: userImage || 'default-image2.png',
        }
     
        users.push(newUser);
    
        let jsonUsers = JSON.stringify(users, null, 4);
        fs.writeFileSync(path.resolve(__dirname, '../db/users.json'), jsonUsers);
    
        res.redirect('/');
    },
    
        login: (req, res) => {
            res.render('login');
        },
}


// if (bcrypt.compareSync(req.body.password)
