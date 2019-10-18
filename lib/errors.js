"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _extendableBuiltin(cls) {
  function ExtendableBuiltin() {
    var instance = Reflect.construct(cls, Array.from(arguments));
    Object.setPrototypeOf(instance, Object.getPrototypeOf(this));
    return instance;
  }

  ExtendableBuiltin.prototype = Object.create(cls.prototype, {
    constructor: {
      value: cls,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });

  if (Object.setPrototypeOf) {
    Object.setPrototypeOf(ExtendableBuiltin, cls);
  } else {
    ExtendableBuiltin.__proto__ = cls;
  }

  return ExtendableBuiltin;
}

/**
 * Represents an error that should return a particular response code, and optionally a message and
 * some data.
 *
 * `message` and `statusCode` arguments are required. It must be a code between 400 to 599 inclusive.
 */
var ApplicationError = exports.ApplicationError = function (_extendableBuiltin2) {
  _inherits(ApplicationError, _extendableBuiltin2);

  function ApplicationError(message, statusCode, data) {
    _classCallCheck(this, ApplicationError);

    var _this = _possibleConstructorReturn(this, (ApplicationError.__proto__ || Object.getPrototypeOf(ApplicationError)).call(this, message));

    if (!message || !statusCode) {
      throw new Error("message and statusCode must be provided");
    }

    if (statusCode < 400 || statusCode >= 600) {
      throw new Error("statusCode must be a number between 400 and 599 inclusive");
    }

    _this.message = message;
    _this.statusCode = statusCode;
    _this.data = data;
    return _this;
  }

  return ApplicationError;
}(_extendableBuiltin(Error));