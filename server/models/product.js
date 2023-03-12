const mongoose = require('mongoose');

//derive/define a schema
const ProductSchema = mongoose.Schema({
  name: { type: String },
  price: { type: Number },
  quantity: { type: Number }
});

//complie schema to model
const Product = mongoose.model('Product', ProductSchema, 'productlist');

module.exports = Product;
