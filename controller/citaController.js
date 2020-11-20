const {Cita}= require('../models/index.js');


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

////...::BUSCAR CITA PENDIENTE::...////


module.exports.findCita = async (req,res) => {
    Appointment.findAll({
   
        where: {
            status:'pendiente', idUser: req.params.id
        }
    }).then(appointments => res.send(appointments))
    .catch(error => {
        console.error(error);
        res.status(500).send(error)
    })
    
}


/*
module.exports.findCita = async (req,res) => {
    Cita.findAll({
        where: {status:'Pendiente', idUser: req.params.id},
    }).then(cita => {
        res.send(cita);
    }).catch(error => {
        res.status(error).send({
            message: 'No se ha podido mostrar citas pendientes'
        })
    })
};
*/

////...::BORRAR CITA::...////


module.exports.remove = async (req,res) => {
    await Cita.destroy({
        where: {email:req.body.email},
    }).then(borrado => {res.send(borrado);
});
}

