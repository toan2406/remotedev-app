'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.monitors = undefined;
exports.default = getMonitor;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reduxDevtoolsLogMonitor = require('redux-devtools-log-monitor');

var _reduxDevtoolsLogMonitor2 = _interopRequireDefault(_reduxDevtoolsLogMonitor);

var _ChartMonitorWrapper = require('../containers/monitors/ChartMonitorWrapper');

var _ChartMonitorWrapper2 = _interopRequireDefault(_ChartMonitorWrapper);

var _InspectorWrapper = require('../containers/monitors/InspectorWrapper');

var _InspectorWrapper2 = _interopRequireDefault(_InspectorWrapper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var monitors = exports.monitors = [{ key: 'LogMonitor', title: 'Log monitor' }, { key: 'InspectorMonitor', title: 'Inspector' }, { key: 'ChartMonitor', title: 'Chart' }];

function getMonitor(_ref) {
  var monitor = _ref.monitor,
      lib = _ref.lib;

  switch (monitor) {
    case 'LogMonitor':
      return _react2.default.createElement(_reduxDevtoolsLogMonitor2.default, { preserveScrollTop: false, markStateDiff: true });
    case 'ChartMonitor':
      return _react2.default.createElement(_ChartMonitorWrapper2.default, null);
    default:
      return _react2.default.createElement(_InspectorWrapper2.default, { lib: lib });
  }
}