const express = require('express');
const path = require('path');
const requireAuth = require('../middlewares/requireAuth.js');
const cryptoController = require('../controllers/cryptoController.js');

const router = express.Router();

router.get('/home', requireAuth, async (req, res) => {
    try {
      const cryptos = await cryptoController.getAllCryptos();
      res.sendFile(path.join(__dirname, '..', '..', 'views', 'read.html'), { cryptos: cryptos });
    } catch (error) {
      console.error(error);
      res.status(500).send('Error while retrieving the datas from the database');
    }
  });

  router.get('/create', requireAuth, (req, res) => {
    res.sendFile(path.join(__dirname, '..', '..', 'views', 'create.html'));
});

router.get('/update', requireAuth, (req, res) => {
  res.sendFile(path.join(__dirname, '..', '..', 'views', 'update.html'));
});

router.get('/api/cryptos', requireAuth, cryptoController.sendAllCryptos);
router.post('/api/create', requireAuth, cryptoController.createCrypto);
router.get('/api/update', cryptoController.getFromTheApi);
router.get('/api/cryptos/:id', requireAuth, cryptoController.getCryptoById);
router.delete('/api/delete/:id', requireAuth, cryptoController.deleteCrypto);
router.put('/update/:id', requireAuth, cryptoController.updateCrypto);

module.exports = router;
