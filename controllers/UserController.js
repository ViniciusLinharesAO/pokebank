const UserService = require('./../services/UserService');

class UserController {

  async getAllUsers(req, res) {
    UserService.getAllUsers()
      .then((response) => {
        res.json(response);
      })
      .catch(err => {
        throw new Error(err);
      });
  }

  async getOneUser(req, res) {
    UserService.getOneUser(req)
      .then((response) => {
        res.json(response);
      })
      .catch(err => {
        throw new Error(err);
      });
  }

  async createUser(req, res) {
    UserService.createUser(req)
      .then((response) => {
        res.json(response);
      })
      .catch(err => {
        throw new Error(err);
      });
  }

  async editUser(req, res) {
    UserService.editUser(req)
      .then((response) => {
        response[0] === 1 ? res.json('alteração aplicada') : res.json('alteração não aplicada');
      })
      .catch(err => {
        throw new Error(err);
      });
  }

  async deleteUser(req, res) {
    UserService.deleteUser(req)
      .then((response) => {
        response ? res.json('deleção aplicada') : res.json('deleção não aplicada');
      })
      .catch(err => {
        throw new Error(err);
      });
  }

}

module.exports = new UserController();
