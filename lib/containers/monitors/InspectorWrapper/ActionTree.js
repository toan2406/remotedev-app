'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ActionTab = require('remotedev-inspector-monitor/lib/tabs/ActionTab');

var _ActionTab2 = _interopRequireDefault(_ActionTab);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

exports.default = function (_ref) {
  var action = _ref.action,
      props = _objectWithoutProperties(_ref, ['action']);

  return _react2.default.createElement(_ActionTab2.default, _extends({}, props, {
    action: _extends({}, action, {
      type: action._type_
    })
  }));
};

module.exports = exports['default'];