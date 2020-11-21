const {Cita}= require('../models');


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
        const cita = await Cita.findAll({
            include: [{
                model: User,
                attributes: ['nombre']
            }]
        });
        res.send(cita);
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
}

