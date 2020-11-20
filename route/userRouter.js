const router = require('express').Router();
const userController = require('../controller/userController.js');

//Ruta para mostrar los usuarios
router.post('/createUser', userController.createUser);//CREAR USUARIO
router.get('/users',userController.users);
router.post('/login', userController.login);//LOGIN
//router.get('/logout', userController.logout);//LOGOUT

module.exports = router;
