const express = require('express');
const router = express.Router();
const path = require('path');
const usersControllers = require('../controllers/usersControllers');

router.get('/users/register', usersControllers.register);

router.get('/users/login', usersControllers.login)

module.exports = router;