const mongoose = require("mongoose");
const { Schema } = mongoose;
const Schemamodel = new Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
  link: { type: String, required: true },
  title: { type: String, required: true },
  icon: { type: String, required: true },
  svg: { type: String, required: true },
  img: { type: String, required: true },
  head: { type: String, required: true },
  sourcecode: { type: String, required: true },
  tooltypehead: { type: String, required: true },
  tooltypeicon: { type: String, required: true },
  tooltypeimg: { type: String, required: true },
  updated_at: { type: Date, default: Date.now },
});
module.exports = mongoose.model("unitconfig", Schemamodel);