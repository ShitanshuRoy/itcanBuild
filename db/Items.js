"use strict";
const regeneratorRuntime = require("regenerator-runtime");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.itemStatic = exports.getItemsById = exports.getItemById = exports.listItems = undefined;

var listItems = (exports.listItems = (function() {
  var _ref = _asyncToGenerator(
    /*#__PURE__*/ regeneratorRuntime.mark(function _callee() {
      var items;
      return regeneratorRuntime.wrap(
        function _callee$(_context) {
          while (1) {
            switch ((_context.prev = _context.next)) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return Item.find();

              case 3:
                items = _context.sent;
                return _context.abrupt("return", items);

              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](0);
                return _context.abrupt("return", _context.t0);

              case 10:
              case "end":
                return _context.stop();
            }
          }
        },
        _callee,
        this,
        [[0, 7]]
      );
    })
  );

  return function listItems() {
    return _ref.apply(this, arguments);
  };
})());

var getItemById = (exports.getItemById = (function() {
  var _ref2 = _asyncToGenerator(
    /*#__PURE__*/ regeneratorRuntime.mark(function _callee2(id) {
      var item;
      return regeneratorRuntime.wrap(
        function _callee2$(_context2) {
          while (1) {
            switch ((_context2.prev = _context2.next)) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return Item.findOne({ _id: id });

              case 3:
                item = _context2.sent;
                return _context2.abrupt("return", item);

              case 7:
                _context2.prev = 7;
                _context2.t0 = _context2["catch"](0);
                return _context2.abrupt("return", _context2.t0);

              case 10:
              case "end":
                return _context2.stop();
            }
          }
        },
        _callee2,
        this,
        [[0, 7]]
      );
    })
  );

  return function getItemById(_x) {
    return _ref2.apply(this, arguments);
  };
})());

var getItemsById = (exports.getItemsById = (function() {
  var _ref3 = _asyncToGenerator(
    /*#__PURE__*/ regeneratorRuntime.mark(function _callee3(ids) {
      var items;
      return regeneratorRuntime.wrap(
        function _callee3$(_context3) {
          while (1) {
            switch ((_context3.prev = _context3.next)) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return Item.find({
                  _id: { $in: [].concat(_toConsumableArray(ids)) }
                });

              case 3:
                items = _context3.sent;
                return _context3.abrupt("return", items);

              case 7:
                _context3.prev = 7;
                _context3.t0 = _context3["catch"](0);
                return _context3.abrupt("return", _context3.t0);

              case 10:
              case "end":
                return _context3.stop();
            }
          }
        },
        _callee3,
        this,
        [[0, 7]]
      );
    })
  );

  return function getItemsById(_x2) {
    return _ref3.apply(this, arguments);
  };
})());

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

var _items = require("../schema/items.schema");

var _items2 = _interopRequireDefault(_items);

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

