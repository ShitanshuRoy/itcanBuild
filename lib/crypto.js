"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.comparePassword = comparePassword;
exports.hashPassword = hashPassword;

var _bcryptjs = require("bcryptjs");

var _bcryptjs2 = _interopRequireDefault(_bcryptjs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BCRYPT_ROUNDS = 10;

function comparePassword(password, hash) {
  return new Promise(function (resolve, reject) {
    _bcryptjs2.default.compare(password, hash, function (err, match) {
      if (err) {
        reject(err);
        return;
      }
      resolve(match);
    });
  });
}

function hashPassword(password) {
  return new Promise(function (resolve, reject) {
    _bcryptjs2.default.hash(password, BCRYPT_ROUNDS, function (err, hash) {
      if (err) {
        reject(err);
        return;
      }
      resolve(hash);
    });
  });
}