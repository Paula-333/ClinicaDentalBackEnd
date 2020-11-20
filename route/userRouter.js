const router = require('express').Router();
const userController = require('../controller/userController.js');

//Ruta para mostrar los usuarios
router.post('/createUser', userController.createUser);//CREAR USUARIO
router.get('/allUsers',userController.users);//USUARIOS
router.post('/login', userController.login);//LOGIN
//router.get('/logout', userController.logout);//LOGOUT

module.exports = router;
