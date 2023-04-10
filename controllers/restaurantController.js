const { get_restaurants, get_restaurants_subscribtion, add_restaurants_subscribtion, update_restaurants_subscribtion, get_restaurant_branches, get_branch_menu_item, get_detailed_branch_menu_items, get_branch_menu_items, delete_restaurants_subscribtion } = require("../models/restaurantModel");

module.exports.get_restaurants = async (req, res) => {
    console.log(req.body);
    console.log(req.headers);

    try {
            get_restaurants((result) => {
                res.body = result;
                res.status(200).json({ res: res.body });
            })
    }
    catch (err) {
        // to do : handle Errors
        res.status(400).json({ errors });
    }
}

module.exports.get_restaurants_subscrition = async (req, res) => {
    console.log(req.body);
    console.log(req.headers);

    try {
        req.body.userId = req.user.id;
        get_restaurants_subscribtion(req.body, (result) => {
            res.body = result;
            res.status(200).json({ res: res.body });
        })
    }
    catch (err) {
        // to do : handle Errors
        res.status(400).json({ errors });
    }
}

module.exports.add_restaurants_subscrition = async (req, res) => {
    console.log(req.body);
    console.log(req.headers);

    try {
        req.body.userId = req.user.id;
        add_restaurants_subscribtion(req.body, (result) => {
            res.body = result;
            res.status(200).json({ res: res.body });
        });
    }
    catch (err) {
        // to do : handle Errors
        res.status(400).json({ err });
    }
}

module.exports.delete_restaurants_subscrition = async (req, res) => {
    console.log(req.body);
    console.log(req.headers);

    try {
        req.body.userId = req.user.id;
        delete_restaurants_subscribtion(req.body, (result) => {
            res.body = result;
            res.status(200).json({ res: res.body });
        });
    }
    catch (err) {
        // to do : handle Errors
        res.status(400).json({ err });
    }
}

module.exports.update_restaurants_subscrition = async (req, res) => {
    console.log(req.body);
    console.log(req.headers);

    try {
        req.body.userId = req.user.id;
        update_restaurants_subscribtion(req.body, (result) => {
            res.body = result;
            res.status(200).json({ res: res.body });
        });
    }
    catch (err) {
        // to do : handle Errors
        res.status(400).json({ err });
    }
}

module.exports.get_restaurant_branches = async (req, res) => {
    console.log(req.body);
    console.log(req.headers);

    try {
        get_restaurant_branches(req.body, (result) => {
            res.body = result;
            res.status(200).json({ res: res.body });
        });
    }
    catch (err) {
        // to do : handle Errors
        res.status(400).json({ err });
    }
}

module.exports.get_branch_menu_item = async (req, res) => {
    console.log(req.body);
    console.log(req.headers);

    try {
        get_branch_menu_item(req.body, (result) => {
            res.body = result;
            res.status(200).json({ res: res.body });
        });
    }
    catch (err) {
        // to do : handle Errors
        res.status(400).json({ err });
    }
}

module.exports.get_branch_menu_items = async (req, res) => {
    console.log(req.body);
    console.log(req.headers);

    try {
        get_branch_menu_items(req.body, (result) => {
            res.body = result;
            res.status(200).json({ res: res.body });
        });
    }
    catch (err) {
        // to do : handle Errors
        res.status(400).json({ err });
    }
}

module.exports.get_detailed_branch_menu_items = async (req, res) => {
    console.log(req.body);
    console.log(req.headers);

    try {
        get_detailed_branch_menu_items(req.body, (result) => {
            res.body = result;
            res.status(200).json({ res: res.body });
        });
    }
    catch (err) {
        // to do : handle Errors
        res.status(400).json({ err });
    }
}