var db_connection = require('./db/db_connection');
var connection = db_connection.getConnection();
var bcrypt = require('bcrypt');
const { INCORRECT_PASSWORD, PASSWORD_REQUIRED } = require('../constants');

module.exports.create_user = async (user, callback) => {
    var record = {
        FirstName: user.firstName,
        LastName: user.lastName,
        Email: user.email,
        Password: user.password,
        country_id: user.countryId,
        city_id: user.cityId,
        Address: user.addresId,
        Phone: user.phone
    };
    var ID;
    await connection.query('INSERT INTO user SET ?', record, function (err, result) {
        if (err) {
            throw err;
        }
        ID = result.insertId;

        console.log('inset result: ' + result.insertId);
        console.log('inset result: ' + JSON.stringify(result));
        callback({ id: ID, email: user.email })
    });
}

module.exports.find_user = async (user, callback) => {
    await connection.query('SELECT * FROM user WHERE Email = ' + '"' + user.email + '"', async function (err, result) {
        if (err) {
            throw err;
        }
        console.log('user.password' + user.password);
        console.log('result' + JSON.stringify(result));

        if (user.password) {
            const auth = await bcrypt.compare(user.password, result[0].Password);
            if (auth) {
                console.log('inset result: ' + JSON.stringify(result) + 'correct');
                callback({ id: result[0].ID, email: user.email })
            }
            else throw Error(INCORRECT_PASSWORD);
        } else throw Error(PASSWORD_REQUIRED);
    });
}