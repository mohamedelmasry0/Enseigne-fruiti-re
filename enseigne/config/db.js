const mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URL,
    {
        
    })
    .then(() => console.log('connected to mongo'))
    .catch((err) => console.log('failed to connect', err)); 
