const homeController = require('../controllers/home');
const itemController = require('../controllers/item');
const authController = require('../controllers/auth');
const notFoundController = require('../controllers/404');

module.exports = (app) => {
    app.use(homeController);
    app.use(itemController);
    app.use(authController);
    app.use(notFoundController);
};