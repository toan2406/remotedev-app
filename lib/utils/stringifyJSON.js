'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = stringifyJSON;

var _jsan = require('jsan');

var _jsan2 = _interopRequireDefault(_jsan);

var _dataTypes = require('../constants/dataTypes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function replacer(key, value) {
  if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && value !== null && _dataTypes.DATA_TYPE_KEY in value) {
    var __serializedType__ = value[_dataTypes.DATA_TYPE_KEY];
    delete value[_dataTypes.DATA_TYPE_KEY];
    var r = { data: value, __serializedType__: __serializedType__ };
    if (_dataTypes.DATA_REF_KEY in value) r.__serializedRef__ = value[_dataTypes.DATA_REF_KEY];
    return r;
  }
  return value;
}

function stringifyJSON(data, serialize) {
  return serialize ? _jsan2.default.stringify(data, replacer, null, true) : _jsan2.default.stringify(data);
}
module.exports = exports['default'];