'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getActiveInstance = exports.initialState = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.dispatchAction = dispatchAction;
exports.default = instances;

var _actionTypes = require('../constants/actionTypes');

var _socketActionTypes = require('../constants/socketActionTypes');

var _parseJSON = require('../utils/parseJSON');

var _parseJSON2 = _interopRequireDefault(_parseJSON);

var _updateState = require('../utils/updateState');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var initialState = exports.initialState = {
  selected: null,
  current: 'default',
  sync: false,
  connections: {},
  options: { default: {} },
  states: {
    default: {
      actionsById: {},
      computedStates: [],
      currentStateIndex: -1,
      nextActionId: 0,
      skippedActionIds: [],
      stagedActionIds: []
    }
  }
};

function updateState(state, request, id, serialize) {
  var payload = request.payload;
  var actionsById = request.actionsById;
  if (actionsById) {
    payload = _extends({}, payload, {
      actionsById: (0, _parseJSON2.default)(actionsById, serialize),
      computedStates: (0, _parseJSON2.default)(request.computedStates, serialize)
    });
    if (request.type === 'STATE' && request.committedState) {
      payload.committedState = payload.computedStates[0].state;
    }
  } else {
    payload = (0, _parseJSON2.default)(payload, serialize);
  }

  var newState = void 0;
  var liftedState = state[id] || state.default;
  var action = request.action && (0, _parseJSON2.default)(request.action, serialize) || {};

  switch (request.type) {
    case 'INIT':
      newState = (0, _updateState.recompute)(state.default, payload, { action: { type: '@@INIT' }, timestamp: action.timestamp || Date.now() });
      break;
    case 'ACTION':
      {
        var isExcess = request.isExcess;
        var _nextActionId = request.nextActionId || liftedState.nextActionId + 1;
        var _maxAge = request.maxAge;
        if (Array.isArray(action)) {
          // Batched actions
          newState = liftedState;
          for (var i = 0; i < action.length; i++) {
            newState = (0, _updateState.recompute)(newState, request.batched ? payload : payload[i], action[i], newState.nextActionId + 1, _maxAge, isExcess);
          }
        } else {
          newState = (0, _updateState.recompute)(liftedState, payload, action, _nextActionId, _maxAge, isExcess);
        }
        break;
      }
    case 'STATE':
      newState = payload;
      if (newState.computedStates.length <= newState.currentStateIndex) {
        newState.currentStateIndex = newState.computedStates.length - 1;
      }
      break;
    case 'PARTIAL_STATE':
      var maxAge = request.maxAge;
      var nextActionId = payload.nextActionId;
      var stagedActionIds = payload.stagedActionIds;
      var computedStates = payload.computedStates;
      var oldActionsById = void 0;
      var oldComputedStates = void 0;
      var committedState = void 0;
      if (nextActionId > maxAge) {
        var oldStagedActionIds = liftedState.stagedActionIds;
        var excess = oldStagedActionIds.indexOf(stagedActionIds[1]);
        var key = void 0;
        if (excess > 0) {
          oldComputedStates = liftedState.computedStates.slice(excess - 1);
          oldActionsById = _extends({}, liftedState.actionsById);
          for (var _i = 1; _i < excess; _i++) {
            key = oldStagedActionIds[_i];
            if (key) delete oldActionsById[key];
          }
          committedState = (oldComputedStates[0] ? oldComputedStates : computedStates)[0].state;
        } else {
          oldActionsById = liftedState.actionsById;
          oldComputedStates = liftedState.computedStates;
          committedState = liftedState.committedState;
        }
      } else {
        oldActionsById = liftedState.actionsById;
        oldComputedStates = liftedState.computedStates;
        committedState = liftedState.committedState;
      }
      computedStates = [].concat(_toConsumableArray(oldComputedStates), _toConsumableArray(computedStates));
      var statesCount = computedStates.length;
      var currentStateIndex = payload.currentStateIndex;
      if (statesCount <= currentStateIndex) currentStateIndex = statesCount - 1;

      newState = _extends({}, liftedState, {
        actionsById: _extends({}, oldActionsById, payload.actionsById),
        computedStates: computedStates,
        currentStateIndex: currentStateIndex,
        nextActionId: nextActionId,
        stagedActionIds: stagedActionIds,
        committedState: committedState
      });
      break;
    case 'LIFTED':
      newState = liftedState;
      break;
    default:
      return state;
  }

  if (request.liftedState) newState = _extends({}, newState, request.liftedState);
  return _extends({}, state, _defineProperty({}, id, newState));
}

