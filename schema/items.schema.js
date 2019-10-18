"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
exports.default = new Schema({
  image: String,
  name: String,
  discount: Number,
  discountPrice: Number,
  price: Number,
  rating: Number
});