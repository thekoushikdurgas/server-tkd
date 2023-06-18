const mongoose = require("mongoose");
const { Schema } = mongoose;
const Schemamodel = new Schema({
  name: { type: String },
  teacherid: { type: mongoose.Schema.Types.ObjectId, ref: "teacher" },
  updated_at: { type: Date, default: Date.now },
});
module.exports = mongoose.model("student", Schemamodel);