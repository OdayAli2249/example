const { add_order, update_order, delete_order, get_orders } = require("../models/orderModel");

module.exports.get_orders = async (req, res) => {
    console.log(req.body);
    console.log(req.headers);

    try {
        req.body.userId = req.user.id;
        get_orders(req.body, (result) => {
            res.body = result;
            res.status(200).json({ res: res.body });
        })
    }
    catch (err) {
        // to do : handle Errors
        res.status(400).json({ errors });
    }
}

module.exports.add_order = async (req, res) => {
    console.log(req.body);
    console.log(req.headers);

    try {
        req.body.userId = req.user.id;
        add_order(req.body, (result) => {
            res.body = result;
            res.status(200).json({ res: res.body });
        })
    }
    catch (err) {
        // to do : handle Errors
        res.status(400).json({ errors });
    }
}

module.exports.update_order = async (req, res) => {
    console.log(req.body);
    console.log(req.headers);

    try {
        update_order(req.body, (result) => {
            res.body = result;
            res.status(200).json({ res: res.body });
        })
    }
    catch (err) {
        // to do : handle Errors
        res.status(400).json({ errors });
    }
}

module.exports.delete_order = async (req, res) => {
    console.log(req.body);
    console.log(req.headers);

    try {
        delete_order(req.body, (result) => {
            res.body = result;
            res.status(200).json({ res: res.body });
        })
    }
    catch (err) {
        // to do : handle Errors
        res.status(400).json({ errors });
    }
}