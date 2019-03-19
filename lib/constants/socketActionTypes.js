'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EMIT = exports.UNSUBSCRIBE = exports.SUBSCRIBE_ERROR = exports.SUBSCRIBE_SUCCESS = exports.SUBSCRIBE_REQUEST = exports.DEAUTHENTICATE = exports.DISCONNECTED = exports.AUTH_ERROR = exports.AUTH_SUCCESS = exports.AUTH_REQUEST = exports.RECONNECT = exports.CONNECT_ERROR = exports.CONNECT_SUCCESS = exports.CONNECT_REQUEST = exports.UNAUTHENTICATED = exports.PENDING = exports.AUTHENTICATED = exports.OPEN = exports.CONNECTING = exports.CLOSED = undefined;

var _socketclusterClient = require('socketcluster-client');

var _socketclusterClient2 = _interopRequireDefault(_socketclusterClient);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _socketCluster$SCSock = _socketclusterClient2.default.SCSocket;
var CLOSED = _socketCluster$SCSock.CLOSED,
    CONNECTING = _socketCluster$SCSock.CONNECTING,
    OPEN = _socketCluster$SCSock.OPEN,
    AUTHENTICATED = _socketCluster$SCSock.AUTHENTICATED,
    PENDING = _socketCluster$SCSock.PENDING,
    UNAUTHENTICATED = _socketCluster$SCSock.UNAUTHENTICATED;
exports.CLOSED = CLOSED;
exports.CONNECTING = CONNECTING;
exports.OPEN = OPEN;
exports.AUTHENTICATED = AUTHENTICATED;
exports.PENDING = PENDING;
exports.UNAUTHENTICATED = UNAUTHENTICATED;
var CONNECT_REQUEST = exports.CONNECT_REQUEST = 'socket/CONNECT_REQUEST';
var CONNECT_SUCCESS = exports.CONNECT_SUCCESS = 'socket/CONNECT_SUCCESS';
var CONNECT_ERROR = exports.CONNECT_ERROR = 'socket/CONNECT_ERROR';
var RECONNECT = exports.RECONNECT = 'socket/RECONNECT';
var AUTH_REQUEST = exports.AUTH_REQUEST = 'socket/AUTH_REQUEST';
var AUTH_SUCCESS = exports.AUTH_SUCCESS = 'socket/AUTH_SUCCESS';
var AUTH_ERROR = exports.AUTH_ERROR = 'socket/AUTH_ERROR';
var DISCONNECTED = exports.DISCONNECTED = 'socket/DISCONNECTED';
var DEAUTHENTICATE = exports.DEAUTHENTICATE = 'socket/DEAUTHENTICATE';
var SUBSCRIBE_REQUEST = exports.SUBSCRIBE_REQUEST = 'socket/SUBSCRIBE_REQUEST';
var SUBSCRIBE_SUCCESS = exports.SUBSCRIBE_SUCCESS = 'socket/SUBSCRIBE_SUCCESS';
var SUBSCRIBE_ERROR = exports.SUBSCRIBE_ERROR = 'socket/SUBSCRIBE_ERROR';
var UNSUBSCRIBE = exports.UNSUBSCRIBE = 'socket/UNSUBSCRIBE';
var EMIT = exports.EMIT = 'socket/EMIT';