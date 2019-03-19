'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

require('remotedev-monitor-components/lib/presets');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _hoc = require('./hoc');

var _hoc2 = _interopRequireDefault(_hoc);

var _configureStore = require('./store/configureStore');

var _configureStore2 = _interopRequireDefault(_configureStore);

var _localStorage = require('./utils/localStorage');

var _socketActionTypes = require('./constants/socketActionTypes');

var _App = require('./containers/App');

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Root = function (_Component) {
  _inherits(Root, _Component);

  function Root() {
    _classCallCheck(this, Root);

    return _possibleConstructorReturn(this, (Root.__proto__ || Object.getPrototypeOf(Root)).apply(this, arguments));
  }

  _createClass(Root, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.store = (0, _configureStore2.default)({
        monitor: (0, _localStorage.getMonitorSettings)() || this.props.monitorOptions,
        test: {
          selected: (0, _localStorage.getTemplatesSelected)(),
          templates: (0, _localStorage.getTestTemplates)() || this.props.testTemplates
        }
      });
      this.store.dispatch({
        type: _socketActionTypes.CONNECT_REQUEST,
        options: (0, _localStorage.getSocketSettings)() || this.props.socketOptions
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _reactRedux.Provider,
        { store: this.store },
        _react2.default.createElement(_App2.default, this.props)
      );
    }
  }]);

  return Root;
}(_react.Component);

Root.propTypes = {
  hash: _react.PropTypes.bool,
  socketOptions: _react.PropTypes.shape({
    hostname: _react.PropTypes.string,
    port: _react.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.number]),
    autoReconnect: _react.PropTypes.bool,
    secure: _react.PropTypes.bool
  }),
  monitorOptions: _react.PropTypes.shape({
    selected: _react.PropTypes.string
  }),
  testTemplates: _react.PropTypes.array
};

exports.default = (0, _hoc2.default)(Root);
module.exports = exports['default'];