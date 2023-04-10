const { Router } = require('express');
const orderController = require('../controllers/orderController');
const { checkAuth } = require('../middleware/authMiddleware');

const router = Router();
router.get('/api/order/get-orders', checkAuth, orderController.get_orders);
router.post('/api/order/add-order', checkAuth, orderController.add_order);
router.put('/api/order/update-order', checkAuth, orderController.update_ordern);
router.delete('/api/order/delete-order', checkAuth, orderController.delete_order);

module.exports = router;