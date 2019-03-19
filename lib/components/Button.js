'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp; // Based on https://github.com/gaearon/redux-devtools-log-monitor/blob/master/src/LogMonitorButton.js

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _shallowCompare = require('react/lib/shallowCompare');

var _shallowCompare2 = _interopRequireDefault(_shallowCompare);

var _reduxDevtoolsThemes = require('redux-devtools-themes');

var themes = _interopRequireWildcard(_reduxDevtoolsThemes);

var _brighten = require('redux-devtools-log-monitor/lib/brighten');

var _brighten2 = _interopRequireDefault(_brighten);

var _styles = require('../styles');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Button = (_temp = _class = function (_React$Component) {
  _inherits(Button, _React$Component);

  function Button(props) {
    _classCallCheck(this, Button);

    var _this = _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).call(this, props));

    _this.handleMouseEnter = _this.handleMouseEnter.bind(_this);
    _this.handleMouseLeave = _this.handleMouseLeave.bind(_this);
    _this.onClick = _this.onClick.bind(_this);

    _this.state = {
      hovered: false
    };
    return _this;
  }

  _createClass(Button, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      return (0, _shallowCompare2.default)(this, nextProps, nextState);
    }
  }, {
    key: 'onClick',
    value: function onClick() {
      if (!this.props.enabled) {
        return;
      }
      if (this.props.onClick) {
        this.props.onClick();
      }
    }
  }, {
    key: 'handleMouseEnter',
    value: function handleMouseEnter() {
      this.setState({ hovered: true });
    }
  }, {
    key: 'handleMouseLeave',
    value: function handleMouseLeave() {
      this.setState({ hovered: false });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          theme = _props.theme,
          enabled = _props.enabled,
          href = _props.href,
          download = _props.download,
          Icon = _props.Icon,
          children = _props.children,
          onMouseDown = _props.onMouseDown,
          onMouseUp = _props.onMouseUp;

      var style = _extends({}, _styles2.default.button, {
        backgroundColor: theme.base02
      });
      if (enabled && this.state.hovered) {
        style = _extends({}, style, {
          backgroundColor: (0, _brighten2.default)(theme.base02, 0.2)
        });
      }
      if (!enabled) {
        style = _extends({}, style, {
          opacity: 0.2,
          cursor: 'text',
          backgroundColor: 'transparent'
        });
      }
      return _react2.default.createElement(
        'a',
        { onMouseEnter: this.handleMouseEnter,
          onMouseLeave: this.handleMouseLeave,
          onMouseDown: onMouseDown,
          onMouseUp: onMouseUp,
          onClick: this.onClick,
          href: href,
          download: download,
          style: style
        },
        _react2.default.createElement(Icon, null),
        children && _react2.default.createElement(
          'span',
          { style: _styles2.default.buttonText },
          children
        )
      );
    }
  }]);

  return Button;
}(_react2.default.Component), _class.propTypes = {
  enabled: _react.PropTypes.bool,
  href: _react.PropTypes.string,
  download: _react.PropTypes.string,
  onClick: _react.PropTypes.func,
  onMouseDown: _react.PropTypes.func,
  onMouseUp: _react.PropTypes.func,
  Icon: _react.PropTypes.func.isRequired,
  children: _react.PropTypes.node,
  theme: _react.PropTypes.oneOfType([_react.PropTypes.object, _react.PropTypes.string])
}, _class.defaultProps = {
  theme: themes.nicinabox,
  enabled: true
}, _temp);
exports.default = Button;
module.exports = exports['default'];