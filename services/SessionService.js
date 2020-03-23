const { User } = require('./../app/models');
require('dotenv-safe').config();
const secret = process.env.SECRET;
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

class SessionService {
    async login(payload) {
        const userExist = await User.findOne({
            where: {
                email: payload.email
            }
        });

        if(!userExist){
            return ({ error: 'User do not exist'});
        }

        const resultPassword = await bcrypt.compare(payload.password, userExist.password);

        if(userExist && !resultPassword){
            return ({ error: 'Password invalid! '});
        }
        if(userExist && resultPassword){
            const id = userExist.id;
            const token = jwt.sign({ id }, secret, {
                expiresIn: '1d'
            });
            return ({ auth: true, token: token });
        }
    }
}

module.exports = new SessionService();