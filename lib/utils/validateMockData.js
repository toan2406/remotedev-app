"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (mock) {
  return Array.isArray(mock) && mock.every(function (actions) {
    return Array.isArray(actions) && actions.length > 1;
  });
};

module.exports = exports["default"];