const mongoose = require("mongoose");
const magasinsModel = new mongoose.Schema({
  Magasin: {
    type: String,
    require: true,
  },
  Orange: {
    type: Number,
    require: true,
  },
  Banane: {
    type: Number,
    require: true,
  },
  Pomme: {
    type: Number,
    require: true,
  },
  Fraise: {
    type: Number,
    require: true,
  },
  Cerise: {
    type: Number,
    require: true,
  },
});

module.exports = mongoose.model("Magasins", magasinsModel);
