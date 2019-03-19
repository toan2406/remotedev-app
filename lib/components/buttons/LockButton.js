'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _lock = require('react-icons/lib/md/lock');

var _lock2 = _interopRequireDefault(_lock);

var _lockOpen = require('react-icons/lib/md/lock-open');

var _lockOpen2 = _interopRequireDefault(_lockOpen);

var _Button = require('../Button');

var _Button2 = _interopRequireDefault(_Button);

var _actions = require('../../actions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LockButton = (_temp = _class = function (_Component) {
  _inherits(LockButton, _Component);

  function LockButton() {
    _classCallCheck(this, LockButton);

    return _possibleConstructorReturn(this, (LockButton.__proto__ || Object.getPrototypeOf(LockButton)).apply(this, arguments));
  }

  _createClass(LockButton, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      return nextProps.locked !== this.props.locked;
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _Button2.default,
        {
          Icon: this.props.locked ? _lock2.default : _lockOpen2.default,
          onClick: this.props.lockChanges
        },
        this.props.locked ? 'Unlock changes' : 'Lock changes'
      );
    }
  }]);

  return LockButton;
}(_react.Component), _class.propTypes = {
  locked: _react.PropTypes.bool,
  lockChanges: _react.PropTypes.func.isRequired
}, _temp);


function mapDispatchToProps(dispatch, ownProps) {
  return {
    lockChanges: function lockChanges() {
      return dispatch((0, _actions.lockChanges)(!ownProps.locked));
    }
  };
}

exports.default = (0, _reactRedux.connect)(null, mapDispatchToProps)(LockButton);
module.exports = exports['default'];