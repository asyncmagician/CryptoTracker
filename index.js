const express = require('express');
const mongoose = require('mongoose');
const config = require('./config.js'); 
const Crypto = require('./models/Crypto');

// On lances notre serveur express qui sert le port 3000
const app = express();
const port = 3000;

// On se connecte à la base de données
mongoose.connect(config.mongoDB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
});
