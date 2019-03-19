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

var _Dialog = require('material-ui/Dialog');

var _Dialog2 = _interopRequireDefault(_Dialog);

var _FlatButton = require('material-ui/FlatButton');

var _FlatButton2 = _interopRequireDefault(_FlatButton);

var _Checkbox = require('material-ui/Checkbox');

var _Checkbox2 = _interopRequireDefault(_Checkbox);

var _TextField = require('material-ui/TextField');

var _TextField2 = _interopRequireDefault(_TextField);

var _actions = require('../actions');

var _styles = require('../styles');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Settings = (_temp = _class = function (_Component) {
  _inherits(Settings, _Component);

  function Settings(props) {
    _classCallCheck(this, Settings);

    var _this = _possibleConstructorReturn(this, (Settings.__proto__ || Object.getPrototypeOf(Settings)).call(this, props));

    _this.handleLocalChecked = function (e, checked) {
      _this.setState({ isCustom: checked });
    };

    _this.handleInputChange = function (e, value) {
      _this.options[e.target.id] = value;
    };

    _this.handleCheckboxChange = function (e, checked) {
      _this.options[e.target.id] = checked;
    };

    _this.save = function () {
      _this.props.saveSettings(_this.state.isCustom, _this.options);
      _this.props.close();
    };

    var isCustom = props.isCustom;
    _this.options = {};
    if (isCustom) {
      _this.options.hostname = props.socketOptions.hostname;
      _this.options.port = props.socketOptions.port;
      _this.options.secure = props.socketOptions.secure;
    } else {
      _this.options.hostname = 'localhost';
      _this.options.port = '8000';
      _this.options.secure = false;
    }

    _this.state = { isCustom: isCustom };
    return _this;
  }

  _createClass(Settings, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          isOpen = _props.isOpen,
          close = _props.close;


      var actions = [_react2.default.createElement(_FlatButton2.default, {
        label: 'Cancel',
        primary: true,
        onTouchTap: close
      }), _react2.default.createElement(_FlatButton2.default, {
        label: 'Submit',
        primary: true, keyboardFocused: true,
        onTouchTap: this.save
      })];

      return _react2.default.createElement(
        _Dialog2.default,
        {
          title: 'Settings',
          titleStyle: _styles2.default.dialogTitle,
          bodyStyle: _styles2.default.dialogBody,
          actions: actions,
          open: isOpen,
          onRequestClose: close,
          autoScrollBodyContent: true
        },
        _react2.default.createElement(_Checkbox2.default, {
          label: 'Use custom (local) server',
          checked: this.state.isCustom,
          onCheck: this.handleLocalChecked
        }),
        this.state.isCustom && _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(_TextField2.default, {
            id: 'hostname',
            floatingLabelText: 'Host name',
            defaultValue: this.options.hostname,
            onChange: this.handleInputChange
          }),
          _react2.default.createElement(_TextField2.default, {
            id: 'port',
            floatingLabelText: 'Port',
            defaultValue: this.options.port,
            onChange: this.handleInputChange
          }),
          _react2.default.createElement('br', null),
          _react2.default.createElement(_Checkbox2.default, {
            id: 'secure',
            label: 'Use secure connection',
            defaultChecked: this.options.secure,
            onCheck: this.handleCheckboxChange
          })
        )
      );
    }
  }]);

  return Settings;
}(_react.Component), _class.propTypes = {
  isOpen: _react.PropTypes.bool,
  close: _react.PropTypes.func.isRequired,
  saveSettings: _react.PropTypes.func.isRequired,
  socketOptions: _react.PropTypes.object.isRequired,
  isCustom: _react.PropTypes.bool
}, _temp);


function mapStateToProps(state) {
  return {
    socketOptions: state.socket.options,
    isCustom: state.socket.isCustom
  };
}

function mapDispatchToProps(dispatch) {
  return {
    saveSettings: (0, _redux.bindActionCreators)(_actions.saveSocketSettings, dispatch)
  };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Settings);
module.exports = exports['default'];