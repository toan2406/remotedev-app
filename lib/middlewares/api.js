'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = api;

var _socketclusterClient = require('socketcluster-client');

var _socketclusterClient2 = _interopRequireDefault(_socketclusterClient);

var _jsan = require('jsan');

var _socketActionTypes = require('../constants/socketActionTypes');

var actions = _interopRequireWildcard(_socketActionTypes);

var _instances = require('../reducers/instances');

var _actionTypes = require('../constants/actionTypes');

var _actions = require('../actions');

var _monitorActions = require('../utils/monitorActions');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var socket = void 0;
var store = void 0;

function emit(_ref) {
  var type = _ref.message,
      id = _ref.id,
      instanceId = _ref.instanceId,
      action = _ref.action,
      state = _ref.state;

  socket.emit(id ? 'sc-' + id : 'respond', { type: type, action: action, state: state, instanceId: instanceId });
}

function startMonitoring(channel) {
  if (channel !== store.getState().socket.baseChannel) return;
  store.dispatch({ type: actions.EMIT, message: 'START' });
}

function dispatchRemoteAction(_ref2) {
  var message = _ref2.message,
      action = _ref2.action,
      state = _ref2.state,
      toAll = _ref2.toAll;

  var instances = store.getState().instances;
  var instanceId = (0, _instances.getActiveInstance)(instances);
  var id = !toAll && instances.options[instanceId].connectionId;
  store.dispatch({
    type: actions.EMIT,
    message: message,
    action: action,
    state: (0, _monitorActions.nonReduxDispatch)(store, message, instanceId, action, state, instances),
    instanceId: instanceId,
    id: id
  });
}

function monitoring(request) {
  if (request.type === 'DISCONNECTED') {
    store.dispatch({
      type: _actionTypes.REMOVE_INSTANCE,
      id: request.id
    });
    return;
  }
  if (request.type === 'START') {
    store.dispatch({ type: actions.EMIT, message: 'START', id: request.id });
    return;
  }

  if (request.type === 'ERROR') {
    store.dispatch((0, _actions.showNotification)(request.payload));
    return;
  }

  store.dispatch({
    type: _actionTypes.UPDATE_STATE,
    request: request.data ? _extends({}, request.data, { id: request.id }) : request
  });

  var instances = store.getState().instances;
  var instanceId = request.instanceId || request.id;
  if (instances.sync && instanceId === instances.selected && (request.type === 'ACTION' || request.type === 'STATE')) {
    socket.emit('respond', {
      type: 'SYNC',
      state: (0, _jsan.stringify)(instances.states[instanceId]),
      id: request.id,
      instanceId: instanceId
    });
  }
}

function subscribe(channelName, subscription) {
  var channel = socket.subscribe(channelName);
  if (subscription === _actionTypes.UPDATE_STATE) channel.watch(monitoring);else {
    var watcher = function watcher(request) {
      store.dispatch({ type: subscription, request: request });
    };
    channel.watch(watcher);
    socket.on(channelName, watcher);
  }
}

function handleConnection() {
  socket.on('connect', function (status) {
    store.dispatch({
      type: actions.CONNECT_SUCCESS,
      payload: {
        id: status.id,
        authState: socket.authState,
        socketState: socket.state
      },
      error: status.authError
    });
    if (socket.authState !== actions.AUTHENTICATED) {
      store.dispatch({ type: actions.AUTH_REQUEST });
    }
  });
  socket.on('disconnect', function (code) {
    store.dispatch({ type: actions.DISCONNECTED, code: code });
  });

  socket.on('subscribe', function (channel) {
    store.dispatch({ type: actions.SUBSCRIBE_SUCCESS, channel: channel });
  });
  socket.on('unsubscribe', function (channel) {
    socket.unsubscribe(channel);
    socket.unwatch(channel);
    socket.off(channel);
    store.dispatch({ type: actions.UNSUBSCRIBE, channel: channel });
  });
  socket.on('subscribeFail', function (error) {
    store.dispatch({ type: actions.SUBSCRIBE_ERROR, error: error, status: 'subscribeFail' });
  });
  socket.on('dropOut', function (error) {
    store.dispatch({ type: actions.SUBSCRIBE_ERROR, error: error, status: 'dropOut' });
  });

  socket.on('error', function (error) {
    store.dispatch({ type: actions.CONNECT_ERROR, error: error });
  });
}

function connect() {
  if (process.env.NODE_ENV === 'test') return;
  try {
    socket = _socketclusterClient2.default.connect(store.getState().socket.options);
    handleConnection(store);
  } catch (error) {
    store.dispatch({ type: actions.CONNECT_ERROR, error: error });
    store.dispatch((0, _actions.showNotification)(error.message || error));
  }
}

function disconnect() {
  socket.disconnect();
  socket.off();
}

function login() {
  socket.emit('login', {}, function (error, baseChannel) {
    if (error) {
      store.dispatch({ type: actions.AUTH_ERROR, error: error });
      return;
    }
    store.dispatch({ type: actions.AUTH_SUCCESS, baseChannel: baseChannel });
    store.dispatch({
      type: actions.SUBSCRIBE_REQUEST,
      channel: baseChannel,
      subscription: _actionTypes.UPDATE_STATE
    });
    store.dispatch({
      type: actions.SUBSCRIBE_REQUEST,
      channel: 'report',
      subscription: _actionTypes.UPDATE_REPORTS
    });
  });
}

function getReport(reportId) {
  socket.emit('getReport', reportId, function (error, data) {
    if (error) {
      store.dispatch({ type: _actionTypes.GET_REPORT_ERROR, error: error });
      return;
    }
    store.dispatch({ type: _actionTypes.GET_REPORT_SUCCESS, data: data });
    store.dispatch((0, _actions.importState)(data.payload));
  });
}

function api(inStore) {
  store = inStore;
  return function (next) {
    return function (action) {
      var result = next(action);
      switch (action.type) {// eslint-disable-line default-case
        case actions.CONNECT_REQUEST:
          connect();break;
        case actions.RECONNECT:
          disconnect();connect();break;
        case actions.AUTH_REQUEST:
          login();break;
        case actions.SUBSCRIBE_REQUEST:
          subscribe(action.channel, action.subscription);break;
        case actions.SUBSCRIBE_SUCCESS:
          startMonitoring(action.channel);break;
        case actions.EMIT:
          if (socket) emit(action);break;
        case _actionTypes.LIFTED_ACTION:
          dispatchRemoteAction(action);break;
        case _actionTypes.GET_REPORT_REQUEST:
          getReport(action.report);break;
      }
      return result;
    };
  };
}
module.exports = exports['default'];