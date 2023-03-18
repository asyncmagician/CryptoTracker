const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController.js');

router.post('/auth/login', authController.login);
router.post('/auth/register', authController.createUser);

module.exports = router;