"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCart = exports.createCart = undefined;

var _Cart = require("../db/Cart");

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var createCart = exports.createCart = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var itemIds, id, cart;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            itemIds = req.body.items;
            id = req.body.id;
            _context.next = 4;
            return (0, _Cart.createCart)(itemIds, id);

          case 4:
            cart = _context.sent;

            res.send(cart);

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function createCart(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var getCart = exports.getCart = function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var id, cart;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            id = req.params.id;
            _context2.next = 3;
            return (0, _Cart.getCartById)(id);

          case 3:
            cart = _context2.sent;

            res.send(cart);

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, undefined);
  }));

  return function getCart(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();