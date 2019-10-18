"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createScore = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var createScore = exports.createScore = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var score, response;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            score = new Score({ totalScore: "7" });
            _context.next = 3;
            return score.save();

          case 3:
            response = _context.sent;

            console.log(response);

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function createScore() {
    return _ref.apply(this, arguments);
  };
}();

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

var _scores = require("../schema/scores.schema");

var _scores2 = _interopRequireDefault(_scores);

var _Base = require("./Base");

var _Base2 = _interopRequireDefault(_Base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var Score = _mongoose2.default.model("score", _scores2.default);

var ScoreModel = function (_BaseModel) {
  _inherits(ScoreModel, _BaseModel);

  function ScoreModel(connection) {
    _classCallCheck(this, ScoreModel);

    var _this = _possibleConstructorReturn(this, (ScoreModel.__proto__ || Object.getPrototypeOf(ScoreModel)).call(this, "score", connection));

    _this.schema = _scores2.default;
    //this.model = this.connection.model(this.name, this.schema);
    console.log("this.connection", _this.connection);
    // this.userModel = this.connection.model("user", userSchema);
    return _this;
  }

  _createClass(ScoreModel, [{
    key: "create",
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(data) {
        var score;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return this.model.create({ totalScore: "8" });

              case 3:
                score = _context2.sent;

                if (score) {
                  _context2.next = 6;
                  break;
                }

                throw "Error", 404;

              case 6:
                console.log(score);
                return _context2.abrupt("return", score);

              case 10:
                _context2.prev = 10;
                _context2.t0 = _context2["catch"](0);
                throw _context2.t0;

              case 13:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 10]]);
      }));

      function create(_x) {
        return _ref2.apply(this, arguments);
      }

      return create;
    }()
  }, {
    key: "list",
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(data) {
        var score;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return this.model.findOneAndUpdate({ data: data });

              case 3:
                score = _context3.sent;

                console.log("here", score);
                return _context3.abrupt("return", score);

              case 8:
                _context3.prev = 8;
                _context3.t0 = _context3["catch"](0);
                return _context3.abrupt("return", _context3.t0);

              case 11:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[0, 8]]);
      }));

      function list(_x2) {
        return _ref3.apply(this, arguments);
      }

      return list;
    }()
  }]);

  return ScoreModel;
}(_Base2.default);

exports.default = ScoreModel;