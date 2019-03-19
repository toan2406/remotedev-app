'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = reports;

var _actionTypes = require('../constants/actionTypes');

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var initialState = {
  data: []
};

function reports() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  /* if (action.type === GET_REPORT_SUCCESS) {
    const id = action.data.id;
    return {
      ...state,
      data: state.data.map(d => (d.id === id ? action.data : d))
    };
  } else */if (action.type !== _actionTypes.UPDATE_REPORTS) return state;

  var request = action.request;
  var data = request.data;
  switch (request.type) {
    case 'list':
      return _extends({}, state, {
        data: data
      });
    case 'add':
      return _extends({}, state, {
        data: [].concat(_toConsumableArray(state.data), [data])
      });
    case 'remove':
      return _extends({}, state, {
        data: state.data.filter(function (d) {
          return d.id !== request.id;
        })
      });
    default:
      return state;
  }
}
module.exports = exports['default'];