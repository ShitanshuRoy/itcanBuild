"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
exports.default = new Schema({
  items: [String],
  price: Number,
  discountPrice: Number,
  savings: Number
});