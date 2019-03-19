'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _redux = require('redux');

var _reactRedux = require('react-redux');

var _pin = require('react-icons/lib/ti/pin');

var _pin2 = _interopRequireDefault(_pin);

var _sync = require('react-icons/lib/go/sync');

var _sync2 = _interopRequireDefault(_sync);

var _reactSwitcher = require('react-switcher');

var _reactSwitcher2 = _interopRequireDefault(_reactSwitcher);

var _actions = require('../actions');

var _styles = require('../styles');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SyncToggle = (_temp = _class = function (_Component) {
  _inherits(SyncToggle, _Component);

  function SyncToggle() {
    _classCallCheck(this, SyncToggle);

    return _possibleConstructorReturn(this, (SyncToggle.__proto__ || Object.getPrototypeOf(SyncToggle)).apply(this, arguments));
  }

  _createClass(SyncToggle, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      return nextProps.on !== this.props.on || nextProps.style !== this.props.style;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          on = _props.on,
          onClick = _props.onClick,
          style = _props.style;

      return _react2.default.createElement(
        'div',
        { style: style ? style : _styles2.default.syncToggle },
        _react2.default.createElement(_reactSwitcher2.default, {
          on: on,
          onClick: onClick,
          offIcon: _react2.default.createElement(_pin2.default, null),
          onIcon: _react2.default.createElement(_sync2.default, null)
        })
      );
    }
  }]);

  return SyncToggle;
}(_react.Component), _class.propTypes = {
  on: _react.PropTypes.bool,
  style: _react.PropTypes.object,
  onClick: _react.PropTypes.func.isRequired
}, _temp);


function mapDispatchToProps(dispatch) {
  return {
    onClick: (0, _redux.bindActionCreators)(_actions.toggleSync, dispatch)
  };
}

exports.default = (0, _reactRedux.connect)(null, mapDispatchToProps)(SyncToggle);
module.exports = exports['default'];