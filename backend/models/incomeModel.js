const mongoose = require('mongoose');

const incomeSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
        trim: true,
        maxLength: 50,
    },
    amount: {
        type: Number,
        required: true,
        maxLength: 50,
        trim: true,
    },
    type: {
        type: String,
        default: "income",
    },
    date: {
        type: String,
        default: Date.now,
        required: true,
        trim: true
    },
    category:{
        type : String,
        required: true,
        trim: true,
    },
    description :{
        type : String,
        maxLength: 200,
        trim: true,
        required: true,
    }
},{timestamps:true});

module.exports = mongoose.model('Income', incomeSchema);