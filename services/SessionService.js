const { User } = require('./../app/models');
require('dotenv-safe').config();
const secret = process.env.SECRET;
const bcrypt = require('bcryptjs');

class SessionService {
    async login(req, res) {
        try{
        const { email, password } = req.body;
        const userExist = User.findOne({
            where: {
                email: email
            }
        });

        if(!userExist){
            res.status(500).send({ error: 'User do not exist'});
        }

        const resultPassword = bcrypt.compare(password, userExist.password);

        if(userExist && !resultPassword){
            res.status(400).send({ error: 'Password invalid! '});
        }
        if(userExist && resultPassword){
            const id = userExist.id;
            const token = jwt.sign({ id }, secret, {
                expiresIn: '1d' 
            });
            res.status(200).send({ auth: true, token: token });
        }
    }catch(err) {
        res.status(500).send({ err: 'Login Inválido!'});
        }
    }
}

module.exports = new SessionService();