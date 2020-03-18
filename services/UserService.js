const { User } = require('./../app/models');

class UserService {

  async getAllUsers() {
    console.log(`\nbuscando todos os usuários`);
    return await User.findAll();
  }

  async getOneUser(req) {
    console.log(`\nbuscando o usuario = ${req.params.id}`);
    return await User.findAll({
      where: {
        id: req.params.id
      }
    });
  }

  async createUser(req) {
    console.log(`\ncriando o usuario = ${req.body}`);
    return await User.create(req.body);
  }

  async editUser(req) {
    console.log(`editando o usuario = ${req.params.id}`);
    return await User.update(
      req.body, {
      where: {
        id: req.params.id
      }
    });
  }

  async deleteUser(req) {
    console.log(`\ndeletando o usuario = ${req.params.id}`);
    return await User.destroy({
      where: {
        id: req.params.id
      }
    });
  }

}

module.exports = new UserService();