const mongoose = require('mongoose');

const CategorySchema = mongoose.Schema({
  name: {
    type: String,
    required: 'This field field is requied',
  },
});

module.exports = mongoose.model('Category', CategorySchema);
