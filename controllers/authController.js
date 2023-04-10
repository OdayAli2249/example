const jwt = require('jsonwebtoken');
const { TOKEN_EXPIRATION_DATE, SECRET_KEY } = require('../constants');
const { create_user, find_user } = require('../models/authModel');

// create json web token
const createToken = (id) => {
    return jwt.sign({ id }, SECRET_KEY, {
        expiresIn: TOKEN_EXPIRATION_DATE
    });
};

// controller actions

module.exports.signup_post = async (req, res) => {
    // const { email, password } = req.body;
    console.log(req.body);
    console.log(req.headers);

    try {
        console.log(req.body.password);
        create_user(req.body, (userData) => {
            console.log(userData);
            var token = createToken(userData);
            res.setHeader('token', token);
            res.status(201).json({ res: 'ok' });
        });
    }
    catch (err) {
        // const errors = handleErrors(err);
        res.status(400).json({ errors });
    }
}

module.exports.login_post = async (req, res) => {
    // const { email, password } = req.body;
    console.log(req.body);

    try {

        // const user = await User.login(email, password);
        find_user(req.body, (userData) => {
            var token = createToken(userData);
            res.setHeader('token', token);
            res.status(201).json({ res: 'ok' });
        });

    }
    catch (err) {
        // const errors = handleErrors(err);
        res.status(400).json({ errors });
    }

}

module.exports.logout_get = (req, res) => {
    //   res.cookie('jwt', '', { maxAge: 1 });
    res.status(200).json({ res: 'ok' });
}