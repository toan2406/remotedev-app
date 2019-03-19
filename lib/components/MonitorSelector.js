'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp2;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _redux = require('redux');

var _reactRedux = require('react-redux');

var _SelectField = require('material-ui/SelectField');

var _SelectField2 = _interopRequireDefault(_SelectField);

var _MenuItem = require('material-ui/MenuItem');

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _getMonitor = require('../utils/getMonitor');

var _actions = require('../actions');

var _styles = require('../styles');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MonitorSelector = (_temp2 = _class = function (_Component) {
  _inherits(MonitorSelector, _Component);

  function MonitorSelector() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, MonitorSelector);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = MonitorSelector.__proto__ || Object.getPrototypeOf(MonitorSelector)).call.apply(_ref, [this].concat(args))), _this), _this.items = _getMonitor.monitors.map(function (item, i) {
      return _react2.default.createElement(_MenuItem2.default, { key: i, value: item.key, primaryText: item.title });
    }), _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(MonitorSelector, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      return nextProps.selected !== this.props.selected;
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _SelectField2.default,
        {
          style: _styles2.default.select,
          labelStyle: _styles2.default.selectLabel,
          iconStyle: _styles2.default.selectIcon,
          onChange: this.props.selectMonitor,
          value: this.props.selected || 'InspectorMonitor'
        },
        this.items
      );
    }
  }]);

  return MonitorSelector;
}(_react.Component), _class.propTypes = {
  selected: _react.PropTypes.string,
  selectMonitor: _react.PropTypes.func.isRequired
}, _temp2);


function mapDispatchToProps(dispatch) {
  return {
    selectMonitor: (0, _redux.bindActionCreators)(_actions.selectMonitor, dispatch)
  };
}

exports.default = (0, _reactRedux.connect)(null, mapDispatchToProps)(MonitorSelector);
module.exports = exports['default'];