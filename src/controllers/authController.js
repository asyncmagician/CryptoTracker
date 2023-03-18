const User = require('../models/User.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const _ = require('lodash');
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

exports.createUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    // Vérifie l'unicité de l'adresse e-mail
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      throw new Error('Cet e-mail est déjà utilisé.');
    }

    // Hash le mot de passe avant de l'enregistrer dans la base de données
    const hashedPassword = await bcrypt.hash(password, 10);

    // Échappe les caractères spéciaux dans l'adresse e-mail
    const escapedEmail = _.escape(email);

    // On enregistre le nouvel utilisateur dans la base de données
    const newUser = new User({ email: escapedEmail, password: hashedPassword });
    await newUser.save();

    const token = generateToken(newUser);

    res.json({ token });
  } catch (error) {
    throw new Error(`Impossible de créer un nouvel utilisateur : ${error.message}`);
  }
};



