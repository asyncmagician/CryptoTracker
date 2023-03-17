const express = require('express');
const cryptoController = require('../controllers/cryptoController.js');

const router = express.Router();

router.get('/update', cryptoController.updateCryptos);
router.get('/home', cryptoController.getAllCryptos);

module.exports = router;
