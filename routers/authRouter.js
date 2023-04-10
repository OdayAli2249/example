const { Router } = require('express');
const authController = require('../controllers/authController');
const { hashPassword } = require('../middleware/authMiddleware');

const router = Router();

router.post('/api/auth/signup', hashPassword, authController.signup_post);
router.post('/api/auth/login', authController.login_post);
router.get('/api/auth/logout', authController.logout_get);

module.exports = router;