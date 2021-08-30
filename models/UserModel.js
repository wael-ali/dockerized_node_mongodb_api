const mongoose = require('mongoose');

const UserSechema = new mongoose.Schema({
  name: String,
  email: String
});

const User = mongoose.model('User', UserSechema);
module.exports = User;
