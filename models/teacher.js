const mongoose = require("mongoose");
const { Schema } = mongoose;
const Schemamodel = new Schema({
  name: { type: String },
  wifename: { type: String },
  updated_at: { type: Date, default: Date.now },
});
module.exports = mongoose.model("teacher", Schemamodel);