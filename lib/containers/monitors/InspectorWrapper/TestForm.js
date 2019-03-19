'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Dialog = require('material-ui/Dialog');

var _Dialog2 = _interopRequireDefault(_Dialog);

var _FlatButton = require('material-ui/FlatButton');

var _FlatButton2 = _interopRequireDefault(_FlatButton);

var _TextField = require('material-ui/TextField');

var _TextField2 = _interopRequireDefault(_TextField);

var _styles = require('../../../styles');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TestForm = function (_Component) {
  _inherits(TestForm, _Component);

  function TestForm(props) {
    _classCallCheck(this, TestForm);

    var _this = _possibleConstructorReturn(this, (TestForm.__proto__ || Object.getPrototypeOf(TestForm)).call(this, props));

    _this.handleInputChange = function (e, value) {
      _this.template[e.target.id] = value;
    };

    _this.save = function () {
      _this.props.onSave(_this.template);
    };

    if (props.dialogStatus === 1) _this.template = _extends({}, _this.props.template);else _this.template = {};
    return _this;
  }

  _createClass(TestForm, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.dialogStatus === 1) this.template = _extends({}, nextProps.template);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          onClose = _props.onClose,
          onRemove = _props.onRemove,
          dialogStatus = _props.dialogStatus;

      var template = {};
      if (dialogStatus === 1) template = this.props.template;
      var _template = template,
          name = _template.name,
          assertion = _template.assertion,
          dispatcher = _template.dispatcher,
          wrap = _template.wrap;

      var actions = [_react2.default.createElement(_FlatButton2.default, {
        label: 'Cancel',
        primary: true,
        onTouchTap: onClose,
        labelStyle: _styles2.default.buttonLabel,
        style: _styles2.default.flatButton
      }), _react2.default.createElement(_FlatButton2.default, {
        label: dialogStatus === 1 ? 'Save' : 'Add',
        primary: true, keyboardFocused: true,
        onTouchTap: this.save,
        labelStyle: _styles2.default.buttonLabel,
        style: _styles2.default.flatButton
      })];
      if (dialogStatus === 1) {
        actions.splice(1, 0, _react2.default.createElement(_FlatButton2.default, {
          label: 'Remove',
          primary: true,
          onTouchTap: onRemove,
          labelStyle: _styles2.default.buttonLabel,
          style: _styles2.default.flatButton
        }));
      }

      return _react2.default.createElement(
        _Dialog2.default,
        {
          title: dialogStatus === 1 ? 'Edit template' : 'Add new template',
          actions: actions,
          modal: false,
          open: !!dialogStatus,
          onRequestClose: onClose,
          titleStyle: _styles2.default.dialogTitle,
          autoScrollBodyContent: true
        },
        _react2.default.createElement(_TextField2.default, {
          id: 'name',
          floatingLabelText: 'Template name',
          defaultValue: name,
          fullWidth: true,
          inputStyle: _styles2.default.input,
          onChange: this.handleInputChange
        }),
        _react2.default.createElement(_TextField2.default, {
          id: 'dispatcher',
          rows: 2,
          rowsMax: 2,
          floatingLabelText: 'Dispatcher template',
          hintText: '({ action, prevState }) => (`<template>`)',
          hintStyle: _styles2.default.hint,
          inputStyle: _styles2.default.input,
          defaultValue: dispatcher,
          multiLine: true, fullWidth: true,
          onChange: this.handleInputChange
        }),
        _react2.default.createElement(_TextField2.default, {
          id: 'assertion',
          rows: 2,
          rowsMax: 2,
          floatingLabelText: 'Assertion template',
          hintText: '({ curState }) => (`<template>`)',
          hintStyle: _styles2.default.hint,
          inputStyle: _styles2.default.input,
          defaultValue: assertion,
          multiLine: true, fullWidth: true,
          onChange: this.handleInputChange
        }),
        _react2.default.createElement(_TextField2.default, {
          id: 'wrap',
          rows: 5,
          rowsMax: 5,
          floatingLabelText: 'Wrapping template',
          hintText: '({ name, initialState, assertions }) => (`<template>`)',
          hintStyle: _styles2.default.hint,
          inputStyle: _styles2.default.input,
          defaultValue: wrap,
          multiLine: true, fullWidth: true,
          onChange: this.handleInputChange
        })
      );
    }
  }]);

  return TestForm;
}(_react.Component);

exports.default = TestForm;


TestForm.propTypes = {
  dialogStatus: _react.PropTypes.number,
  template: _react.PropTypes.object,
  onSave: _react.PropTypes.func,
  onRemove: _react.PropTypes.func,
  onClose: _react.PropTypes.func
};
module.exports = exports['default'];