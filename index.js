"use strict";

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _router = require("./routes/router");

var _router2 = _interopRequireDefault(_router);

var _cors = require("cors");

var _cors2 = _interopRequireDefault(_cors);

var _helmet = require("helmet");

var _helmet2 = _interopRequireDefault(_helmet);

var _compression = require("compression");

var _compression2 = _interopRequireDefault(_compression);

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require("babel-core/register");
require("babel-polyfill");

var app = (0, _express2.default)();
app.use((0, _cors2.default)());
app.use((0, _helmet2.default)());
app.use((0, _compression2.default)());
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
//   optionspp
// );
_mongoose2.default.connect("mongodb://localhost:27017/haupflege", options).then(function (val) {
  return console.log("connected to Mongo");
}).catch(function (err) {
  return console.log(err);
});

app.use((0, _router2.default)());
app.listen(8080, function (err) {
  console.log("listning");
});