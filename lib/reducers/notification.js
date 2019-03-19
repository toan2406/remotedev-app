'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = notification;

var _actionTypes = require('../constants/actionTypes');

function notification() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var action = arguments[1];

  switch (action.type) {
    case _actionTypes.SHOW_NOTIFICATION:
      return action.notification;
    case _actionTypes.ERROR:
      return { type: _actionTypes.ERROR, message: action.payload };
    case _actionTypes.LIFTED_ACTION:
      return null;
    case _actionTypes.CLEAR_NOTIFICATION:
      return null;
    default:
      return state;
  }
}
module.exports = exports['default'];