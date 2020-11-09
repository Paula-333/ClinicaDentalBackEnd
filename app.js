const express = require('express');
//importamos librerias
const mysql = require('mysql2/promise');
//const json  = require('sequelize/types');
const userRouter = require('./route/userRouter.js')
const citaRouter = require('./route/citaRouter.js')
const historialRouter = require('./route/historialRouter.js')


const app = express();
const PORT = 3345;

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'clinica_dental_citas',
    password:'123456789'
})
.then(() => console.log('Sequelize conectado'))
.catch((error) => console.log('Error en conectar Sequelize', error));


app.use(express.json());


//CORS//
app.use(function(req, res, next) { //para evitar el error CORS
    res.header("Access-Control-Allow-Origin", "*"); //permite hacer peticiones desde todos los orígenes
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept"); //permite peticiones con las cabeceras enumeradas
    // res.header("Access-Control-Allow-Methods", "GET, POST");
    next();
});


//Enrutado a endpoints 

app.use('/user/', userRouter);
app.use('/cita/', citaRouter);
app.use('/historial/', historialRouter);




app.listen(PORT, () => console.log(`Servidor funcionando en puerto ${PORT}`));