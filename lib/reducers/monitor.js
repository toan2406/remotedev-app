'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.dispatchMonitorAction = dispatchMonitorAction;
exports.default = monitor;

var _actionTypes = require('../constants/actionTypes');

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var initialState = {
  selected: 'InspectorMonitor',
  monitorState: undefined,
  sliderIsOpen: true,
  dispatcherIsOpen: false
};

function dispatchMonitorAction(state, action) {
  return _extends({}, state, {
    monitorState: action.action.newMonitorState || action.monitorReducer(action.monitorProps, state.monitorState, action.action)
  });
}

function monitor() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case _actionTypes.MONITOR_ACTION:
      return dispatchMonitorAction(state, action);
    case _actionTypes.SELECT_MONITOR:
      var monitorState = state.monitorState;
      if (action.monitorState) {
        monitorState = _extends({}, action.monitorState, {
          __overwritten__: action.monitor
        });
      }
      return _extends({}, state, {
        monitorState: monitorState,
        selected: action.monitor
      });
    case _actionTypes.UPDATE_MONITOR_STATE:
      var inspectedStatePath = state.monitorState.inspectedStatePath;
      if (action.nextState.inspectedStatePath) {
        inspectedStatePath = [].concat(_toConsumableArray(inspectedStatePath.slice(0, -1)), _toConsumableArray(action.nextState.inspectedStatePath));
      }
      return _extends({}, state, {
        monitorState: _extends({}, state.monitorState, action.nextState, {
          inspectedStatePath: inspectedStatePath
        })
      });
    case _actionTypes.TOGGLE_SLIDER:
      return _extends({}, state, {
        sliderIsOpen: !state.sliderIsOpen
      });
    case _actionTypes.TOGGLE_DISPATCHER:
      return _extends({}, state, {
        dispatcherIsOpen: !state.dispatcherIsOpen
      });
    default:
      return state;
  }
}