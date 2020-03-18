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
    UserService.getOneUser(req.params.id)
      .then((response) => {
        res.json(response);
      })
      .catch(err => {
        throw new Error(err);
      });
  }

  async createUser(req, res) {
    UserService.createUser(req.body)
      .then((response) => {
        res.json(response);
      })
      .catch(err => {
        throw new Error(err);
      });
  }

  async editUser(req, res) {
    UserService.editUser(req.params.id, req.body)
      .then((response) => {
        response ? res.json('alteração aplicada') : res.json('alteração não aplicada');
      })
      .catch(err => {
        throw new Error(err);
      });
  }

  async deleteUser(req, res) {
    UserService.deleteUser(req.params.id)
      .then((response) => {
        response ? res.json('deleção aplicada') : res.json('deleção não aplicada');
      })
      .catch(err => {
        throw new Error(err);
      });
  }

}

module.exports = new UserController();
