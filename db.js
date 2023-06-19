const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://thekoushikdurgas:YRkDKW5WdyOSqIVt@thekoushikdurgas.utmbo.mongodb.net/thekoushikdurgas"
// const mongoURI = "mongodb://localhost:27017/thekoushikdurgas" 
mongoose.set('strictQuery', true);
const connectToMongo = () => { mongoose.connect(mongoURI, () => { console.log("Connected to Mongo Successfully"); }) }
module.exports = connectToMongo;