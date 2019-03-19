'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _settings = require('react-icons/lib/md/settings');

var _settings2 = _interopRequireDefault(_settings);

var _lightbulbO = require('react-icons/lib/fa/lightbulb-o');

var _lightbulbO2 = _interopRequireDefault(_lightbulbO);

var _Button = require('./Button');

var _Button2 = _interopRequireDefault(_Button);

var _DispatcherButton = require('./buttons/DispatcherButton');

var _DispatcherButton2 = _interopRequireDefault(_DispatcherButton);

var _ImportButton = require('./buttons/ImportButton');

var _ImportButton2 = _interopRequireDefault(_ImportButton);

var _ExportButton = require('./buttons/ExportButton');

var _ExportButton2 = _interopRequireDefault(_ExportButton);

var _SliderButton = require('./buttons/SliderButton');

var _SliderButton2 = _interopRequireDefault(_SliderButton);

var _LockButton = require('./buttons/LockButton');

var _LockButton2 = _interopRequireDefault(_LockButton);

var _RecordButton = require('./buttons/RecordButton');

var _RecordButton2 = _interopRequireDefault(_RecordButton);

var _PrintButton = require('./buttons/PrintButton');

var _PrintButton2 = _interopRequireDefault(_PrintButton);

var _styles = require('../styles');

var _styles2 = _interopRequireDefault(_styles);

var _Settings = require('./Settings');

var _Settings2 = _interopRequireDefault(_Settings);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ButtonBar = (_temp = _class = function (_Component) {
  _inherits(ButtonBar, _Component);

  function ButtonBar() {
    _classCallCheck(this, ButtonBar);

    var _this = _possibleConstructorReturn(this, (ButtonBar.__proto__ || Object.getPrototypeOf(ButtonBar)).call(this));

    _this.state = { settingsOpened: false };
    _this.openSettings = _this.openSettings.bind(_this);
    _this.closeSettings = _this.closeSettings.bind(_this);
    return _this;
  }

  _createClass(ButtonBar, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      return nextProps.dispatcherIsOpen !== this.props.dispatcherIsOpen || nextProps.sliderIsOpen !== this.props.sliderIsOpen || nextState.settingsOpened !== this.state.settingsOpened || nextProps.lib !== this.props.lib || nextProps.liftedState.isLocked !== this.props.liftedState.isLocked || nextProps.liftedState.isPaused !== this.props.liftedState.isPaused;
    }
  }, {
    key: 'openHelp',
    value: function openHelp() {
      window.open('https://github.com/zalmoxisus/remote-redux-devtools');
    }
  }, {
    key: 'openSettings',
    value: function openSettings() {
      this.setState({ settingsOpened: true });
    }
  }, {
    key: 'closeSettings',
    value: function closeSettings() {
      this.setState({ settingsOpened: false });
    }
  }, {
    key: 'render',
    value: function render() {
      var isRedux = this.props.lib === 'redux';
      return _react2.default.createElement(
        'div',
        { style: _styles2.default.buttonBar },
        isRedux && _react2.default.createElement(_RecordButton2.default, { paused: this.props.liftedState.isPaused }),
        isRedux && _react2.default.createElement(_LockButton2.default, { locked: this.props.liftedState.isLocked }),
        _react2.default.createElement(_DispatcherButton2.default, { dispatcherIsOpen: this.props.dispatcherIsOpen }),
        _react2.default.createElement(_SliderButton2.default, { isOpen: this.props.sliderIsOpen }),
        _react2.default.createElement(_ImportButton2.default, null),
        _react2.default.createElement(_ExportButton2.default, null),
        _react2.default.createElement(_PrintButton2.default, null),
        !this.props.noSettings && _react2.default.createElement(
          _Button2.default,
          { Icon: _settings2.default, onClick: this.openSettings },
          'Settings'
        ),
        _react2.default.createElement(
          _Button2.default,
          { Icon: _lightbulbO2.default, onClick: this.openHelp },
          'How to use'
        ),
        !this.props.noSettings && _react2.default.createElement(_Settings2.default, { isOpen: this.state.settingsOpened, close: this.closeSettings })
      );
    }
  }]);

  return ButtonBar;
}(_react.Component), _class.propTypes = {
  liftedState: _react.PropTypes.object.isRequired,
  dispatcherIsOpen: _react.PropTypes.bool,
  sliderIsOpen: _react.PropTypes.bool,
  noSettings: _react.PropTypes.bool,
  lib: _react.PropTypes.string
}, _temp);
exports.default = ButtonBar;
module.exports = exports['default'];