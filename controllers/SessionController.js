const SessionService = require('./../services/SessionService');

class SessionController {
    async login(req, res) {
        SessionService.login(req.body)
        .then((response) => {
            res.json(response);
        })
        .catch(err => {
            throw new Error(err);
        });
    }
}

module.exports = new SessionController();