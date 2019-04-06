'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DEFAULT_MOCK_DATA = undefined;
exports.default = mock;

var _actionTypes = require('../constants/actionTypes');

var DEFAULT_MOCK_DATA = exports.DEFAULT_MOCK_DATA = [];

var initialState = {
  data: DEFAULT_MOCK_DATA
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