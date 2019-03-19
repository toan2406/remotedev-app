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

var _keyboard = require('react-icons/lib/md/keyboard');

var _keyboard2 = _interopRequireDefault(_keyboard);

var _keyboardHide = require('react-icons/lib/md/keyboard-hide');

var _keyboardHide2 = _interopRequireDefault(_keyboardHide);

var _Button = require('../Button');

var _Button2 = _interopRequireDefault(_Button);

var _actions = require('../../actions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DispatcherButton = (_temp = _class = function (_Component) {
  _inherits(DispatcherButton, _Component);

  function DispatcherButton() {
    _classCallCheck(this, DispatcherButton);

    return _possibleConstructorReturn(this, (DispatcherButton.__proto__ || Object.getPrototypeOf(DispatcherButton)).apply(this, arguments));
  }

  _createClass(DispatcherButton, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      return nextProps.dispatcherIsOpen !== this.props.dispatcherIsOpen;
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _Button2.default,
        {
          Icon: this.props.dispatcherIsOpen ? _keyboardHide2.default : _keyboard2.default,
          onClick: this.props.toggleDispatcher
        },
        'Dispatcher'
      );
    }
  }]);

  return DispatcherButton;
}(_react.Component), _class.propTypes = {
  dispatcherIsOpen: _react.PropTypes.bool,
  toggleDispatcher: _react.PropTypes.func.isRequired
}, _temp);


function mapDispatchToProps(dispatch) {
  return {
    toggleDispatcher: (0, _redux.bindActionCreators)(_actions.toggleDispatcher, dispatch)
  };
}

exports.default = (0, _reactRedux.connect)(null, mapDispatchToProps)(DispatcherButton);
module.exports = exports['default'];