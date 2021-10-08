const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.resolve(__dirname, '../public')));


/* Routes */

const mainRouter = require('./routes/main');
const usersRouter = require('./routes/users');
const productRouter = require('./routes/product');
const cartRouter = require('./routes/cart');


app.use('/', mainRouter);

app.use('/users', usersRouter);

app.use('/product', productRouter);

app.use('/cart', cartRouter);



app.listen(process.env.PORT || 3050, () => console.log('Servidor funcionando en el 3050'));

