const path = require('path');

module.exports = {
    index: (req, res) => {
        res.sendFile(path.resolve('src/views/cart.html'));
    }
}