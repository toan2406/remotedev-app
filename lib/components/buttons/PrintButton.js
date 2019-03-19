'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _print = require('react-icons/lib/md/print');

var _print2 = _interopRequireDefault(_print);

var _Button = require('../Button');

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PrintButton = function (_Component) {
  _inherits(PrintButton, _Component);

  function PrintButton() {
    _classCallCheck(this, PrintButton);

    return _possibleConstructorReturn(this, (PrintButton.__proto__ || Object.getPrototypeOf(PrintButton)).apply(this, arguments));
  }

  _createClass(PrintButton, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate() {
      return false;
    }
  }, {
    key: 'handlePrint',
    value: function handlePrint() {
      var d3svg = document.getElementById('d3svg');
      if (!d3svg) {
        window.print();
        return;
      }

      var initHeight = d3svg.style.height;
      var initWidth = d3svg.style.width;
      var box = d3svg.getBBox();
      d3svg.style.height = box.height;
      d3svg.style.width = box.width;

      var g = d3svg.firstChild;
      var initTransform = g.getAttribute('transform');
      g.setAttribute('transform', initTransform.replace(/.+scale\(/, 'translate(57, 10) scale('));

      window.print();

      d3svg.style.height = initHeight;
      d3svg.style.width = initWidth;
      g.setAttribute('transform', initTransform);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _Button2.default,
        { Icon: _print2.default, onClick: this.handlePrint },
        'Print'
      );
    }
  }]);

  return PrintButton;
}(_react.Component);

exports.default = PrintButton;
module.exports = exports['default'];