'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  display: flex;\n  align-items: flex-start;\n  padding: 10px;\n  margin-bottom: 10px;\n'], ['\n  display: flex;\n  align-items: flex-start;\n  padding: 10px;\n  margin-bottom: 10px;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  display: block;\n  padding: 5px 10px;\n  margin: 0;\n  margin-right: 10px;\n  border: solid thin rgba(190, 190, 190, 0.5);\n  font-size: 12px;\n  color: white;\n  background: rgba(0, 0, 0, 0.1);\n  border-radius: 3px;\n'], ['\n  display: block;\n  padding: 5px 10px;\n  margin: 0;\n  margin-right: 10px;\n  border: solid thin rgba(190, 190, 190, 0.5);\n  font-size: 12px;\n  color: white;\n  background: rgba(0, 0, 0, 0.1);\n  border-radius: 3px;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  color: red;\n'], ['\n  color: red;\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  max-width: 200px;\n  padding: 5px 10px;\n  margin: 0;\n  margin-right: 5px;\n  border: solid thin rgba(190, 190, 190, 0.5);\n  font-size: 12px;\n  color: white;\n  background: transparent;\n  border-radius: 3px;\n  cursor: pointer;\n  outline: none;\n\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n\n  &:hover {\n    background: rgba(190, 190, 190, 0.2);\n  }\n'], ['\n  max-width: 200px;\n  padding: 5px 10px;\n  margin: 0;\n  margin-right: 5px;\n  border: solid thin rgba(190, 190, 190, 0.5);\n  font-size: 12px;\n  color: white;\n  background: transparent;\n  border-radius: 3px;\n  cursor: pointer;\n  outline: none;\n\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n\n  &:hover {\n    background: rgba(190, 190, 190, 0.2);\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _StateTab = require('remotedev-inspector-monitor/lib/tabs/StateTab');

var _StateTab2 = _interopRequireDefault(_StateTab);

var _bfs = require('../../../utils/bfs');

var _bfs2 = _interopRequireDefault(_bfs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EnhancedStateTree = function (_Component) {
  _inherits(EnhancedStateTree, _Component);

  function EnhancedStateTree() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, EnhancedStateTree);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = EnhancedStateTree.__proto__ || Object.getPrototypeOf(EnhancedStateTree)).call.apply(_ref, [this].concat(args))), _this), _this.state = { searchValue: '', error: '' }, _this.onChangeSearchValue = function (e) {
      return _this.setState({ searchValue: e.target.value });
    }, _this.resetState = function () {
      return _this.setState({ searchValue: '', error: '' });
    }, _this.onSearch = function () {
      var _this$props = _this.props,
          nextState = _this$props.nextState,
          updateMonitorState = _this$props.updateMonitorState,
          inspectedStatePath = _this$props.monitorState.inspectedStatePath;
      var searchValue = _this.state.searchValue;


      var searchPath = (0, _bfs2.default)(nextState, searchValue).slice(1);

      _this.resetState();

      if (!searchPath.length && searchValue) return _this.setState({ error: 'Not found' });

      if (!inspectedStatePath.length) return updateMonitorState({
        inspectedStatePath: searchPath
      });

      return updateMonitorState({
        inspectedStatePath: [].concat(_toConsumableArray(inspectedStatePath), _toConsumableArray(searchPath.slice(1)))
      });
    }, _this.onReset = function () {
      _this.resetState();
      _this.props.updateMonitorState({ inspectedStatePath: [] });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(EnhancedStateTree, [{
    key: 'render',
    value: function render() {
      var inspectedStatePath = this.props.monitorState.inspectedStatePath;
      var _state = this.state,
          searchValue = _state.searchValue,
          error = _state.error;


      var inspectedKey = lastOr(inspectedStatePath, 'root');

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          SearchForm,
          null,
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(Input, {
              placeholder: 'Key...',
              value: searchValue,
              onChange: this.onChangeSearchValue
            }),
            _react2.default.createElement(
              Error,
              null,
              error
            )
          ),
          _react2.default.createElement(
            Button,
            { onClick: this.onSearch },
            'Search from ',
            inspectedKey
          ),
          _react2.default.createElement(
            Button,
            { onClick: this.onReset },
            'Reset'
          )
        ),
        _react2.default.createElement(_StateTab2.default, this.props)
      );
    }
  }]);

  return EnhancedStateTree;
}(_react.Component);

var SearchForm = _styledComponents2.default.div(_templateObject);

var Input = _styledComponents2.default.input(_templateObject2);

var Error = _styledComponents2.default.small(_templateObject3);

var Button = _styledComponents2.default.button(_templateObject4);

var lastOr = function lastOr(array, defaultValue) {
  var lastElement = array[array.length - 1];
  return typeof lastElement === 'undefined' ? defaultValue : lastElement;
};

exports.default = EnhancedStateTree;
module.exports = exports['default'];