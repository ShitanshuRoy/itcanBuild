"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateToken = generateToken;
exports.decodeToken = decodeToken;

var _jsonwebtoken = require("jsonwebtoken");

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _env = require("./env");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// NOTE: errors if JWT_TOKEN_SECRET isn't present, if on production
// server; otherwise uses "fake_secret" as the secret.
var JWT_SECRET = (0, _env.getEnv)("NODE_ENV") !== "production" ? "fake_secret" : (0, _env.getEnv)("JWT_SECRET", true);

// TODO: feel free to add more arguments to this function and generate a
// JSON web token with more members than just the id.
/**
 * Generates a new JSON web token, signing it with our secret.
 */
function generateToken(id) {
  return new Promise(function (resolve, reject) {
    _jsonwebtoken2.default.sign({ id: id }, JWT_SECRET, { expiresIn: "7 days" }, function (err, token) {
      if (err) {
        return reject(err);
      }
      resolve(token);
    });
  });
}

/**
 * Verifies a JSON web token and decodes it into its contents. Ensures that:
 * - the payload of the token matches correct secret (it's from us)
 * - the token isn't expired
 */
function decodeToken(token) {
  return new Promise(function (resolve, reject) {
    _jsonwebtoken2.default.verify(token, JWT_SECRET, function (err, decoded) {
      if (err) {
        reject(err);
        return;
      }

      resolve(decoded);
    });
  });
}