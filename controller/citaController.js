const {Cita,sequelize}= require('../models/cita.js');


////...::CREAR CITA::...////

module.exports.createCita = async (req, res) => {

    const returnDate = new Date();
     //returnDate.setDate(returnDate.getDate() + 2)
    try {
        await Cita.create ({
            idUser: req.body.idUser,
            fechaCita: returnDate.fechaCita,
            horaCita: req.body.horaCita,
            servicio: req.body.servicio,
            status: req.body.status,
            sala: req.body.sala,
            precio: req.body.precio,
            concluida: req.body.concluida
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

////...::BUSCAR CITA::...////


module.exports.findCita = async (req,res) => {
    let idCita = req.body.id;
    Cita.query(`SELECT * from Users WHERE id = ${idCita}`)
        .then(cita => res.send(cita))
        .catch(error => {
            console.error(error);
            res.status(500).send({
                message: 'Ha habido un problema con tu cita'
            })
        })
};

////...::BORRAR CITA::...////


module.exports.remove = async (req,res) => {
    await Cita.destroy({
        where: {Email:req.body.citaRemove},
    }).then(borrado => {res.send('borrado');
});
}

//module.exports = Cita;