"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createRouter;

var _bodyParser = require("body-parser");

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _path = require("path");

var _path2 = _interopRequireDefault(_path);

var _cookieParser = require("cookie-parser");

var _cookieParser2 = _interopRequireDefault(_cookieParser);

var _items = require("./items");

var _cart = require("./cart");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

// Defines an express app that runs the boilerplate codebase.

function createRouter() {
  // *********
  // * SETUP *
  // *********

  var router = _express2.default.Router();

  // static assets, served from "/public" on the web
  router.use(
    "/public",
    _express2.default.static(_path2.default.join(__dirname, "..", "public"))
  );

  router.use((0, _cookieParser2.default)()); // parse cookies automatically
  router.use(_bodyParser2.default.json()); // parse json bodies automatically

  /**
   * Uncached routes:
   * All routes that shouldn't be cached (i.e. non-static assets)
   * should have these headers to prevent 304 Unmodified cache
   * returns. This middleware applies it to all subsequently
   * defined routes.
   */
  router.get("/*", function(req, res, next) {
    res.set({
      "Last-Modified": new Date().toUTCString(),
      Expires: -1,
      "Cache-Control": "must-revalidate, private"
    });
    next();
  });
  router.get("/", function(req, res) {
    res.send(JSON.stringify("Hello World"));
  });
  // *****************
  // * API ENDPOINTS *
  // *****************
  router.get("/items", _items.listItems);
  router.get("/item/:id", _items.getItem);
  router.get("/cart/:id", _cart.getCart);
  router.put("/createCart", _cart.createCart);
  /*
   * sessions endpoints
   */
  // authenticate. Returns a json web token to use with requests.

  return router;
}
