const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    img:{
        type: String
    },

    productname:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    thuonghieu:{
        type: String,
        required: true
    },

    khoiluong: String,
    status: String,
    huongvi: String,

    soluong:{
        type: Number,
        required: true
    }
})

const Products = mongoose.model('Products',schema);

module.exports = Products;
