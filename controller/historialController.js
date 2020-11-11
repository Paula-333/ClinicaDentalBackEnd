const {Historial} = require('../models/index.js');


    module.exports.historial = async (req, res) => {
        await Historial.findAll()
            .then(historiales => res.send(historiales))
            .catch(error => {
                console.error(error);
                res.status(500).send({
                    message: 'No se han podido encontrar los historiales'
                })
            })
    }