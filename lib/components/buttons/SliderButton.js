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

var _timer = require('react-icons/lib/md/timer');

var _timer2 = _interopRequireDefault(_timer);

var _timerOff = require('react-icons/lib/md/timer-off');

var _timerOff2 = _interopRequireDefault(_timerOff);

var _Button = require('../Button');

var _Button2 = _interopRequireDefault(_Button);

var _actions = require('../../actions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SliderButton = (_temp = _class = function (_Component) {
  _inherits(SliderButton, _Component);

  function SliderButton() {
    _classCallCheck(this, SliderButton);

    return _possibleConstructorReturn(this, (SliderButton.__proto__ || Object.getPrototypeOf(SliderButton)).apply(this, arguments));
  }

  _createClass(SliderButton, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      return nextProps.isOpen !== this.props.isOpen;
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _Button2.default,
        {
          Icon: this.props.isOpen ? _timerOff2.default : _timer2.default,
          onClick: this.props.toggleSlider
        },
        'Slider'
      );
    }
  }]);

  return SliderButton;
}(_react.Component), _class.propTypes = {
  isOpen: _react.PropTypes.bool,
  toggleSlider: _react.PropTypes.func.isRequired
}, _temp);


function mapDispatchToProps(dispatch) {
  return {
    toggleSlider: (0, _redux.bindActionCreators)(_actions.toggleSlider, dispatch)
  };
}

exports.default = (0, _reactRedux.connect)(null, mapDispatchToProps)(SliderButton);
module.exports = exports['default'];