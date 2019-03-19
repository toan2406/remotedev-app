'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _getMonitor2 = require('../utils/getMonitor');

var _getMonitor3 = _interopRequireDefault(_getMonitor2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DevTools = function (_Component) {
  _inherits(DevTools, _Component);

  function DevTools(props) {
    _classCallCheck(this, DevTools);

    var _this = _possibleConstructorReturn(this, (DevTools.__proto__ || Object.getPrototypeOf(DevTools)).call(this, props));

    _this.dispatch = function (action) {
      _this.props.dispatch(action);
    };

    _this.getMonitor(props);
    return _this;
  }

  _createClass(DevTools, [{
    key: 'getMonitor',
    value: function getMonitor(props) {
      var monitorElement = (0, _getMonitor3.default)(props);
      this.monitorProps = monitorElement.props;
      this.Monitor = monitorElement.type;

      var update = this.Monitor.update;
      if (update) {
        var newMonitorState = void 0;
        var monitorState = props.monitorState;
        if (monitorState && monitorState.__overwritten__ === props.monitor) {
          newMonitorState = monitorState;
        } else {
          newMonitorState = update(this.monitorProps, undefined, {});
          if (newMonitorState !== monitorState) {
            this.preventRender = true;
          }
        }
        this.dispatch({
          type: '@@INIT_MONITOR',
          newMonitorState: newMonitorState,
          update: update,
          monitorProps: this.monitorProps
        });
      }
    }
  }, {
    key: 'componentWillUpdate',
    value: function componentWillUpdate(nextProps) {
      if (nextProps.monitor !== this.props.monitor || nextProps.lib !== this.props.lib) this.getMonitor(nextProps);
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      return nextProps.monitor !== this.props.monitor || nextProps.liftedState !== this.props.liftedState || nextProps.monitorState !== this.props.liftedState || nextProps.lib !== this.props.lib;
    }
  }, {
    key: 'render',
    value: function render() {
      if (this.preventRender) {
        this.preventRender = false;
        return null;
      }

      var liftedState = _extends({}, this.props.liftedState, {
        monitorState: this.props.monitorState
      });
      return _react2.default.createElement(this.Monitor, _extends({
        dispatch: this.dispatch
      }, liftedState, this.monitorProps));
    }
  }]);

  return DevTools;
}(_react.Component);

exports.default = DevTools;


DevTools.propTypes = {
  liftedState: _react.PropTypes.object,
  monitorState: _react.PropTypes.object,
  dispatch: _react.PropTypes.func.isRequired,
  monitor: _react.PropTypes.string,
  lib: _react.PropTypes.string
};
module.exports = exports['default'];