const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    desc: {
        type: String,
        required: true,
    },
    img: {
        type: String,
        required: true
    },
    imgProduct: {
        type: String,
    },
    khung: {
        type: String,
    },
    categories: {
        type: Array
    },
    memory: {
        type: String
    },
    chip: {
        type: String
    },
    ram: {
        type: String
    },
    kichthuoc: {
        type: String
    },
    trongluong: {
        type: String
    },
    cauhinh: {
        type: String
    },

    color: {
        type: String
    },
    sale: {
        type: String
    },
    sale1: {
        type: String
    },
    price: {
        type: String,
        required: true
    },
    pricefake: {
        type: String
    },
    pricesale: {
        type: String,
    },
    imgIcon: {
        type: String,
    },
    titletragop: {
        type: String,
    },
    imgIcon1: {
        type: String,
    },
    imgIcon2: {
        type: String,
    },
    imgIcon3: {
        type: String,
    },
}, { timestamps: true });
module.exports = mongoose.model("Product", ProductSchema);