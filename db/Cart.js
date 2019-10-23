"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cartStatic = exports.getCartById = exports.createCart = undefined;

var _extends =
  Object.assign ||
  function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };

var createCart = (exports.createCart = (function() {
  var _ref = _asyncToGenerator(
    /*#__PURE__*/ regeneratorRuntime.mark(function _callee(items, id) {
      var itemsDetail, totalPrice, totalDiscountPrice, cart, result, result2;
      return regeneratorRuntime.wrap(
        function _callee$(_context) {
          while (1) {
            switch ((_context.prev = _context.next)) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return (0, _Items.getItemsById)(items);

              case 3:
                itemsDetail = _context.sent;
                totalPrice = itemsDetail
                  .map(function(val) {
                    return val.price;
                  })
                  .reduce(function(a, b) {
                    return a + b;
                  });
                totalDiscountPrice = itemsDetail
                  .map(function(val) {
                    return val.discountPrice;
                  })
                  .reduce(function(a, b) {
                    return a + b;
                  });
                cart = new Cart({
                  items: items,
                  price: totalPrice,
                  discountPrice: totalDiscountPrice,
                  savings: totalPrice - totalDiscountPrice
                });

                if (!id) {
                  _context.next = 14;
                  break;
                }

                _context.next = 10;
                return Cart.findByIdAndUpdate(
                  id,
                  {
                    $set: {
                      items: cart.items,
                      discountPrice: cart.discountPrice,
                      price: cart.price
                    }
                  },
                  { new: true }
                );

              case 10:
                result = _context.sent;
                return _context.abrupt("return", result);

              case 14:
                result2 = cart.save();
                return _context.abrupt("return", result2);

              case 16:
                _context.next = 21;
                break;

              case 18:
                _context.prev = 18;
                _context.t0 = _context["catch"](0);
                return _context.abrupt("return", _context.t0);

              case 21:
              case "end":
                return _context.stop();
            }
          }
        },
        _callee,
        this,
        [[0, 18]]
      );
    })
  );

  return function createCart(_x, _x2) {
    return _ref.apply(this, arguments);
  };
})());

var getCartById = (exports.getCartById = (function() {
  var _ref2 = _asyncToGenerator(
    /*#__PURE__*/ regeneratorRuntime.mark(function _callee2(id) {
      var cart, itemsDetail;
      return regeneratorRuntime.wrap(
        function _callee2$(_context2) {
          while (1) {
            switch ((_context2.prev = _context2.next)) {
              case 0:
                _context2.next = 2;
                return Cart.findOne({ _id: id });

              case 2:
                cart = _context2.sent;
                _context2.next = 5;
                return (0, _Items.getItemsById)(cart.items);

              case 5:
                itemsDetail = _context2.sent;
                return _context2.abrupt(
                  "return",
                  _extends({}, cart._doc, { itemDetails: itemsDetail })
                );

              case 7:
              case "end":
                return _context2.stop();
            }
          }
        },
        _callee2,
        this
      );
    })
  );

  return function getCartById(_x3) {
    return _ref2.apply(this, arguments);
  };
})());

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

var _cart = require("../schema/cart.schema");

var _cart2 = _interopRequireDefault(_cart);

var _Items = require("./Items");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _toConsumableArray(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }
    return arr2;
  } else {
    return Array.from(arr);
  }
}

function _asyncToGenerator(fn) {
  return function() {
    var gen = fn.apply(this, arguments);
    return new Promise(function(resolve, reject) {
      function step(key, arg) {
        try {
          var info = gen[key](arg);
          var value = info.value;
        } catch (error) {
          reject(error);
          return;
        }
        if (info.done) {
          resolve(value);
        } else {
          return Promise.resolve(value).then(
            function(value) {
              step("next", value);
            },
            function(err) {
              step("throw", err);
            }
          );
        }
      }
      return step("next");
    });
  };
}

var Cart = _mongoose2.default.model("carts", _cart2.default);

var cartStatic = (exports.cartStatic = {
  carts: [],
  setCart: function setCart(items) {
    var id =
      arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";

    var filteredCart = this.carts.filter(function(value) {
      return value._id !== id;
    });
    var cart = this.generateCart(items, id);
    this.carts = [].concat(_toConsumableArray(filteredCart), [cart]);
    return cart;
  },
  generateId: function generateId() {
    return Math.random()
      .toString(36)
      .substring(7);
  },
  generateCart: function generateCart(items, id) {
    if (items.length === 0)
      return {
        _id: id ? id : this.generateId(),
        items: [],
        price: 0,
        discountPrice: 0,
        savings: 0
      };
    var itemDetails = _Items.itemStatic.getItemsById(items);
    var price = itemDetails
      .map(function(val) {
        return val.price;
      })
      .reduce(function(a, b) {
        return a + b;
      });
    var discountPrice = itemDetails
      .map(function(val) {
        return val.discountPrice;
      })
      .reduce(function(a, b) {
        return a + b;
      });

    var obj = {
      _id: id ? id : this.generateId(),
      items: items,
      price: price,
      discountPrice: discountPrice,
      itemDetails: itemDetails,
      savings: price - discountPrice
    };
    return obj;
  },
  getCartById: function getCartById(id) {
    var cart = this.carts.find(function(val) {
      return val._id === id;
    });
    if (cart) {
      var itemDetails = _Items.itemStatic.getItemsById(cart.items);
      return _extends({}, cart, { itemDetails: itemDetails });
    } else {
      return { error: "Cart not found", code: 404 };
    }
  }
});
