const path = require('path');

module.exports = {
    register: (req, res) => {
        res.render(path.resolve('src/views/register.ejs'));  
    },
    login: (req, res) => {
        res.render(path.resolve('src/views/login.ejs'));
    }
}