var db_connection = require('./db/db_connection');
var connection = db_connection.getConnection();

module.exports.get_restaurants = async (callback) => {
    var query = connection.query('SELECT * FROM restaurant', function (err, result) {
        if (err) {
            throw err;
        }
        console.log('inset result: ' + result.insertId);
        console.log('inset result: ' + JSON.stringify(result));
        callback(result);
    });
}

module.exports.get_restaurants_subscribtion = async (data, callback) => {
    var query = connection.query('SELECT * FROM restaurant INNER JOIN user_restaurant_subscribtion where user_id = ' + data.userId + ' AND restaurant.ID = user_restaurant_subscribtion.restaurant_id;', function (err, result) {
        if (err) {
            throw err;
        }
        console.log('inset result: ' + result.insertId);
        console.log('inset result: ' + JSON.stringify(result));
        callback(result);
    });
}

module.exports.add_restaurants_subscribtion = async (data, callback) => {
    var row = {
        subscribtion_status_id: data.subscribtionStatusId,
        restaurant_id: data.restaurantId,
        user_id: data.userId
    };
    var query = connection.query('INSERT INTO user_restaurant_subscribtion SET ?', row, function (err, result) {
        if (err) {
            throw err;
        }
        console.log('inset result: ' + result.insertId);
        console.log('inset result: ' + JSON.stringify(result));
        callback(result);
    });
}


module.exports.delete_restaurants_subscribtion = async (data, callback) => {
    var row = {
        restaurant_id: data.restaurantId,
        user_id: data.userId
    };
    var query = connection.query('DELETE FROM user_restaurant_subscribtion WHERE restaurant_id = ' + row.restaurant_id + ' AND user_id = ' + row.user_id, function (err, result) {
        if (err) {
            throw err;
        }
        console.log('delete result: ' + result.insertId);
        console.log('delete result: ' + JSON.stringify(result));
        callback(result);
    });
}

module.exports.update_restaurants_subscribtion = async (data, callback) => {
    var row = {
        restaurant_id: data.restaurantId,
        user_id: data.userId,
        subscribtion_status_id: data.subscribtionStatusId
    };
    var query = connection.query('UPDATE user_restaurant_subscribtion SET subscribtion_status_id = ' + row.subscribtion_status_id + ' WHERE restaurant_id = ' + row.restaurant_id + ' AND user_id = ' + row.user_id, function (err, result) {
        if (err) {
            throw err;
        }
        console.log('update result: ' + result.insertId);
        console.log('update result: ' + JSON.stringify(result));
        callback(result);
    });
}


module.exports.get_restaurant_branches = async (data, callback) => {
    var row = {
        restaurant_id: data.restaurantId,
    };
    var query = connection.query('SELECT * FROM restaurant INNER JOIN branch WHERE branch.restaurant_id = restaurant.ID AND restaurant.ID = ' + row.restaurant_id + ';', function (err, result) {
        if (err) {
            throw err;
        }
        console.log('select result: ' + result.insertId);
        console.log('select result: ' + JSON.stringify(result));
        callback(result);
    });
}

module.exports.get_branch_menu_item = async (data, callback) => {
    var row = {
        menu_item_id: data.menuItemId,
    };
    var query = connection.query('SELECT * FROM menu_item WHERE ID = ' + row.menu_item_id + ';', function (err, result) {
        if (err) {
            throw err;
        }
        console.log('Worked!');
        console.log(result);
        callback(result);
    });
}

module.exports.get_branch_menu_items = async (data, callback) => {

    var row = {
        branch_id: data.branchId,
    };
    var query = connection.query('SELECT * FROM branch INNER JOIN branch_menu_item WHERE branch_menu_item.branch_id = branch.ID AND branch.ID = ' + row.branch_id + ';', function (err, result) {
        if (err) {
            throw err;
        }
        console.log('select result: ' + result.insertId);
        console.log('select result: ' + JSON.stringify(result));
        callback(result);
    });
}

module.exports.get_detailed_branch_menu_items = async (data, callback) => {
    var row = {
        branch_id: data.branchId,
    };
    var query = connection.query('SELECT * FROM branch INNER JOIN branch_menu_item ON branch_menu_item.branch_id = branch.ID AND branch.ID = ' + row.branch_id + ' INNER JOIN menu_item ON menu_item.ID = branch_menu_item.menu_item_id;', function (err, result) {
        if (err) {
            throw err;
        }
        console.log('select result: ' + result.insertId);
        console.log('select result: ' + JSON.stringify(result));
        callback(result);
    });
}