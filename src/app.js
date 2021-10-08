const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.resolve(__dirname, '../public')));


/* Routes */

const mainRouter = require('./routes/main');
const usersRouter = require('./routes/users');
const productRouter = require('./routes/product');
const cartRouter = require('./routes/cart');



/* Main Router */ 

app.use('/', mainRouter);


/* Users */

app.use('/users', usersRouter);


/* Product */

app.use('/product', productRouter);


/* Cart */ 

app.use('/cart', cartRouter);



app.listen(process.env.PORT || 3050, () => console.log('Servidor funcionando en el 3050'));

