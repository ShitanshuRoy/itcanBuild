"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserDB = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _crypto = require("../lib/crypto");

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var PUBLIC_FIELDS = ["id", "name"];

var filterFields = function filterFields(toFilter, allowFields) {
  return allowedFields.reduce(function (memo, field) {
    return _extends({}, memo, _defineProperty({}, field, toFilter[field]));
  }, {});
};

var UserDB = exports.UserDB = function UserDB() {
  var _this = this;

  _classCallCheck(this, UserDB);

  this.getUserByCredentials = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(id, password) {
      var user;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _this.getUserById(id, false);

            case 2:
              user = _context.sent;

              if (user) {
                _context.next = 5;
                break;
              }

              return _context.abrupt("return", null);

            case 5:
              _context.next = 7;
              return (0, _crypto.comparePassword)(password, user.passwordHash);

            case 7:
              if (!_context.sent) {
                _context.next = 9;
                break;
              }

              return _context.abrupt("return", filterFields(user, PUBLIC_FIELDS));

            case 9:
              return _context.abrupt("return", null);

            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, _this);
    }));

    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }();

  this.getUserById = function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(id) {
      var filterPrivateFields = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var user;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              user = _this.getUserByCredentials.find(function (user) {
                return user.id === id;
              });

              if (user) {
                _context2.next = 3;
                break;
              }

              return _context2.abrupt("return", null);

            case 3:
              if (!filterPrivateFields) {
                _context2.next = 5;
                break;
              }

              return _context2.abrupt("return", filterFields(user, PUBLIC_FIELDS));

            case 5:
              return _context2.abrupt("return", user);

            case 6:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, _this);
    }));

    return function (_x3) {
      return _ref2.apply(this, arguments);
    };
  }();

  this.list = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            return _context3.abrupt("return", _this.users.map(function (user) {
              return filterFields(user, PUBLIC_FIELDS);
            }));

          case 1:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, _this);
  }));

  this.create = function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(name, password) {
      var newUser;
      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.t0 = "" + _this.currentId++;
              _context4.t1 = name;
              _context4.next = 4;
              return (0, _crypto.hashPassword)(password);

            case 4:
              _context4.t2 = _context4.sent;
              newUser = {
                id: _context4.t0,
                name: _context4.t1,
                passwordHash: _context4.t2
              };

              _this.users = _this.users.concat(newUser);
              return _context4.abrupt("return", filterFields(newUser, PUBLIC_FIELDS));

            case 8:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, _this);
    }));

    return function (_x5, _x6) {
      return _ref4.apply(this, arguments);
    };
  }();
};

exports.default = new UsersDB(); // singleton instance of the database