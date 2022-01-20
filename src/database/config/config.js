require('dotenv').config();

module.exports = {
  "development": {
    "username": process.env.USER_DB,
    
    "database": process.env.NAME_DB, 
    "port": process.env.PORT_DB,
    "host": process.env.PORT,
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