function dispatchAction(state, _ref) {
  var action = _ref.action;

  if (action.type === 'JUMP_TO_STATE' || action.type === 'JUMP_TO_ACTION') {
    var id = state.selected || state.current;
    var liftedState = state.states[id];
    var currentStateIndex = action.index;
    if (typeof currentStateIndex === 'undefined' && action.actionId) {
      currentStateIndex = liftedState.stagedActionIds.indexOf(action.actionId);
    }
    return _extends({}, state, {
      states: _extends({}, state.states, _defineProperty({}, id, _extends({}, liftedState, { currentStateIndex: currentStateIndex })))
    });
  }
  return state;
}

function removeState(state, connectionId) {
  var instanceIds = state.connections[connectionId];
  if (!instanceIds) return state;

  var connections = _extends({}, state.connections);
  var options = _extends({}, state.options);
  var states = _extends({}, state.states);
  var selected = state.selected;
  var current = state.current;
  var sync = state.sync;

  delete connections[connectionId];
  instanceIds.forEach(function (id) {
    if (id === selected) {
      selected = null;
      sync = false;
    }
    if (id === current) {
      var inst = Object.keys(connections)[0];
      if (inst) current = connections[inst][0];else current = 'default';
    }
    delete options[id];
    delete states[id];
  });
  return {
    selected: selected,
    current: current,
    sync: sync,
    connections: connections,
    options: options,
    states: states
  };
}

function init(_ref2, connectionId, current) {
  var type = _ref2.type,
      action = _ref2.action,
      name = _ref2.name,
      _ref2$libConfig = _ref2.libConfig,
      libConfig = _ref2$libConfig === undefined ? {} : _ref2$libConfig;

  var lib = void 0;
  var actionCreators = void 0;
  var creators = libConfig.actionCreators || action;
  if (typeof creators === 'string') creators = JSON.parse(creators);
  if (Array.isArray(creators)) actionCreators = creators;
  if (type === 'STATE') lib = 'redux';
  return {
    name: libConfig.name || name || current,
    connectionId: connectionId,
    explicitLib: libConfig.type,
    lib: lib,
    actionCreators: actionCreators,
    features: libConfig.features ? libConfig.features : {
      lock: lib === 'redux', export: libConfig.type === 'redux' ? 'custom' : true,
      import: 'custom', persist: true, pause: true, reorder: true, jump: true, skip: true,
      dispatch: true, test: true
    },
    serialize: libConfig.serialize
  };
}

function instances() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case _actionTypes.UPDATE_STATE:
      var request = action.request;

      if (!request) return state;
      var connectionId = action.id || request.id;
      var current = request.instanceId || connectionId;
      var connections = state.connections;
      var options = state.options;

      if (typeof state.options[current] === 'undefined') {
        connections = _extends({}, state.connections, _defineProperty({}, connectionId, [].concat(_toConsumableArray(connections[connectionId] || []), [current])));
        options = _extends({}, options, _defineProperty({}, current, init(request, connectionId, current)));
      }

      return _extends({}, state, {
        current: current,
        connections: connections,
        options: options,
        states: updateState(state.states, request, current, options[current].serialize)
      });
    case _actionTypes.SET_STATE:
      return _extends({}, state, {
        states: _extends({}, state.states, _defineProperty({}, getActiveInstance(state), action.newState))
      });
    case _actionTypes.TOGGLE_SYNC:
      return _extends({}, state, { sync: !state.sync });
    case _actionTypes.SELECT_INSTANCE:
      return _extends({}, state, { selected: action.selected, sync: false });
    case _actionTypes.REMOVE_INSTANCE:
      return removeState(state, action.id);
    case _actionTypes.LIFTED_ACTION:
      {
        if (action.message === 'DISPATCH') return dispatchAction(state, action);
        if (action.message === 'IMPORT') {
          var id = state.selected || state.current;
          if (state.options[id].features.import === true) {
            return _extends({}, state, {
              states: _extends({}, state.states, _defineProperty({}, id, (0, _parseJSON2.default)(action.state)))
            });
          }
        }
        return state;
      }
    case _socketActionTypes.DISCONNECTED:
      return initialState;
    default:
      return state;
  }
}

/* eslint-disable no-shadow */
var getActiveInstance = exports.getActiveInstance = function getActiveInstance(instances) {
  return instances.selected || instances.current;
};
/* eslint-enable */