const User = require('../models/User.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Recherche de l'utilisateur par email
    const user = await User.findOne({ email });

    // Vérification si l'utilisateur existe
    if (!user) {
      return res.status(401).json({ message: 'ERROR 401: The email or the password is incorrect' });
    }

    // Vérification si le mot de passe est correct
    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if (!isPasswordCorrect) {
      return res.status(401).json({ message: 'ERROR 401: The email or the password is incorrect' });
    }

    // Si tout est OK, on retourne un token d'authentification
    const token = generateToken(user);

    res.json({ token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'ERROR 500: Server Error' });
  }
}

function generateToken(user) {
  const payload = {
    sub: user.id,
    username: user.username,
    email: user.email
  };

  const jwtSecret = process.env.JWT_SECRET;

  const options = {
    expiresIn: '1d'
  };

  const token = jwt.sign(payload,jwtSecret,options);
  return token;
}

