const { isUser, isGuest } = require('../middleware/guards');
const { register, login } = require('../services/user');
const { mapErrors } = require('../util/mappers');

const router = require('express').Router();

router.get('/register', isGuest(), (req, res) => {
    res.render('register', { title: 'Register Page' });
});

router.post('/register', isGuest(), async (req, res) => {
    try {
        if (req.body.password.trim() == '') {
            throw new Error('Password is required!');
        } else if (req.body.password.trim().length < 5) {
            throw new Error('Password must be at least 5 characters long!');
        } else if (req.body.password != req.body.repass) {
            throw new Error('Passwords don\'t match!');
        }
        const user = await register(req.body.email, req.body.password, req.body.firstName, req.body.lastName); // Fields names
        req.session.user = user;
        res.redirect('/');
    } catch (err) {
        console.error(err);
        const errors = mapErrors(err);
        res.render('register', { title: 'Register Page', data: { email: req.body.email, firstName: req.body.firstName, lastName: req.body.LastName }, errors });  // Fields names
    }
});

router.get('/login', isGuest(), (req, res) => {
    res.render('login', { title: 'Login Page' });
});

router.post('/login', isGuest(), async (req, res) => {
    try {
        const user = await login(req.body.email, req.body.password); // Fields names
        req.session.user = user;
        res.redirect('/');
    } catch (err) {
        console.error(err);
        const errors = mapErrors(err);
        res.render('login', { title: 'Login Page', data: { email: req.body.email }, errors });  // Fields names
    }
});

router.get('/logout', isUser(), (req, res) => {
    delete req.session.user;
    res.redirect('/');
})

module.exports = router;