var Item = _mongoose2.default.model("item", _items2.default);
var itemStatic = (exports.itemStatic = {
  items: [
    {
      _id: "wqp19a",
      image:
        "https://images-static.nykaa.com/media/catalog/product/tr:h-200,w-200,cm-pad_resize/2/0/20714898120---moisture-surge-72-hour-15-ml.jpg",
      name: "Clinique Moisture Surge 72-Hour Auto-Replenishing Hydrator Mini",
      discount: 0,
      discountPrice: 890,
      price: 890,
      rating: 4.2
    },
    {
      _id: "29mmgg",
      image:
        "https://images-static.nykaa.com/media/catalog/product/tr:h-200,w-200,cm-pad_resize/l/e/lemon_honey_revised01.jpg",
      name: "Nykaa Skin Secrets Lemon + Honey Sheet Mask",
      discount: 0,
      discountPrice: 100,
      price: 100,
      rating: 4.3
    },
    {
      _id: "ezdkgx",
      image:
        "https://images-static.nykaa.com/media/catalog/product/tr:h-200,w-200,cm-pad_resize/2/7/270281583_1.jpg",
      name: "LANEIGE Water Sleeping Mask",
      discount: 0,
      discountPrice: 700,
      price: 700,
      rating: 4.1
    },
    {
      _id: "9agap9",
      image:
        "https://images-static.nykaa.com/media/catalog/product/tr:h-200,w-200,cm-pad_resize/b/o/bottle_with_strip1rosehip_1.jpg",
      name: "Nykaa Naturals Facial Oil - Pure Cold Pressed",
      discount: 15,
      discountPrice: 298,
      price: 350,
      rating: 4.1
    },
    {
      _id: "h25w9c",
      image:
        "https://images-static.nykaa.com/media/catalog/product/tr:h-200,w-200,cm-pad_resize/t/e/tea_tree_aloe_vera_ervised01.jpg",
      name: "Nykaa Skin Secrets Tea Tree + Aloe Vera Sheet Mask",
      discount: 0,
      discountPrice: 100,
      price: 100,
      rating: 4.3
    },
    {
      _id: "ljsh5b",
      image:
        "https://images-static.nykaa.com/media/catalog/product/tr:h-200,w-200,cm-pad_resize/p/e/pearl_hyaluronic_ac_id_ervised01.jpg",
      name: "Nykaa Skin Secrets Pearl + Hyaluronic Ac_id Sheet Mask",
      discount: 0,
      discountPrice: 100,
      price: 100,
      rating: 4.3
    },
    {
      _id: "iql9tb",
      image:
        "https://images-static.nykaa.com/media/catalog/product/tr:h-200,w-200,cm-pad_resize/8/9/8906060213706.jpg",
      name: "O3+ Brightening & Whitening Dermal Zone D-TAN Pack",
      discount: 0,
      discountPrice: 830,
      price: 830,
      rating: 4.1
    },
    {
      _id: "brq8jg",
      image:
        "https://images-static.nykaa.com/media/catalog/product/tr:h-200,w-200,cm-pad_resize/8/9/8992304009518_hydrafresh_anti-shine_gel_50ml_i1.png",
      name: "L'Oreal Paris Hydrafresh Anti-Shine Icy Gel",
      discount: 30,
      discountPrice: 399,
      price: 570,
      rating: 4.2
    },
    {
      _id: "27d4t3",
      image:
        "https://images-static.nykaa.com/media/catalog/product/tr:h-200,w-200,cm-pad_resize/l/i/listing-images_gtrcng_01.jpg",
      name: "Plum Green Tea Renewed Clarity Night Gel",
      discount: 25,
      discountPrice: 431,
      price: 575,
      rating: 4.3
    },
    {
      _id: "yonsb4",
      image:
        "https://images-static.nykaa.com/media/catalog/product/tr:h-200,w-200,cm-pad_resize/b/l/black_mud_aloe_vera_revised_01.jpg",
      name: "Nykaa Skin Secrets Black Mud + Aloe Vera Sheet Mask",
      discount: 0,
      discountPrice: 100,
      price: 100,
      rating: 4.3
    },
    {
      _id: "y2c5x",
      image:
        "https://images-static.nykaa.com/media/catalog/product/tr:h-200,w-200,cm-pad_resize/5/9/5997_76006_1_1_1.jpg",
      name: "Neutrogena UltraSheer Dry Touch Sunblock SPF 50+",
      discount: 25,
      discountPrice: 412,
      price: 549,
      rating: 4.5
    },
    {
      _id: "igsb4j",
      image:
        "https://images-static.nykaa.com/media/catalog/product/tr:h-200,w-200,cm-pad_resize/3/0/30_1_2.jpg",
      name:
        "Estee Lauder Advanced Night Repair Synchronized Recovery Complex II",
      discount: 0,
      discountPrice: 3900,
      price: 3900,
      rating: 4
    },
    {
      _id: "789fvd",
      image:
        "https://images-static.nykaa.com/media/catalog/product/tr:h-200,w-200,cm-pad_resize/1/1/11c426cbiot_prtrs_a.jpg",
      name: "Biotique Bio Papaya Revitalizing Tan Removal Scrub",
      discount: 35,
      discountPrice: 129,
      price: 199,
      rating: 4.4
    },
    {
      _id: "7csv6p",
      image:
        "https://images-static.nykaa.com/media/catalog/product/tr:h-200,w-200,cm-pad_resize/8/8/8806194004334_1.jpg",
      name: "TONYMOLY Pureness 100 Mask Sheet",
      discount: 0,
      discountPrice: 100,
      price: 100,
      rating: 4.4
    },
    {
      _id: "7csv6j",
      image:
        "https://images-static.nykaa.com/media/catalog/product/tr:h-200,w-200,cm-pad_resize/6/9/6928820043042_pink_micellar_water_125ml_i0_1.jpg",
      name: "Garnier Skin Naturals Micellar Cleansing Water",
      discount: 35,
      discountPrice: 227,
      price: 349,
      rating: 4.4
    },
    {
      _id: "fukqm",
      image:
        "https://images-static.nykaa.com/media/catalog/product/tr:h-200,w-200,cm-pad_resize/l/s/lsm-small-size_1.jpg",
      name: "LANEIGE Lip Sleeping Mask Berry",
      discount: 0,
      discountPrice: 1150,
      price: 1150,
      rating: 4.4
    },
    {
      _id: "hujgig",
      image:
        "https://images-static.nykaa.com/media/catalog/product/tr:h-200,w-200,cm-pad_resize/8/9/8904245705732_1new.jpg",
      name: "Nykaa Skin Secrets Rice Water + White Tea Sheet Mask",
      discount: 0,
      discountPrice: 100,
      price: 100,
      rating: 4.3
    },
    {
      _id: "vb4557",
      image:
        "https://images-static.nykaa.com/media/catalog/product/tr:h-200,w-200,cm-pad_resize/n/y/nykaprwtr0007.jpg",
      name: "Kama Ayurveda Pure Rose Water",
      discount: 0,
      discountPrice: 275,
      price: 275,
      rating: 4.5
    },
    {
      _id: "3w5u",
      image:
        "https://images-static.nykaa.com/media/catalog/product/tr:h-200,w-200,cm-pad_resize/8/9/8904245705787_1new.jpg",
      name: "Nykaa Skin Secrets Strawberry + Argan Oil Sheet Mask",
      discount: 0,
      discountPrice: 100,
      price: 100,
      rating: 4.3
    },
    {
      _id: "8uxtcu",
      image:
        "https://images-static.nykaa.com/media/catalog/product/tr:h-200,w-200,cm-pad_resize/8/4/84945498454985498154984_1_1_.jpg",
      name: "MCaffeine Naked & Raw Coffee Face Scrub",
      discount: 7,
      discountPrice: 325,
      price: 349,
      rating: 4.3
    }
  ],
  listItems: function listItems() {
    return this.items;
  },
  getItemById: function getItemById(id) {
    return this.items.find(function(val) {
      return val._id === id;
    });
  },
  getItemsById: function getItemsById(ids) {
    return this.items.filter(function(val) {
      return ids.includes(val._id);
    });
  }
});
