const { Router } = require('express');
const UserController = require('./controllers/UserController');

const routes = Router();

routes.get('/users', UserController.getAllUsers);

// payload example:
// { name: 'vini', email: 'vini@vini.com', password: '1234' }
routes.post('/user', UserController.createUser);

routes.get('/user/:id', UserController.getOneUser);

routes.put('/user/:id', UserController.editUser);

routes.delete('/user/:id', UserController.deleteUser);

module.exports = routes;
