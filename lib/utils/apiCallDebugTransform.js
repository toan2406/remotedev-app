'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var API_CALL_TYPES = ['@@api/FETCH_START', '@@api/FETCH_COMPLETE', '@@api/FETCH_FAILURE', '@@api/UPDATE_LOCAL', '@@api/RESET_LOCAL'];

exports.default = function (action) {
  var debugType = API_CALL_TYPES.includes(action.type) ? action.type + ' (' + action.payload.name + ')' : action.type;
  return _extends({}, action, {
    _type_: action.type,
    type: debugType
  });
};

module.exports = exports['default'];