const router = require('express').Router();
const HistorialController = require('../controller/historialController.js');

//Ruta
router.get('/historial', HistorialController.historial);

module.exports = router;