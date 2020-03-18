const { Router } = require('express');
const UserController = require('./controllers/UserController');
const SessionService = require('./services/SessionService');
const verifyToken = require('./controllers/VerifyToken');

const routes = Router();

routes.post('/user/login', SessionService.login);

// payload example:
// { name: 'vini', email: 'vini@vini.com', password: '1234' }
routes.post('/user', UserController.createUser);

routes.use(verifyToken);

routes.get('/users', UserController.getAllUsers);

routes.get('/user/:id', UserController.getOneUser);

routes.put('/user/:id', UserController.editUser);

routes.delete('/user/:id', UserController.deleteUser);

module.exports = routes;
