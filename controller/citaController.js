const Cita = require('../models/user.js');


////...::CREAR CITA::...////

module.exports.createCita = async (req, res) => {
    try {
        const returnDate = new Date();
        //returnDate.setDate(returnDate.getDate() + 2)
        const Cita = await Cita.create({
            id_user: req.body.id_user,
            hora_cita: returnDate,
            servicio: req.body.STRING,
            sala: req.body.STRING,
            status: req.body.STRING,
            precio: req.body.INTEGER,
            concluida: req.body.BOOLEAN
        });
            //const cita = await order.addOrder(req.body.products)
            
            res.send({
                message: 'Order successfully completed'
            })
        
    } catch (error) {
        console.error(error);
        res.status(500).send({
            message: 'There was a problem+ trying to create the order'
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
                message: 'Ha habido un problema localizando al usuario'
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