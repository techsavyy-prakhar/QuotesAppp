const mongoose = require('mongoose');

const quoteSchema = new mongoose.Schema({
    text:{
        type:String,
        required: true,
    },
    author:{
        type:String,
        require:true
    },
    photo:{
        type:String,
        default:"https://static.toiimg.com/photo/80404485.cms"
    }
})

const Quote = mongoose.model('Quote', quoteSchema);

module.exports = Quote;