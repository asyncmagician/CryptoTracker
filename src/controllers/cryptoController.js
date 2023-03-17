const Crypto = require('../models/Crypto.js');
const fetchCoinGeckoData = require('../util/fetchCoinGeckoData.js');

exports.getFromTheApi = async (req, res) => {
  try {
    const cryptos = await fetchCoinGeckoData();
  
    // On supprimes les cryptomonnaies existantes
    await Crypto.deleteMany({});
  
    // On ajoute les cryptos à la base de données
    await Crypto.insertMany(cryptos);
  
    res.send('Cryptocurrencies has been successfully added to the database.');
    res.status(200);
  } catch (error) {
    res.send('Error while fetching data from CoinGecko API');
    res.status(500);
  }
};
  
  exports.getAllCryptos = async () => {
    try {
      const cryptos = await Crypto.find({});
      return cryptos;
    } catch (error) {
      console.error(error);
      throw new Error('Error while loading the cryptocurrencies');
    }
  };  

exports.sendAllCryptos = async (req, res) => {
    try {
      const cryptos = await Crypto.find({});
      res.status(200).json(cryptos);
    } catch (error) {
      console.error(error);
      res.status(500).send('Error while loading the cryptocurrencies');
    }
  };

  exports.createCrypto = async (req, res) => {
    try {
      const { name, symbol, rank } = req.body;
  
      const newCrypto = new Crypto({
        name,
        symbol,
        rank,
      });
  
      await newCrypto.save();
      
      res.status(200);
      res.redirect('/home');
    } catch (error) {
      console.error(error);
      res.status(500).send("Error while creating the cryptocurrency");
    }
  };
  
  
  exports.updateCrypto = async (req, res) => {
    try {
      const cryptoId = req.params.id;
      const { name, symbol } = req.body;
  
      const updatedCrypto = await Crypto.findByIdAndUpdate(cryptoId, {
        name,
        symbol,
      });

      if (updatedCrypto) {
        res.status(200).send(`The cryptocurrency ${updatedCrypto.name} has been updated successfully`);
      } else {
        res.status(404).send(`Cryptocurrency with id ${cryptoId} not found`);
      }
    } catch (error) {
      console.error(error);
      res.status(500).send('Error while updating the cryptocurrency');
    }
  };

  exports.getCryptoById = async (req, res) => {
    try {
      const cryptoId = req.params.id;
      const crypto = await Crypto.findById(cryptoId);
      if (crypto) {
        res.status(200).json(crypto);
      } else {
        res.status(404).send(`Cryptocurrency with id ${cryptoId} not found`);
      }
    } catch (error) {
      console.error(error);
      res.status(500).send('Error while loading the cryptocurrency');
    }
  };
  

  exports.deleteCrypto = async (req, res) => {
    try {
      const cryptoId = req.params.id;
      const deletedCrypto = await Crypto.findByIdAndDelete(cryptoId);
      if (deletedCrypto) {
        res.status(200).send(`The cryptocurrency ${deletedCrypto.name} has been deleted successfully`);
      } else {
        res.status(404).send(`Cryptocurrency with id ${cryptoId} not found`);
      }
    } catch (error) {
      console.error(error);
      res.status(500).send('Error while deleting the cryptocurrency');
    }
  };

  



