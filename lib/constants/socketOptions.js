'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var socketOptions = {
  hostname: 'remotedev.io',
  port: 443,
  protocol: 'https',
  autoReconnect: true,
  secure: true,
  autoReconnectOptions: {
    randomness: 30000
  }
};

exports.default = socketOptions;
module.exports = exports['default'];