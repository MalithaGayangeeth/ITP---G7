const mongoose = require('mongoose')

const ProductsSchema = new mongoose.Schema({
  product_name: {
    type: String,
    required: true,
  },
  product_image: {
    type: String,
    required: true,
  },
  product_brand: {
    type: String,
    required: true,
  },
  product_price: {
    type: Number,
    required: true,
  },
  product_category: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
})

module.exports = User = mongoose.model('product', ProductsSchema)
