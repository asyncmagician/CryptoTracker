const express = require('express');
const path = require('path');
const router = express.Router();
const indexController = require('../controllers/indexController.js');

router.get('/', indexController.getIndex);

router.get('/signup', (req, res) => {
    res.sendFile(path.join(__dirname, '..', '..', 'views', 'sign-up.html'));
});


module.exports = router;
