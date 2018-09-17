const Controllers = require('../controllers/controllers');

module.exports = (app) => {

    app.get('/cakes', (req, res) => {
        Controllers.cakes(req, res);
    });

    app.get('/cake/:id', (req, res) => {
        Controllers.cake(req, res);
    });

    app.post('/cake', (req, res) => {
        Controllers.post(req, res);
    });

    app.put('/cake/:id', (req, res) => {
        Controllers.put(req, res);
    });

    app.post('/rate/:cakeID', (req, res) => {
        Controllers.postRate(req, res);
    });
}