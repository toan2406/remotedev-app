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

var _fileUpload = require('react-icons/lib/md/file-upload');

var _fileUpload2 = _interopRequireDefault(_fileUpload);

var _Button = require('../Button');

var _Button2 = _interopRequireDefault(_Button);

var _actions = require('../../actions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ImportButton = (_temp = _class = function (_Component) {
  _inherits(ImportButton, _Component);

  function ImportButton() {
    _classCallCheck(this, ImportButton);

    var _this = _possibleConstructorReturn(this, (ImportButton.__proto__ || Object.getPrototypeOf(ImportButton)).call(this));

    _this.handleImport = _this.handleImport.bind(_this);
    _this.handleImportFile = _this.handleImportFile.bind(_this);
    _this.mapRef = _this.mapRef.bind(_this);
    return _this;
  }

  _createClass(ImportButton, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate() {
      return false;
    }
  }, {
    key: 'mapRef',
    value: function mapRef(node) {
      this.fileInput = node;
    }
  }, {
    key: 'handleImport',
    value: function handleImport() {
      this.fileInput.click();
    }
  }, {
    key: 'handleImportFile',
    value: function handleImportFile(e) {
      var _this2 = this;

      var file = e.target.files[0];
      var reader = new FileReader();
      reader.onload = function () {
        _this2.props.importState(reader.result);
      };
      reader.readAsText(file);
      e.target.value = '';
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _Button2.default,
        { Icon: _fileUpload2.default, onClick: this.handleImport },
        'Import',
        _react2.default.createElement('input', {
          type: 'file', ref: this.mapRef, style: { display: 'none' },
          onChange: this.handleImportFile
        })
      );
    }
  }]);

  return ImportButton;
}(_react.Component), _class.propTypes = {
  importState: _react.PropTypes.func.isRequired,
  showNotification: _react.PropTypes.func.isRequired
}, _temp);


function mapDispatchToProps(dispatch) {
  return {
    importState: (0, _redux.bindActionCreators)(_actions.importState, dispatch),
    showNotification: (0, _redux.bindActionCreators)(_actions.showNotification, dispatch)
  };
}

exports.default = (0, _reactRedux.connect)(null, mapDispatchToProps)(ImportButton);
module.exports = exports['default'];