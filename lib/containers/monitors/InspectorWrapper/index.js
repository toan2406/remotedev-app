'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _remotedevInspectorMonitor = require('remotedev-inspector-monitor');

var _remotedevInspectorMonitor2 = _interopRequireDefault(_remotedevInspectorMonitor);

var _reduxDevtoolsTraceMonitor = require('redux-devtools-trace-monitor');

var _reduxDevtoolsTraceMonitor2 = _interopRequireDefault(_reduxDevtoolsTraceMonitor);

var _dataTypes = require('../../../constants/dataTypes');

var _SubTabs = require('./SubTabs');

var _SubTabs2 = _interopRequireDefault(_SubTabs);

var _TestTab = require('./TestTab');

var _TestTab2 = _interopRequireDefault(_TestTab);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DEFAULT_TABS = [{
  name: 'Action',
  component: _SubTabs2.default
}, {
  name: 'State',
  component: _SubTabs2.default
}, {
  name: 'Diff',
  component: _SubTabs2.default
}];

var InspectorWrapper = (_temp = _class = function (_Component) {
  _inherits(InspectorWrapper, _Component);

  function InspectorWrapper() {
    _classCallCheck(this, InspectorWrapper);

    return _possibleConstructorReturn(this, (InspectorWrapper.__proto__ || Object.getPrototypeOf(InspectorWrapper)).apply(this, arguments));
  }

  _createClass(InspectorWrapper, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          lib = _props.lib,
          rest = _objectWithoutProperties(_props, ['lib']);

      var tabs = void 0;
      if (lib === 'redux') {
        tabs = function tabs() {
          return [].concat(DEFAULT_TABS, [{ name: 'Trace', component: _reduxDevtoolsTraceMonitor2.default }, { name: 'Test', component: _TestTab2.default }]);
        };
      } else {
        tabs = function tabs() {
          return DEFAULT_TABS;
        };
      }

      return _react2.default.createElement(_remotedevInspectorMonitor2.default, _extends({
        dataTypeKey: _dataTypes.DATA_TYPE_KEY,
        shouldPersistState: false,
        invertTheme: false,
        theme: 'nicinabox',
        tabs: tabs
      }, rest));
    }
  }]);

  return InspectorWrapper;
}(_react.Component), _class.update = _remotedevInspectorMonitor2.default.update, _temp);


InspectorWrapper.propTypes = {
  lib: _react.PropTypes.string
};

exports.default = InspectorWrapper;
module.exports = exports['default'];