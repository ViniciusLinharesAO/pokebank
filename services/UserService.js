const { User } = require('./../app/models');
const bcrypt = require('bcryptjs');

class UserService {

  async getAllUsers() {
    console.log('buscando todos os usuários');
    return await User.findAll();
  }

  async getOneUser(id) {
    console.log(`buscando o usuario = ${id}`);
    return await User.findAll({
      where: {
        id: id
      }
    });
  }

  async createUser(payload) {
    console.log(`criando o usuario = ${payload}`);
    const salt = bcrypt.genSaltSync(10);
    payload.password = bcrypt.hashSync(payload.password, salt);

    return await User.create( payload );
  }

  async editUser(id, payload) {
    console.log(`editando o usuario de id = ${id}`);
    const salt = bcrypt.genSaltSync(10);
    payload.password = bcrypt.hashSync(payload.password, salt);
    const result = await User.update(
      payload, {
      where: {
        id: id
      }
    });
    return !!result[0];
  }

  async deleteUser(id) {
    console.log(`deletando o usuario de id = ${id}`);
    return await User.destroy({
      where: {
        id: id
      }
    });
  }

}

module.exports = new UserService();