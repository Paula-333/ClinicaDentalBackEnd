
const {User,sequelize} = require('../models/user.js');
// const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const secret = 'migatitobonito';


  
////////////....:::CREAR USUARIO:::....////////////


 module.exports.createUser = async (req, res) => {
    
    try {
        await User.create({
            id: req.body.id,
            nombre: req.body.nombre,
            apellidos: req.body.apellidos,
            nacimiento: req.body.nacimiento,
            telefono: req.body.telefono,
            email: req.body.email,
            password: req.body.password,
            dni: req.body.dni,
            role: 'User',
        
    }).then(user => {res.json(user);
                res.json({
                    message: 'te has registrado correctamente'
                })
            });
          
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: 'ha habido un problema'
        })
    }
};          

////////////....:::LOGIN:::....////////////
/*
module.exports.login = (req, res, next)=>{
    
    const {email,password} = req.body;
    if (!email || !password ) return res.json({error:'No encuentra el usuario'})

    const data = User.find (e=> e.email === email && e.password === password);
    if (!data) return res.json ({error: 'No es correcto'})

    const token = jwt.sign({user:data.id}, secret, {expiresIn: 60 * 60 *24});
    res.json({token: token, mensaje: 'login correcto'})

    //validar token//

    jwt.verify(token, secret, function(err, token) {
        if (err) {
          return res.status(401).send({
            ok: false,
            message: 'Token inválido'
          });
        } else {
          req.token = token
          next()
        }

    });
}
*/
////////////....:::LOGOUT:::....////////////



