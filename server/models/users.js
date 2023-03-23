const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  userName: { type: String },
  email: { type: String },
  phoneNumber: { type: Number },
  city: {type: String},
  address: {type: String},
  userRole: {type: String},
  password: { type: String }
})
const Users = mongoose.model('Users', userSchema);
module.exports = Users