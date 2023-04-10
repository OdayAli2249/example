var db_connection = require('./db/db_connection');
var connection = db_connection.getConnection();

// commit, save points, rollback is needed here

module.exports.get_orders = (data, callback) => {
    var query = connection.query('SELECT * FROM user_order WHERE user_id = ' + data.userId,
        function (err, result) {
            if (err) throw err;
            console.log('select result: ' + result.insertId);
            console.log('select result: ' + JSON.stringify(result));
            callback(result);
        });
}

module.exports.add_order = (data, callback) => {
    connection.query('INSERT INTO user_order SET ?', { order_type_id: data.orderType, user_id: data.userId, order_status_id: data.orderStatus /* default 6 when requested by customer-user */ }, function (err, result) {
        if (err) throw err;
        connection.query('SELECT LAST_INSERT_ID();', function (err, result) {
            if (err) throw err;
            var orderItems = [];
            for (i = 0; i < data.branchMenuItems.length; i++) {
                var orderItem = [data.branchMenuItems[i].quantity,
                data.branchMenuItems[i].branchMenuItemId,
                result.insertId];                   // check here
                orderItems.push(orderItem);
            }
            connection.query('INSERT INTO order_item (Quantity,branch_menu_item_id,order_id) VALUES ?', [orderItems], function (err, result) {
                if (err) throw err;
                console.log('insert result: ' + result.insertId);
                console.log('insert result: ' + JSON.stringify(result));
                callback(result);
            });
        });
    });
}

module.exports.update_order = (data, callback) => {
    // step 1:
    if (data.branchMenuItems)
        connection.query('DELETE FROM order_item WHERE order_id = ' + data.orderId,
            function (err) {
                if (err) throw err;
                var orderItems = [];
                for (i = 0; i < data.branch_menu_items.length; i++) {
                    var orderItem = [data.branchMenuItems[i].quantity,
                    data.branchMenuItems[i].branchMenuItemId,
                    data.orderId];
                    orderItems.push(orderItem);
                }
                var query = connection.query('INSERT INTO order_item (Quantity,branch_menu_item_id,order_id) VALUES ?', [orderItems], function (err, result) {
                    if (err) throw err;
                    // step 2:
                    if (data.orderTypeId || data.orderStatusId)
                        update_order_property(data, callback);
                    else callback(result);
                });
            });
    else if (data.orderTypeId || data.orderStatusId)
        update_order_property(data, callback);
}

var update_order_property = function (data, callback) {
    connection.query('UPDATE user_order SET ' +
        (data.orderStatusId ? 'order_status_id = ' + data.orderStatusId : '') +
        (data.orderTypeId && data.orderStatusId ? ',' : '') +
        (data.orderTypeId ? ' order_type_id = ' + data.orderTypeId : '') +
        ' WHERE ID = ' + data.orderId,
        function (err, result) {
            if (err) throw err;
            console.log('update result: ' + result.insertId);
            console.log('update result: ' + JSON.stringify(result));
            callback(result);
        });
}

module.exports.delete_order = async (data, callback) => {
    var query = connection.query('DELETE FROM order_item WHERE order_id = ' + data.orderId,
        function (err, result) {
            if (err) throw err;
            connection.query('DELETE FROM user_order WHERE ID = ' + data.orderId,
                function (err, result) {
                    if (err) throw err;
                    console.log('delete result: ' + result.insertId);
                    console.log('delete result: ' + JSON.stringify(result));
                    callback(result);
                });
        });
}