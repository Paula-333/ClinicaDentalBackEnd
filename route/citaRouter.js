const router = require('express').Router();
const CitaController = require('../controller/citaController.js');

//Ruta
router.post('/createCita', CitaController.createCita);//CREAR CITA
router.get('/findCita/:id', CitaController.findCita);//CITAS PENDIENTES
router.delete('/remove', CitaController.remove);//BORRAR CITA


module.exports = router;