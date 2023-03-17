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


router.get('/api/cryptos', cryptoController.sendAllCryptos);
router.get('/update', cryptoController.getFromTheApi);
router.post('/create', cryptoController.createCrypto);
router.put('/update/:id', cryptoController.updateCrypto);
router.delete('/delete/:id', cryptoController.deleteCrypto);

module.exports = router;
