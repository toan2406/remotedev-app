'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  display: flex;\n  flex-direction: column;\n  box-sizing: border-box;\n  height: 100%;\n  padding: 10px;\n'], ['\n  display: flex;\n  flex-direction: column;\n  box-sizing: border-box;\n  height: 100%;\n  padding: 10px;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  display: flex;\n  align-items: center;\n  margin-bottom: 10px;\n'], ['\n  display: flex;\n  align-items: center;\n  margin-bottom: 10px;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  color: red;\n'], ['\n  color: red;\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  flex: 1;\n  display: block;\n  padding: 5px 10px;\n  margin: 0;\n  border: solid thin rgba(190, 190, 190, 0.5);\n  font-size: 12px;\n  color: white;\n  background: rgba(0, 0, 0, 0.2);\n  border-radius: 3px;\n'], ['\n  flex: 1;\n  display: block;\n  padding: 5px 10px;\n  margin: 0;\n  border: solid thin rgba(190, 190, 190, 0.5);\n  font-size: 12px;\n  color: white;\n  background: rgba(0, 0, 0, 0.2);\n  border-radius: 3px;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _redux = require('redux');

var _reactRedux = require('react-redux');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _json = require('json5');

var _json2 = _interopRequireDefault(_json);

var _actions = require('../../../actions');

var _CommonButton = require('../../../components/CommonButton');

var _CommonButton2 = _interopRequireDefault(_CommonButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MockTab = function (_Component) {
  _inherits(MockTab, _Component);

  function MockTab(props) {
    _classCallCheck(this, MockTab);

    var _this = _possibleConstructorReturn(this, (MockTab.__proto__ || Object.getPrototypeOf(MockTab)).call(this, props));

    _this.handleChange = function (e) {
      return _this.setState({ value: e.target.value, isDirty: true });
    };

    _this.handleSubmit = function () {
      try {
        var mockData = _json2.default.parse(_this.state.value);
        _this.props.submitMock(mockData);
        _this.setState({ error: '', isDirty: false });
      } catch (err) {
        _this.setState({ error: 'Invalid JSON' });
      }
    };

    _this.state = {
      value: _json2.default.stringify(props.mockData, null, 2),
      isDirty: false,
      error: ''
    };
    return _this;
  }

  _createClass(MockTab, [{
    key: 'render',
    value: function render() {
      var _state = this.state,
          value = _state.value,
          isDirty = _state.isDirty,
          error = _state.error;

      return _react2.default.createElement(
        Wrapper,
        null,
        _react2.default.createElement(
          ButtonWrapper,
          null,
          _react2.default.createElement(
            _CommonButton2.default,
            { onClick: this.handleSubmit, disabled: !isDirty },
            'Apply mock'
          ),
          _react2.default.createElement(
            Error,
            null,
            error
          )
        ),
        _react2.default.createElement(TextArea, { value: value, onChange: this.handleChange })
      );
    }
  }]);

  return MockTab;
}(_react.Component);

var Wrapper = _styledComponents2.default.div(_templateObject);

var ButtonWrapper = _styledComponents2.default.div(_templateObject2);

var Error = _styledComponents2.default.small(_templateObject3);

var TextArea = _styledComponents2.default.textarea(_templateObject4);

function mapStateToProps(state) {
  return {
    mockData: state.mock.data
  };
}

function mapDispatchToProps(dispatch) {
  return {
    submitMock: (0, _redux.bindActionCreators)(_actions.submitMock, dispatch)
  };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(MockTab);
module.exports = exports['default'];