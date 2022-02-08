const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

  date: {
    type: String,
  },
  motif: {
    type: String,
  },
  facture: {
    type: Number,
  },
  recette: {
    type: Number,
  },
  depence: {
    type: Number,
  },
});


module.exports = mongoose.model('Caisse', userSchema)