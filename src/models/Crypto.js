const mongoose = require('mongoose');

const CryptoSchema = new mongoose.Schema({
  id: String,
  symbol: String,
  name: String
});

class CryptoClass {


  getId() {
    return this.id;
  }

  getSymbol() {
    return this.symbol;
  }

  getName() {
    return this.name;
  }

  setId(id) {
    this.id = id;
  }

  setSymbol(symbol) {
    this.symbol = symbol;
  }

  setName(name) {
    this.name = name;
  }
}

CryptoSchema.loadClass(CryptoClass);

const Crypto = mongoose.model('Crypto', CryptoSchema);
module.exports = Crypto;
