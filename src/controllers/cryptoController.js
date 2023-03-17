const Crypto = require('../models/Crypto.js');
const fetchCoinGeckoData = require('../util/fetchCoinGeckoData.js');

exports.updateCryptos = async (req, res) => {
  try {
    const cryptos = await fetchCoinGeckoData();
  
    // On supprimes les cryptomonnaies existantes
    await Crypto.deleteMany({});
  
    // On ajoute les cryptos à la base de données
    await Crypto.insertMany(cryptos);
  
    res.send('Les cryptomonnaies mises à jour');
    res.status(200);
  } catch (error) {
    res.send('Erreur lors de la récupération des données CoinGecko');
    res.status(500);
  }
};
