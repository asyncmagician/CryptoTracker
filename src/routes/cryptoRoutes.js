const express = require('express');
const path = require('path');
const cryptoController = require('../controllers/cryptoController.js');

const router = express.Router();

router.get('/home', async (req, res) => {
    try {
      const cryptos = await cryptoController.getAllCryptos();
      res.sendFile(path.join(__dirname, '..', '..', 'views', 'read.html'), { cryptos: cryptos });
    } catch (error) {
      console.error(error);
      res.status(500).send('Erreur lors de la récupération des cryptomonnaies');
    }
  });

  router.get('/create', (req, res) => {
    res.sendFile(path.join(__dirname, '..', '..', 'views', 'create.html'));
});

router.get('/update', (req, res) => {
  res.sendFile(path.join(__dirname, '..', '..', 'views', 'update.html'));
});

router.get('/api/cryptos', cryptoController.sendAllCryptos);
router.post('/api/create', cryptoController.createCrypto);
router.get('/api/update', cryptoController.getFromTheApi);
router.get('/update/:id', cryptoController.updateCrypto);
router.delete('/api/delete/:id', cryptoController.deleteCrypto);

module.exports = router;
