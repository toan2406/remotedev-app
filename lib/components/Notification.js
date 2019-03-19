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

var _reduxDevtoolsThemes = require('redux-devtools-themes');

var themes = _interopRequireWildcard(_reduxDevtoolsThemes);

var _actions = require('../actions');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Notification = (_temp = _class = function (_Component) {
  _inherits(Notification, _Component);

  function Notification() {
    _classCallCheck(this, Notification);

    return _possibleConstructorReturn(this, (Notification.__proto__ || Object.getPrototypeOf(Notification)).apply(this, arguments));
  }

  _createClass(Notification, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      return nextProps.notification !== this.props.notification;
    }
  }, {
    key: 'render',
    value: function render() {
      if (!this.props.notification) return null;
      var theme = themes.nicinabox;
      var buttonStyle = {
        color: theme.base06, backgroundColor: theme.base00,
        margin: '0', background: '#DC2424'
      };
      var containerStyle = {
        color: theme.base06, background: '#FC2424',
        padding: '5px 10px', minHeight: '20px', display: 'flex'
      };
      return _react2.default.createElement(
        'div',
        { style: containerStyle },
        _react2.default.createElement(
          'div',
          { style: { flex: '1', alignItems: 'center' } },
          _react2.default.createElement(
            'p',
            { style: { margin: '0px' } },
            this.props.notification.message
          )
        ),
        _react2.default.createElement(
          'div',
          { style: { alignItems: 'center' } },
          _react2.default.createElement(
            'button',
            {
              onClick: this.props.clearNotification,
              style: buttonStyle
            },
            '\xD7'
          )
        )
      );
    }
  }]);

  return Notification;
}(_react.Component), _class.propTypes = {
  notification: _react.PropTypes.shape({
    message: _react.PropTypes.string,
    type: _react.PropTypes.string
  }),
  clearNotification: _react.PropTypes.func.isRequired
}, _temp);


function mapStateToProps(state) {
  return {
    notification: state.notification
  };
}

function mapDispatchToProps(dispatch) {
  return {
    clearNotification: (0, _redux.bindActionCreators)(_actions.clearNotification, dispatch)
  };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Notification);
module.exports = exports['default'];