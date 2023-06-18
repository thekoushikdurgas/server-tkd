const mongoose = require("mongoose");
const { Schema } = mongoose;
const Schemamodel = new Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
  name: { type: String, required: true },
  source: { type: String },
  description: { type: String },
  completeStatus: { type: Number, default: 0 },
  updated_at: { type: Date, default: Date.now },
});
module.exports = mongoose.model("todo", Schemamodel);