
const {User, Sequelize} = require('../models/index.js');
const {Op} = Sequelize
const jwt = require('jsonwebtoken');
const user = require('../models/user.js');
const bcrypt = require('bcrypt');
//const secret = 'migatitobonito';
const auth = require('../middleware/auth.js');


  
////////////....:::CREAR USUARIO:::....////////////


 module.exports.createUser = async (req, res) => {
      
    try {
        await User.create({
            id: req.body.id,
            email: req.body.email,
            password: req.body.password,
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

module.exports.login = async (req,res,next) => {
    
    try {
        const user = await User.findOne({ // SELECT * FROM users WHERE email = ${req.body.email};
            where: {email: req.body.email}
        })
        if (!user) {
            return res.status(400).send({message: 'Error'});
        }
        const isMatch = await bcrypt.compare(req.body.password, user.password)

        if (!isMatch) {
            return res.status(400).send({message: 'Error'});
        }
        const token = jwt.sign({id: user.id}, 
            'migatitobonito', {
            //expiresIn: '2y'
        })
        res.send({user,token,message: 'Correcto'});
    } catch (error) {
        console.error(chalk.red(error))
        res.status(400).send({message: 'Error',error});
    }

}
//profile(req, res) {
  //  res.send(req.user)
//}
//}
//}


////////////....:::LOGOUT:::....////////////

/*module.exports.logout = async (req,res) => {
    req.logout();
    res.status(200).json({
    status: 'Bye!'
 });
}
*/

