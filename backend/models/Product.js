const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    category: {type: String, lowercase: true, required: [true, "can't be blank"]},
    image: [{type: String, default: null }],
    brand: {type: String, required: [true, "can't be blank"]},
    model: {type: String, required: [true, "can't be blank"]},
    available: {type: Number, required: [true, "can't be blank"]},
    weight: {type: Number, default: 0},
    dimensions: {
        width: {type: Number, default: 0},
        height: {type: Number, default: 0},
        length: {type: Number, default: 0}
    },
    description: {type: String, default: ""},

}, {timestamps: true});

mongoose.model('Product', ProductSchema);
