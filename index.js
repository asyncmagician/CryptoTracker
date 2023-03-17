const express = require('express');
const mongoose = require('mongoose');
const config = require('./config.js');
const https = require('https');
const Crypto = require('./src/models/Crypto.js');

// On lances notre serveur express qui sert le port 3000
const app = express();
const port = 3000;

// On récupère les identifiants de connexion à la base de données et on vérifie l'état de connexion
mongoose.connect(config.mongoDB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
  console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.log('Connection Error:', err);
  })

// On vérifie que l'on écoutes bien le port:3000
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

app.use(express.static('public'));

  app.get('/update-cryptos', async (req, res) => {
    try {
      const cryptos = await fetchCoinGeckoData();
  
      // Supprimez toutes les cryptos existantes
      await Crypto.deleteMany({});
  
      // Ajoutez les nouvelles cryptos à la base de données
      await Crypto.insertMany(cryptos);
  
      res.send('Cryptomonnaies mises à jour');
    } catch (error) {
      res.status(500).send('Erreur lors de la récupération des données CoinGecko');
    }
  });
  
  