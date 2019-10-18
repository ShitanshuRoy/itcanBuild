"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var options = {
  autoIndex: false, // Don't build indexes
  reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
  reconnectInterval: 500, // Reconnect every 500ms
  poolSize: 10, // Maintain up to 10 socket connections
  // If not connected, return errors immediately rather than waiting for reconnect
  bufferMaxEntries: 0,
  useNewUrlParser: true
};

_mongoose2.default.set("useFindAndModify", false);
// import { configuration } from "../lib/config.js";

//Below will be dynamic based on the environment
// const mongooseDb = mongoose.connect(
//   configuration[process.env["NODE_ENV"]].mongoUrl,
//   options
// );
var mongooseDb = _mongoose2.default.connect("mongodb://localhost:27017/haupflege", options);

var BaseModel = function BaseModel(name) {
  var _this = this;

  _classCallCheck(this, BaseModel);

  this.name = name;
  // console.log("mongooseDb", mongooseDb);
  console.log("connection", this.connection);
  // if (mongooseDb) {
  // if (!this.connection) this.connection = mongoose.connection;
  // }

  mongooseDb.then(function (val) {
    console.log(val);
    _this.connection = val;
  });
};

exports.default = BaseModel;