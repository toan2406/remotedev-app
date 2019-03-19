'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tooltipOptions = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp2;

exports.getPath = getPath;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _redux = require('redux');

var _reactRedux = require('react-redux');

var _reduxDevtoolsChartMonitor = require('redux-devtools-chart-monitor');

var _reduxDevtoolsChartMonitor2 = _interopRequireDefault(_reduxDevtoolsChartMonitor);

var _actions = require('../../actions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var tooltipOptions = exports.tooltipOptions = {
  style: {
    'background-color': '#ffffff',
    'color': '#000000',
    'opacity': '0.9',
    'border-radius': '5px',
    'padding': '5px'
  }
};

function getPath(obj, inspectedStatePath) {
  var parent = obj.parent;
  if (!parent) return;
  getPath(parent, inspectedStatePath);
  var name = obj.name;
  var item = name.match(/.+\[(\d+)]/);
  if (item) name = item[1];
  inspectedStatePath.push(name);
}

var ChartMonitorWrapper = (_temp2 = _class = function (_Component) {
  _inherits(ChartMonitorWrapper, _Component);

  function ChartMonitorWrapper() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ChartMonitorWrapper);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ChartMonitorWrapper.__proto__ || Object.getPrototypeOf(ChartMonitorWrapper)).call.apply(_ref, [this].concat(args))), _this), _this.onClickText = function (data) {
      var inspectedStatePath = [];
      getPath(data, inspectedStatePath);
      _this.props.selectMonitorWithState('InspectorMonitor', {
        inspectedStatePath: inspectedStatePath,
        tabName: 'State',
        subTabName: data.children ? 'Chart' : 'Tree',
        selectedActionId: null,
        startActionId: null,
        inspectedActionPath: []
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ChartMonitorWrapper, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_reduxDevtoolsChartMonitor2.default, _extends({
        defaultIsVisible: true, invertTheme: true,
        tooltipOptions: tooltipOptions,
        onClickText: this.onClickText
      }, this.props));
    }
  }]);

  return ChartMonitorWrapper;
}(_react.Component), _class.update = _reduxDevtoolsChartMonitor2.default.update, _temp2);


ChartMonitorWrapper.propTypes = {
  selectMonitorWithState: _react.PropTypes.func.isRequired
};

function mapDispatchToProps(dispatch) {
  return {
    selectMonitorWithState: (0, _redux.bindActionCreators)(_actions.selectMonitorWithState, dispatch)
  };
}

exports.default = (0, _reactRedux.connect)(null, mapDispatchToProps)(ChartMonitorWrapper);