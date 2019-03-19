'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _SelectField = require('material-ui/SelectField');

var _SelectField2 = _interopRequireDefault(_SelectField);

var _MenuItem = require('material-ui/MenuItem');

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _Button = require('../../../components/Button');

var _Button2 = _interopRequireDefault(_Button);

var _add = require('react-icons/lib/md/add');

var _add2 = _interopRequireDefault(_add);

var _edit = require('react-icons/lib/md/edit');

var _edit2 = _interopRequireDefault(_edit);

var _reduxDevtoolsTestGenerator = require('redux-devtools-test-generator');

var _reduxDevtoolsTestGenerator2 = _interopRequireDefault(_reduxDevtoolsTestGenerator);

var _template = require('redux-devtools-test-generator/lib/redux/jest/template');

var _template2 = _interopRequireDefault(_template);

var _template3 = require('redux-devtools-test-generator/lib/redux/mocha/template');

var _template4 = _interopRequireDefault(_template3);

var _template5 = require('redux-devtools-test-generator/lib/redux/tape/template');

var _template6 = _interopRequireDefault(_template5);

var _template7 = require('redux-devtools-test-generator/lib/redux/ava/template');

var _template8 = _interopRequireDefault(_template7);

var _actionTypes = require('../../../constants/actionTypes');

var _instances = require('../../../reducers/instances');

var _TestForm = require('./TestForm');

var _TestForm2 = _interopRequireDefault(_TestForm);

var _styles = require('../../../styles');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
/*
import mochaVTemplate from 'redux-devtools-test-generator/lib/vanilla/mocha/template';
import tapeVTemplate from 'redux-devtools-test-generator/lib/vanilla/tape/template';
import avaVTemplate from 'redux-devtools-test-generator/lib/vanilla/ava/template';
*/


var TestTab = function (_Component) {
  _inherits(TestTab, _Component);

  function TestTab(props) {
    _classCallCheck(this, TestTab);

    var _this = _possibleConstructorReturn(this, (TestTab.__proto__ || Object.getPrototypeOf(TestTab)).call(this, props));

    _this.onSelect = function (event, index, value) {
      _this.props.dispatch({ type: _actionTypes.TEST_SELECT, selected: value });
    };

    _this.editTemplate = function () {
      _this.setState({ dialogStatus: 1 });
    };

    _this.addTemplate = function () {
      _this.setState({ dialogStatus: 2 });
    };

    _this.dispatch = function (action) {
      var templates = void 0;
      if (!_this.props.templates) templates = _this.getDefaultTemplates();
      _this.props.dispatch(_extends({}, action, { templates: templates }));
    };

    _this.handleSave = function (template) {
      if (_this.state.dialogStatus === 1) {
        _this.dispatch({ type: _actionTypes.TEST_EDIT, template: template });
      } else {
        _this.dispatch({ type: _actionTypes.TEST_ADD, template: template });
      }
      _this.handleCloseDialog();
    };

    _this.handleRemove = function () {
      // Todo: add snackbar with undo
      _this.dispatch({ type: _actionTypes.TEST_REMOVE });
      _this.handleCloseDialog();
    };

    _this.handleCloseDialog = function () {
      _this.setState({ dialogStatus: 0 });
    };

    _this.state = { dialogStatus: 0 };
    return _this;
  }

  _createClass(TestTab, [{
    key: 'getDefaultTemplates',
    value: function getDefaultTemplates() {
      /*
      if (this.props.options.lib === 'redux') {
        return [mochaTemplate, tapeTemplate, avaTemplate];
      }
      return [mochaVTemplate, tapeVTemplate, avaVTemplate];
      */
      return [_template2.default, _template4.default, _template6.default, _template8.default];
    }
  }, {
    key: 'render',
    value: function render() {
      var dialogStatus = this.state.dialogStatus;
      var selected = this.props.selected;

      var templates = this.props.templates || this.getDefaultTemplates();
      var template = templates[selected];
      var assertion = template.assertion,
          dispatcher = template.dispatcher,
          wrap = template.wrap;


      return _react2.default.createElement(_reduxDevtoolsTestGenerator2.default, _extends({
        isVanilla: this.props.options.lib !== 'redux',
        name: this.props.options.name,
        assertion: assertion, dispatcher: dispatcher, wrap: wrap,
        theme: 'night', useCodemirror: true,
        header: _react2.default.createElement(
          'div',
          { style: { height: '2.5em', minHeight: '2.5em', display: 'flex' } },
          _react2.default.createElement(
            _SelectField2.default,
            {
              style: _styles2.default.select,
              labelStyle: _styles2.default.selectLabel,
              iconStyle: _styles2.default.selectIcon,
              onChange: this.onSelect,
              value: selected
            },
            templates.map(function (item, i) {
              return _react2.default.createElement(_MenuItem2.default, { key: i, value: i, primaryText: item.name });
            })
          ),
          _react2.default.createElement(_Button2.default, { Icon: _edit2.default, onClick: this.editTemplate }),
          _react2.default.createElement(_Button2.default, { Icon: _add2.default, onClick: this.addTemplate }),
          _react2.default.createElement(_TestForm2.default, {
            template: template, dialogStatus: dialogStatus,
            onSave: this.handleSave,
            onRemove: this.handleRemove,
            onClose: this.handleCloseDialog
          })
        )
      }, this.props));
    }
  }]);

  return TestTab;
}(_react.Component);

TestTab.propTypes = {
  templates: _react.PropTypes.array,
  selected: _react.PropTypes.number,
  options: _react.PropTypes.object.isRequired,
  dispatch: _react.PropTypes.func.isRequired
};

function mapStateToProps(state) {
  var instances = state.instances;
  return {
    templates: state.test.templates,
    selected: state.test.selected,
    options: instances.options[(0, _instances.getActiveInstance)(instances)]
  };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps)(TestTab);
module.exports = exports['default'];