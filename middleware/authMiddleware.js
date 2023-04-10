const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { SECRET_KEY } = require('../constants');

const checkAuth = (req, res, next) => {
    const token = req.headers.token;
    if (token) {
        try {
            const verified = jwt.verify(token, SECRET_KEY);
            console.log(verified.id);
            req.user = verified.id;
            next();
        } catch (err) {
            console.log(err.message);
            res.status(403).json({ res: 'Not authorized' });
        }
    } else {
        res.status(400).json({ res: 'Not authorized' });
    }
};

const hashPassword = async function (req, res, next) {
    const salt = await bcrypt.genSalt();
    req.body.password = await bcrypt.hash(req.body.password, salt);
    next();
};

// const checkPassword = async (req, res, next) => {
//     if (req.password) {

//         const auth = await bcrypt.compare(req.hahedPassword, req.password);
//         if (auth) {
//             return user;
//         }
//         throw Error('incorrect password');
//     }
//     throw Error('password required');

// };


module.exports = { checkAuth, hashPassword };