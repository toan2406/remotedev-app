'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _fiberManualRecord = require('react-icons/lib/md/fiber-manual-record');

var _fiberManualRecord2 = _interopRequireDefault(_fiberManualRecord);

var _pauseCircleFilled = require('react-icons/lib/md/pause-circle-filled');

var _pauseCircleFilled2 = _interopRequireDefault(_pauseCircleFilled);

var _Button = require('../Button');

var _Button2 = _interopRequireDefault(_Button);

var _actions = require('../../actions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RecordButton = (_temp = _class = function (_Component) {
  _inherits(RecordButton, _Component);

  function RecordButton() {
    _classCallCheck(this, RecordButton);

    return _possibleConstructorReturn(this, (RecordButton.__proto__ || Object.getPrototypeOf(RecordButton)).apply(this, arguments));
  }

  _createClass(RecordButton, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      return nextProps.paused !== this.props.paused;
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _Button2.default,
        {
          Icon: this.props.paused ? _fiberManualRecord2.default : _pauseCircleFilled2.default,
          onClick: this.props.pauseRecording
        },
        this.props.paused ? 'Start recording' : 'Pause recording'
      );
    }
  }]);

  return RecordButton;
}(_react.Component), _class.propTypes = {
  paused: _react.PropTypes.bool,
  pauseRecording: _react.PropTypes.func.isRequired
}, _temp);


function mapDispatchToProps(dispatch, ownProps) {
  return {
    pauseRecording: function pauseRecording() {
      return dispatch((0, _actions.pauseRecording)(!ownProps.paused));
    }
  };
}

exports.default = (0, _reactRedux.connect)(null, mapDispatchToProps)(RecordButton);
module.exports = exports['default'];