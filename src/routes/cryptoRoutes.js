const express = require('express');
const cryptoController = require('../controllers/cryptoController.js');

const router = express.Router();

router.get('/update-cryptos', cryptoController.updateCryptos);

module.exports = router;
