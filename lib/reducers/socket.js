'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = socket;

var _socketOptions = require('../constants/socketOptions');

var _socketOptions2 = _interopRequireDefault(_socketOptions);

var _socketActionTypes = require('../constants/socketActionTypes');

var actions = _interopRequireWildcard(_socketActionTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var initialState = {
  options: _socketOptions2.default,
  isCustom: false,
  id: null,
  channels: [],
  socketState: actions.CLOSED,
  authState: actions.PENDING,
  authToken: null,
  error: undefined
};

function socket() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case actions.CONNECT_REQUEST:
      var options = state.options;
      var isCustom = state.isCustom;
      if (action.options) {
        isCustom = true;
        options = action.options;
      }
      return _extends({}, state, {
        isCustom: isCustom,
        options: options,
        socketState: actions.CONNECTING
      });
    case actions.CONNECT_ERROR:
      return _extends({}, state, {
        error: action.error
      });
    case actions.CONNECT_SUCCESS:
      return _extends({}, state, {
        id: action.payload.id,
        socketState: action.payload.socketState,
        authState: action.payload.authState,
        error: action.error
      });
    case actions.AUTH_REQUEST:
      return _extends({}, state, {
        authState: actions.PENDING
      });
    case actions.AUTH_SUCCESS:
      return _extends({}, state, {
        authState: actions.AUTHENTICATED,
        authToken: action.authToken,
        baseChannel: action.baseChannel
      });
    case actions.AUTH_ERROR:
      return _extends({}, state, {
        authState: actions.UNAUTHENTICATED,
        error: action.error
      });
    case actions.DEAUTHENTICATE:
      return _extends({}, state, {
        authState: actions.UNAUTHENTICATED,
        authToken: null
      });
    case actions.SUBSCRIBE_SUCCESS:
      return _extends({}, state, {
        channels: [].concat(_toConsumableArray(state.channels), [action.channelName])
      });
    case actions.UNSUBSCRIBE:
      return _extends({}, state, {
        channels: state.channels.filter(function (channel) {
          return channel !== action.channelName;
        })
      });
    case actions.DISCONNECTED:
      return _extends({}, initialState, {
        options: state.options
      });
    case actions.RECONNECT:
      return _extends({}, state, {
        isCustom: action.isCustom,
        options: action.isCustom ? action.options : _socketOptions2.default
      });
    default:
      return state;
  }
}
module.exports = exports['default'];