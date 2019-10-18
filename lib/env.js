"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getEnv = getEnv;
/**
 * Helpers for accessing environment variables
 */

/**
 * Get environment variable. If required is truthy, will throw
 * an error if the environment variable isn't present.
 */
function getEnv(envVariableName) {
  var required = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var value = process.env[envVariableName];
  if (required && !value) {
    throw new Error("Missing required environment variable '" + envVariableName + "'");
  }

  return value;
}