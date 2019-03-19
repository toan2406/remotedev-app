'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.sweep = sweep;
exports.nonReduxDispatch = nonReduxDispatch;

var _stringifyJSON = require('./stringifyJSON');

var _stringifyJSON2 = _interopRequireDefault(_stringifyJSON);

var _difference = require('lodash/difference');

var _difference2 = _interopRequireDefault(_difference);

var _omit = require('lodash/omit');

var _omit2 = _interopRequireDefault(_omit);

var _actionTypes = require('../constants/actionTypes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function sweep(state) {
  return _extends({}, state, {
    actionsById: (0, _omit2.default)(state.actionsById, state.skippedActionIds),
    stagedActionIds: (0, _difference2.default)(state.stagedActionIds, state.skippedActionIds),
    skippedActionIds: [],
    currentStateIndex: Math.min(state.currentStateIndex, state.stagedActionIds.length - 1)
  });
}

function nonReduxDispatch(store, message, instanceId, action, initialState, preInstances) {
  var instances = preInstances || store.getState().instances;
  var state = instances.states[instanceId];
  var options = instances.options[instanceId];

  if (message !== 'DISPATCH') {
    if (message === 'IMPORT') {
      if (options.features.import === true) {
        return (0, _stringifyJSON2.default)(state.computedStates[state.currentStateIndex].state, true);
      }
      return initialState;
    }
    return undefined;
  }

  if (options.lib === 'redux') return undefined;

  switch (action.type) {
    case 'TOGGLE_ACTION':
      return (0, _stringifyJSON2.default)(state, true);
    case 'JUMP_TO_STATE':
      return (0, _stringifyJSON2.default)(state.computedStates[action.index].state, true);
    case 'JUMP_TO_ACTION':
      return (0, _stringifyJSON2.default)(state.computedStates[state.stagedActionIds.indexOf(action.actionId)].state, true);
    case 'ROLLBACK':
      return (0, _stringifyJSON2.default)(state.computedStates[0].state, true);
    case 'SWEEP':
      store.dispatch({ type: _actionTypes.SET_STATE, newState: sweep(state) });
      return undefined;
    default:
      return undefined;
  }
}