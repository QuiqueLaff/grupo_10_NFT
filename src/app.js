const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override');
const loggedUser = require("./middlewares/loggedUser")
const cookies = require("cookie-parser")
const cors = require('cors')

require('dotenv').config()




 const sesion = require('express-session') 


/* view engine */
app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "views"));



/* Config express */
app.use(express.static(path.resolve(__dirname, '../public')));
app.use(express.urlencoded({extended: false}))
app.use(methodOverride('_method'));
app.use (express.json());
app.use(sesion({secret: 'Cuidadito', resave : false, saveUninitialized: false})) 
app.use(cookies())
app.use(loggedUser)
app.use(cors())

/* Routes */

const mainRouter = require('./routes/main');
const usersRouter = require('./routes/users');
const productsRouter = require('./routes/products');
const { application } = require('express');

/* Main Router */ 

app.use('/', mainRouter);

/* Users */

app.use('/users', usersRouter);

/* Product */

app.use('/product', productsRouter);



app.listen(3050, () => console.log('Servidor funcionando en el 3050'));

