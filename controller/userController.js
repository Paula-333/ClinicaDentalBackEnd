
const {User} = require('../models/user.js');
// const bcrypt = require('bcrypt');
const secret = 'migatitobonito';
const auth = require('../middleware/auth.js');


  
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

//no tengo idea de si funciona o esta bien


module.exports.login = async (req,res,next) => {
    
    const token = jwt.sign({ 
        email: 'email', 
        password: 'password' 
    }, secret, { expiresIn: 60 * 60 * 24 });
        res.json({ token: token, message: 'Login correcto' });
    
        //validacion (?)
        jwt.verify(token, secret, function (err, token) {
             if (err) {
                return res.status(401).send({
                    ok: false,
                   message: 'Token incorrecto'
                });
             } else {
                 req.token = token
                 next()
             }
     })
}


////////////....:::LOGOUT:::....////////////



