const express = require('express');
const mongoose = require('mongoose');
const config = require('./config.js');
const indexRoutes = require('./src/routes/indexRoutes.js');

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

// On définis nos routes
app.use(indexRoutes);

// On sert les fichiers statiques
app.use(express.static('public'));
  
  