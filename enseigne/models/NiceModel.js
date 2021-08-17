const mongoose = require("mongoose");
const niceModel = new mongoose.Schema({
   
    Orange: {
        type: Number,
        require: true
    },
    Banane: {
        type: Number,
        require: true
    },
    Pomme: {
        type: Number,
        require: true
    },
    Fraise: {
        type: Number,
        require: true
    },
    Cerise: {
        type: Number,
        require: true
    }
    
    
}
)


module.exports = mongoose.model('Nice', niceModel)