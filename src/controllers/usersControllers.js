const path = require('path');

module.exports = {
    register: (req, res) => {
        res.sendFile(path.resolve('src/views/register.html'));  
    },
    login: (req, res) => {
        res.sendFile(path.resolve('src/views/login.html'));
    }
}