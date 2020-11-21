 /*const {Cita,User,Sequelize}= require('../models');
const { Op } = Sequelize;



////...::CREAR CITA::...////

module.exports.createCita = async (req, res) => {

    const returnDate = new Date();
     
    try {
        await Cita.create ({
            idUser: req.body.idUser,
            fechaCita: returnDate,
            horaCita: req.body.horaCita,
            servicio: req.body.servicio,
            status: req.body.status,
            sala: req.body.sala,
            precio: req.body.precio,
        }).then(cita => {res.json(cita);
            res.json({
                message: 'Tu cita se ha creado'
            })
        });
        
    } catch (error) {
        console.error(error);
        res.status(500).send({
            message: 'No se ha podido crear la cita'
        })
    }
};          
////...::TODAS LAS CITAS::...////

module.exports.showAll = async (req, res) => {
      try {
        const ci= await Cita.findAll({
            include: [{
                model: User,
                attributes: ['nombre']
            }]
        });
        res.send(ci);
    } catch (error) {
        res.status(500).send({
            error, message: 'No se han podido mostrar las citas'
        })
    }

}
////...::BUSCAR CITA PENDIENTE::...////


module.exports.findCita = async (req,res) => {

    try{
        const cit = await Cita.findAll({
            include: [{where: { status: 'Pendiente'}}]
    });
    res.send(cit)

     
    } catch(error) {
        res.status(500).send({
            message: '¡ERROR! No se ha podido mostrar citas pendientes'
        })
    }
}



////...::BORRAR CITA::...////

module.exports.remove = async (req,res) => {
     await Cita.destroy({
        where: {email:req.body.email},
    }).then(borrado => {res.send(borrado);
});
}*/

const {
    Cita, User, Sequelize
} = require('../models');
const { Op } = Sequelize;

const CitaController = {
    async showAll(req, res) {
        try {
            const c = await Cita.findAll({
                include: [{
                    model: User,
                    attributes: ['nombre', 'apellidos']
                }]
            });
            res.send(c);
        } catch (error) {
            res.status(500).send({
                error, message: 'Ha habido un problema mostrando las citas'
            })
        }
    },
    //Ver citas pendientes
    findCita(req, res) {
        Cita.findAll({
            where: { status: 'pendiente', idUser: req.params.idUser }
        }).then(citas => {
            res.send(citas);
        }).catch(error => {
            res.status(500).send({
                message: 'Ha habido un problema localizando citas pendientes'
            })
        })
    },
    //Método para crear una cita
    createCita(req, res) {
        const c = req.body.cita;
        console.log(c);
        Cita.create(c).then(() => {
            res.status(200).end('Cita creada correctamente');
        }).catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
    },
    //Método para eliminar una cita
    remove(req, res) {
        Cita.destroy({
            where: { id: req.params.id }
        }).then(borrado => {
            res.send('Cita eliminada');
        })
            .catch(err => {
                console.log(err);
            });

    }

}
module.exports = CitaController;


