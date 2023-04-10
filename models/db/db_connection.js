var props = require('./db_properties');
var mysql = require('mysql');

module.exports = {
    getConnection: () => {
        var connection = mysql.createConnection(props);
        return connection;
    }
}