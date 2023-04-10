const PORT = 8080;
const TOKEN_EXPIRATION_DATE = 3 * 24 * 60 * 60;
const SECRET_KEY = 'some secret key';


// error messages
const INCORRECT_PASSWORD = 'Incorrect password';
const PASSWORD_REQUIRED = 'password required';


module.exports = { PORT, TOKEN_EXPIRATION_DATE, SECRET_KEY, INCORRECT_PASSWORD, PASSWORD_REQUIRED };