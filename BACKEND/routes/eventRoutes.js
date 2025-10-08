const express = require('express');
const { registerEvent, getMyRegistrations } = require('../controllers/eventController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/register', protect, registerEvent);
router.get('/my-registrations', protect, getMyRegistrations);

module.exports = router;