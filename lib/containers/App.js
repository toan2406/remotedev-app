'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _redux = require('redux');

var _reactRedux = require('react-redux');

var _Slider = require('remotedev-slider/lib/Slider');

var _Slider2 = _interopRequireDefault(_Slider);

var _actions = require('../actions');

var _instances = require('../reducers/instances');

var _styles = require('../styles');

var _styles2 = _interopRequireDefault(_styles);

var _DevTools = require('../containers/DevTools');

var _DevTools2 = _interopRequireDefault(_DevTools);

var _Dispatcher = require('./monitors/Dispatcher');

var _Dispatcher2 = _interopRequireDefault(_Dispatcher);

var _ButtonBar = require('../components/ButtonBar');

var _ButtonBar2 = _interopRequireDefault(_ButtonBar);

var _Notification = require('../components/Notification');

var _Notification2 = _interopRequireDefault(_Notification);

var _Instances = require('../components/Instances');

var _Instances2 = _interopRequireDefault(_Instances);

var _MonitorSelector = require('../components/MonitorSelector');

var _MonitorSelector2 = _interopRequireDefault(_MonitorSelector);

var _SyncToggle = require('../components/SyncToggle');

var _SyncToggle2 = _interopRequireDefault(_SyncToggle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          monitor = _props.monitor,
          dispatcherIsOpen = _props.dispatcherIsOpen,
          sliderIsOpen = _props.sliderIsOpen,
          options = _props.options,
          liftedState = _props.liftedState;

      return _react2.default.createElement(
        'div',
        { style: _styles2.default.container },
        _react2.default.createElement(
          'div',
          { style: _styles2.default.buttonBar },
          _react2.default.createElement(_MonitorSelector2.default, { selected: monitor }),
          _react2.default.createElement(_Instances2.default, { selected: this.props.selected }),
          _react2.default.createElement(_SyncToggle2.default, {
            on: this.props.shouldSync,
            style: !this.props.selected ? { display: 'none' } : undefined
          })
        ),
        _react2.default.createElement(_DevTools2.default, {
          monitor: monitor,
          liftedState: liftedState,
          monitorState: this.props.monitorState,
          dispatch: this.props.liftedDispatch,
          lib: options.lib
        }),
        _react2.default.createElement(_Notification2.default, null),
        sliderIsOpen && options.connectionId && _react2.default.createElement(_Slider2.default, {
          monitor: 'SliderMonitor',
          liftedState: liftedState,
          dispatch: this.props.liftedDispatch,
          getReport: this.props.getReport,
          reports: this.props.reports,
          showActions: monitor === 'ChartMonitor',
          style: { padding: '15px 5px' },
          fillColor: 'rgb(120, 144, 156)'
        }),
        dispatcherIsOpen && options.connectionId && _react2.default.createElement(_Dispatcher2.default, { options: options }),
        _react2.default.createElement(_ButtonBar2.default, {
          liftedState: liftedState,
          dispatcherIsOpen: dispatcherIsOpen,
          sliderIsOpen: sliderIsOpen,
          lib: options.lib,
          noSettings: this.props.noSettings
        })
      );
    }
  }]);

  return App;
}(_react.Component);

App.propTypes = {
  liftedDispatch: _react.PropTypes.func.isRequired,
  getReport: _react.PropTypes.func.isRequired,
  selected: _react.PropTypes.string,
  liftedState: _react.PropTypes.object.isRequired,
  monitorState: _react.PropTypes.object,
  options: _react.PropTypes.object.isRequired,
  monitor: _react.PropTypes.string,
  dispatcherIsOpen: _react.PropTypes.bool,
  sliderIsOpen: _react.PropTypes.bool,
  reports: _react.PropTypes.array.isRequired,
  shouldSync: _react.PropTypes.bool,
  noSettings: _react.PropTypes.bool
};

function mapStateToProps(state) {
  var instances = state.instances;
  var id = (0, _instances.getActiveInstance)(instances);
  return {
    selected: instances.selected,
    liftedState: instances.states[id],
    monitorState: state.monitor.monitorState,
    options: instances.options[id],
    monitor: state.monitor.selected,
    dispatcherIsOpen: state.monitor.dispatcherIsOpen,
    sliderIsOpen: state.monitor.sliderIsOpen,
    reports: state.reports.data,
    shouldSync: state.instances.sync
  };
}

function mapDispatchToProps(dispatch) {
  return {
    liftedDispatch: (0, _redux.bindActionCreators)(_actions.liftedDispatch, dispatch),
    getReport: (0, _redux.bindActionCreators)(_actions.getReport, dispatch)
  };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(App);
module.exports = exports['default'];