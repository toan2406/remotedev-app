'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.reviver = reviver;
exports.default = parseJSON;

var _jsan = require('jsan');

var _jsan2 = _interopRequireDefault(_jsan);

var _dataTypes = require('../constants/dataTypes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function reviver(key, value) {
  if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && value !== null && '__serializedType__' in value && _typeof(value.data) === 'object') {
    var data = value.data;
    data[_dataTypes.DATA_TYPE_KEY] = value.__serializedType__;
    if ('__serializedRef__' in value) data[_dataTypes.DATA_REF_KEY] = value.__serializedRef__;
    /*
    if (Array.isArray(data)) {
      data.__serializedType__ = value.__serializedType__;
    } else {
      Object.defineProperty(data, '__serializedType__', {
        value: value.__serializedType__
      });
    }
    */
    return data;
  }
  return value;
}

function parseJSON(data, serialize) {
  if (typeof data !== 'string') return data;
  try {
    return serialize && /"__serializedType__"/.test(data) ? _jsan2.default.parse(data, reviver) : _jsan2.default.parse(data);
  } catch (e) {
    if (process.env.NODE_ENV !== 'production') console.error(data + 'is not a valid JSON', e);
    return undefined;
  }
}