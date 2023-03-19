const express = require('express');
const path = require('path');
const router = express.Router();
const checkAuth = require('../middlewares/checkAuth');
const indexController = require('../controllers/indexController.js');


router.get('/', checkAuth('/home'), indexController.getIndex);

router.get('/signup', checkAuth('/home'), (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'sign-up.html'));
});

module.exports = router;
