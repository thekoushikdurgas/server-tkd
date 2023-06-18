const mongoose = require("mongoose");
const { Schema } = mongoose;
const UserSchema = new Schema({
  name: { type: String , default: "", },
  username: { type: String , default: "", },
  email: { type: String , default: "", unique: true, },
  password: { type: String , default: "", },
  picimg: { type: String , default: "", },
  phone: { type: String , default: "", },
  country: { type: String , default: "", },
  contacts: { type: Array , default: [], },
  blockcontacts: { type: Array , default: [], },
  rooms: { type: Array , default: [], },
  blockrooms: { type: Array , default: [], },
  gender: { type: String, default: "", },
  status: { type: String , default: "", },
  contact: { type: Array, default: [] },
  dof: { type: String , default: "", },
  date: { type: Date, default: Date.now, },
});
const User = mongoose.model("user", UserSchema);
module.exports = User;