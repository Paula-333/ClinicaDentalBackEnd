const router = require('express').Router();
const userController = require('../controller/userController.js');

//Ruta para mostrar los usuarios
router.post('/createUser', userController.createUser);//CREAR USUARIO
router.post('/login', userController.login);//LOGIN
//router.post('/logout', userController.logout);//LOGOUT

module.exports = router;
