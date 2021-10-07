const express = require('express');
const path = require('path');

const app = express();
app.use(express.static(path.resolve(__dirname, 'public')));

app.get('/register', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'views/register.html'));
})

app.listen(process.env.PORT || 3050, ()=> console.log('Servidor funcionando en el 3050'));

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'views/home.html'));
})

app.get('/product', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'views/product.html'));
})

app.get('/login', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'views/login.html'));
})

app.get('/cart', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'views/cart.html'));
})

app.get('/register1', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'views/register1.html'));
})
