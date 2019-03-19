'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _redux = require('redux');

var _reactRedux = require('react-redux');

var _remotedevMonitorComponents = require('remotedev-monitor-components');

var _ActionTab = require('remotedev-inspector-monitor/lib/tabs/ActionTab');

var _ActionTab2 = _interopRequireDefault(_ActionTab);

var _DiffTab = require('remotedev-inspector-monitor/lib/tabs/DiffTab');

var _DiffTab2 = _interopRequireDefault(_DiffTab);

var _StateTree = require('./StateTree');

var _StateTree2 = _interopRequireDefault(_StateTree);

var _actions = require('../../../actions');

var _RawTab = require('./RawTab');

var _RawTab2 = _interopRequireDefault(_RawTab);

var _ChartTab = require('./ChartTab');

var _ChartTab2 = _interopRequireDefault(_ChartTab);

var _VisualDiffTab = require('./VisualDiffTab');

var _VisualDiffTab2 = _interopRequireDefault(_VisualDiffTab);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SubTabs = function (_Component) {
  _inherits(SubTabs, _Component);

  function SubTabs(props) {
    _classCallCheck(this, SubTabs);

    var _this = _possibleConstructorReturn(this, (SubTabs.__proto__ || Object.getPrototypeOf(SubTabs)).call(this, props));

    _this.selector = function () {
      switch (_this.props.parentTab) {
        case 'Action':
          return { data: _this.props.action };
        case 'Diff':
          return { data: _this.props.delta };
        default:
          return { data: _this.props.nextState };
      }
    };

    _this.updateTabs(props);
    return _this;
  }

  _createClass(SubTabs, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.parentTab !== this.props.parentTab) {
        this.updateTabs(nextProps);
      }
    }
  }, {
    key: 'updateTabs',
    value: function updateTabs(props) {
      var _this2 = this;

      var parentTab = props.parentTab;

      if (parentTab === 'Diff') {
        this.tabs = [{
          name: 'Tree',
          component: _DiffTab2.default,
          selector: function selector() {
            return _this2.props;
          }
        }, {
          name: 'Raw',
          component: _VisualDiffTab2.default,
          selector: this.selector
        }];
        return;
      }

      this.tabs = [{
        name: 'Tree',
        component: parentTab === 'Action' ? _ActionTab2.default : _StateTree2.default,
        selector: function selector() {
          return _this2.props;
        }
      }, {
        name: 'Chart',
        component: _ChartTab2.default,
        selector: this.selector
      }, {
        name: 'Raw',
        component: _RawTab2.default,
        selector: this.selector
      }];
    }
  }, {
    key: 'render',
    value: function render() {
      var selected = this.props.selected;
      if (selected === 'Chart' && this.props.parentTab === 'Diff') selected = 'Tree';

      return _react2.default.createElement(_remotedevMonitorComponents.Tabs, {
        tabs: this.tabs,
        selected: selected,
        onClick: this.props.selectMonitorTab
      });
    }
  }]);

  return SubTabs;
}(_react.Component);

SubTabs.propTypes = {
  selected: _react.PropTypes.string,
  parentTab: _react.PropTypes.string,
  selectMonitorTab: _react.PropTypes.func.isRequired,
  action: _react.PropTypes.object,
  delta: _react.PropTypes.object,
  nextState: _react.PropTypes.object
};

function mapStateToProps(state) {
  return {
    parentTab: state.monitor.monitorState.tabName,
    selected: state.monitor.monitorState.subTabName
  };
}

function mapDispatchToProps(dispatch) {
  return {
    selectMonitorTab: (0, _redux.bindActionCreators)(_actions.selectMonitorTab, dispatch)
  };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(SubTabs);
module.exports = exports['default'];