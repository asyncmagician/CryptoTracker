const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  email: String,
  password: String
});

class UserClass {
  getEmail() {
    return this.email;
  }

  setEmail(email) {
    this.email = email;
  }

  getPassword() {
    return this.password;
  }

  setPassword(password) {
    this.password = password;
  }
}

UserSchema.loadClass(UserClass);

const User = mongoose.model('User', UserSchema);
module.exports = User;
