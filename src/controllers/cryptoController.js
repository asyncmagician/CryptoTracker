const Crypto = require('../models/Crypto.js');
const fetchCoinGeckoData = require('../util/fetchCoinGeckoData.js');

exports.getFromTheApi = async (req, res) => {
  try {
    const cryptos = await fetchCoinGeckoData();
  
    // On supprimes les cryptomonnaies existantes
    await Crypto.deleteMany({});
  
    // On ajoute les cryptos à la base de données
    await Crypto.insertMany(cryptos);
  
    res.send('Les cryptomonnaies ont étaient mises à jour et insérer en base de données');
    res.status(200);
  } catch (error) {
    res.send('Erreur lors de la récupération des données CoinGecko');
    res.status(500);
  }
};
  
  exports.getAllCryptos = async () => {
    try {
      const cryptos = await Crypto.find({});
      return cryptos;
    } catch (error) {
      console.error(error);
      throw new Error('Erreur lors de la récupération des cryptomonnaies');
    }
  };  

exports.sendAllCryptos = async (req, res) => {
    try {
      const cryptos = await Crypto.find({});
      res.status(200).json(cryptos);
    } catch (error) {
      console.error(error);
      res.status(500).send('Erreur lors de la récupération des cryptomonnaies');
    }
  };

exports.createCrypto = async (req, res) => {
  // ... A faire
};

exports.updateCrypto = async (req, res) => {
  // ... A faire
};

exports.deleteCrypto = async (req, res) => {
  // ... A faire
};

  



