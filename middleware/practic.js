const mongoose = require('mongoose')

const schemea = new mongoose.Schema({
    name : String,
    tID : {
        mid : mongoose.Schema.Types.ObjectId,
        ref : 'tname'
    }
})

let a = 

const schemeb = new mongoose.Schema({
    name : String,
    wname : String
})

