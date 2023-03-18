const express = require('express');
const mongoose = require('mongoose');
const config = require('./config.js');
const multer = require('multer');
const session = require('express-session');
const crypto = require('crypto');

const indexRoutes = require('./src/routes/indexRoutes.js');
const cryptoRoutes = require('./src/routes/cryptoRoutes.js');
const authRoutes = require('./src/routes/authRoutes.js');

// On lances notre serveur express qui sert le port 3000
const app = express();
const upload = multer();
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

const key = crypto.randomBytes(32).toString('hex');
app.use(session({
  secret: key,
  resave: false,
  saveUninitialized: true,
  cookie: {
    secure: true,
    sameSite: 'none'
  }
}));


// On sert les fichiers statiques
app.use(express.urlencoded({ extended: true }));
app.use(upload.array());
app.use(express.static('public'));
app.use(express.json())

// On définis nos routes
app.use(indexRoutes);
app.use(cryptoRoutes);
app.use(authRoutes);

  
  