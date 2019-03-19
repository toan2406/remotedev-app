'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = monitor;

var _actionTypes = require('../constants/actionTypes');

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var initialState = {
  selected: 0,
  templates: undefined
};

function monitor() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  var templates = void 0;
  switch (action.type) {
    case _actionTypes.TEST_SELECT:
      return _extends({}, state, { selected: action.selected });
    case _actionTypes.TEST_EDIT:
      templates = [].concat(_toConsumableArray(state.templates || action.templates));
      templates[state.selected] = action.template;
      return _extends({}, state, { templates: templates });
    case _actionTypes.TEST_ADD:
      return _extends({}, state, {
        selected: state.templates.length,
        templates: [].concat(_toConsumableArray(state.templates || action.templates), [action.template])
      });
    case _actionTypes.TEST_REMOVE:
      templates = state.templates || action.templates;
      return _extends({}, state, {
        selected: 0,
        templates: templates.length === 1 ? undefined : [].concat(_toConsumableArray(templates.slice(0, state.selected)), _toConsumableArray(templates.slice(state.selected + 1)))
      });
    default:
      return state;
  }
}
module.exports = exports['default'];