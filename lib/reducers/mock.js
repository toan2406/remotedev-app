'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = mock;

var _actionTypes = require('../constants/actionTypes');

var initialState = {
  data: [[{}, {}]]
};

function mock() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  if (action.type === _actionTypes.SUBMIT_MOCK) {
    return { data: action.payload };
  } else {
    return state;
  }
}
module.exports = exports['default'];