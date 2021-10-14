const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.resolve(__dirname, '../public')));

/* view engine */
app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "views"));

/* Routes */

const mainRouter = require('./routes/main');
const usersRouter = require('./routes/users');
const productRouter = require('./routes/product');

/* Main Router */ 

app.use('/', mainRouter);

/* Users */

app.use('/users', usersRouter);

/* Product */

app.use('/product', productRouter);

app.listen(process.env.PORT || 3050, () => console.log('Servidor funcionando en el 3050'));

