const { Router } = require('express');
const restaurantController = require('../controllers/restaurantController');
const { checkAuth } = require('../middleware/authMiddleware');

const router = Router();

router.get('/api/restaurant/get-restaurants', checkAuth, restaurantController.get_restaurants);
router.get('/api/restaurant/get-restaurants-subscribtion', checkAuth, restaurantController.get_restaurants_subscrition);
router.post('/api/restaurant/add-restaurants-subscribtion', checkAuth, restaurantController.add_restaurants_subscrition);
router.delete('/api/restaurant/delete-restaurants-subscribtion', checkAuth, restaurantController.delete_restaurants_subscrition);
router.put('/api/restaurant/update-restaurants-subscribtion', checkAuth, restaurantController.update_restaurants_subscrition);
router.get('/api/restaurant/get-restaurant-branches', checkAuth, restaurantController.get_restaurant_branches);
router.get('/api/restaurant/get-branch-menu-item', checkAuth, restaurantController.get_branch_menu_item);
router.get('/api/restaurant/get-branch-menu-items', checkAuth, restaurantController.get_branch_menu_items);
router.get('/api/restaurant/get-detailed-branch-menu-items', checkAuth, restaurantController.get_detailed_branch_menu_items);

module.exports = router;