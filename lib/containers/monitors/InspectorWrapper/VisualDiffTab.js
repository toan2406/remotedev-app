'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.StyledContainer = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  .jsondiffpatch-delta {\n    font-family: monaco, Consolas, "Lucida Console", monospace;\n    font-size: 12px;\n    padding: 12px;\n    margin: 0;\n    display: inline-block;\n  }\n\n  .jsondiffpatch-delta pre {\n    font-family: monaco, Consolas, "Lucida Console", monospace;\n    font-size: 12px;\n    margin: 0;\n    padding: 2px 3px;\n    border-radius: 3px;\n    position: relative;\n    color: #FFFFFF;\n    display: inline-block;\n  }\n\n  ul.jsondiffpatch-delta {\n    list-style-type: none;\n    padding: 0 0 0 20px;\n    margin: 0;\n  }\n\n  .jsondiffpatch-delta ul {\n    list-style-type: none;\n    padding: 0 0 0 20px;\n    margin: 0;\n  }\n\n  .jsondiffpatch-left-value, .jsondiffpatch-right-value {\n    vertical-align: top;\n  }\n\n  .jsondiffpatch-modified .jsondiffpatch-right-value:before {\n    vertical-align: top;\n    padding: 2px;\n    color: #D381C3;\n    content: \' => \';\n  }\n\n  .jsondiffpatch-added .jsondiffpatch-value pre,\n  .jsondiffpatch-modified .jsondiffpatch-right-value pre,\n  .jsondiffpatch-textdiff-added {\n    background: rgba(161, 198 ,89, 0.4);\n  }\n\n  .jsondiffpatch-deleted pre,\n  .jsondiffpatch-modified .jsondiffpatch-left-value pre,\n  .jsondiffpatch-textdiff-deleted {\n    background: rgba(251, 159 ,177, 0.4);\n    text-decoration: line-through;\n  }\n\n  .jsondiffpatch-unchanged,\n  .jsondiffpatch-movedestination {\n    color: gray;\n  }\n\n  .jsondiffpatch-unchanged,\n  .jsondiffpatch-movedestination > .jsondiffpatch-value {\n    transition: all 0.5s;\n    -webkit-transition: all 0.5s;\n    overflow-y: hidden;\n  }\n\n  .jsondiffpatch-unchanged-showing .jsondiffpatch-unchanged,\n  .jsondiffpatch-unchanged-showing .jsondiffpatch-movedestination > .jsondiffpatch-value {\n    max-height: 100px;\n  }\n\n  .jsondiffpatch-unchanged-hidden .jsondiffpatch-unchanged,\n  .jsondiffpatch-unchanged-hidden .jsondiffpatch-movedestination > .jsondiffpatch-value {\n    max-height: 0;\n  }\n\n  .jsondiffpatch-unchanged-hiding .jsondiffpatch-movedestination > .jsondiffpatch-value,\n  .jsondiffpatch-unchanged-hidden .jsondiffpatch-movedestination > .jsondiffpatch-value {\n    display: block;\n  }\n\n  .jsondiffpatch-unchanged-visible .jsondiffpatch-unchanged,\n  .jsondiffpatch-unchanged-visible .jsondiffpatch-movedestination > .jsondiffpatch-value {\n    max-height: 100px;\n  }\n\n  .jsondiffpatch-unchanged-hiding .jsondiffpatch-unchanged,\n  .jsondiffpatch-unchanged-hiding .jsondiffpatch-movedestination > .jsondiffpatch-value {\n    max-height: 0;\n  }\n\n  .jsondiffpatch-unchanged-showing .jsondiffpatch-arrow,\n  .jsondiffpatch-unchanged-hiding .jsondiffpatch-arrow {\n    display: none;\n  }\n\n  .jsondiffpatch-value {\n    display: inline-block;\n  }\n\n  .jsondiffpatch-property-name {\n    display: inline-block;\n    padding: 2px 0;\n    padding-right: 5px;\n    vertical-align: top;\n    color: rgb(111, 179, 210);\n  }\n\n  .jsondiffpatch-property-name:after {\n    content: \': \';\n    color: #FFFFFF;\n  }\n\n  .jsondiffpatch-child-node-type-array > .jsondiffpatch-property-name:after {\n    content: \': [\';\n  }\n\n  .jsondiffpatch-child-node-type-array:after {\n    content: \'],\';\n  }\n\n  div.jsondiffpatch-child-node-type-array:before {\n    content: \'[\';\n  }\n\n  div.jsondiffpatch-child-node-type-array:after {\n    content: \']\';\n  }\n\n  .jsondiffpatch-child-node-type-object > .jsondiffpatch-property-name:after {\n    content: \': {\';\n  }\n\n  .jsondiffpatch-child-node-type-object:after {\n    content: \'},\';\n  }\n\n  div.jsondiffpatch-child-node-type-object:before {\n    content: \'{\';\n  }\n\n  div.jsondiffpatch-child-node-type-object:after {\n    content: \'}\';\n  }\n\n  .jsondiffpatch-value pre:after {\n    color: #FFFFFF;\n    content: \',\';\n  }\n\n  li:last-child > .jsondiffpatch-value pre:after,\n  .jsondiffpatch-modified > .jsondiffpatch-left-value pre:after {\n    content: \'\';\n  }\n\n  .jsondiffpatch-modified .jsondiffpatch-value {\n    display: inline-block;\n  }\n\n  .jsondiffpatch-modified .jsondiffpatch-right-value {\n    margin-left: 5px;\n  }\n\n  .jsondiffpatch-moved .jsondiffpatch-value {\n    display: none;\n  }\n\n  .jsondiffpatch-moved .jsondiffpatch-moved-destination {\n    display: inline-block;\n    background: #ffffbb;\n    color: #888;\n  }\n\n  .jsondiffpatch-moved .jsondiffpatch-moved-destination:before {\n    content: \' => \';\n  }\n\n  ul.jsondiffpatch-textdiff {\n    padding: 0;\n  }\n\n  .jsondiffpatch-textdiff-location {\n    color: #bbb;\n    display: inline-block;\n    min-width: 60px;\n  }\n\n  .jsondiffpatch-textdiff-line {\n    display: inline-block;\n  }\n\n  .jsondiffpatch-textdiff-line-number:after {\n    color: #FFFFFF;\n    content: \',\';\n  }\n\n  .jsondiffpatch-error {\n    background: red;\n    color: white;\n    font-weight: bold;\n  }\n'], ['\n  .jsondiffpatch-delta {\n    font-family: monaco, Consolas, "Lucida Console", monospace;\n    font-size: 12px;\n    padding: 12px;\n    margin: 0;\n    display: inline-block;\n  }\n\n  .jsondiffpatch-delta pre {\n    font-family: monaco, Consolas, "Lucida Console", monospace;\n    font-size: 12px;\n    margin: 0;\n    padding: 2px 3px;\n    border-radius: 3px;\n    position: relative;\n    color: #FFFFFF;\n    display: inline-block;\n  }\n\n  ul.jsondiffpatch-delta {\n    list-style-type: none;\n    padding: 0 0 0 20px;\n    margin: 0;\n  }\n\n  .jsondiffpatch-delta ul {\n    list-style-type: none;\n    padding: 0 0 0 20px;\n    margin: 0;\n  }\n\n  .jsondiffpatch-left-value, .jsondiffpatch-right-value {\n    vertical-align: top;\n  }\n\n  .jsondiffpatch-modified .jsondiffpatch-right-value:before {\n    vertical-align: top;\n    padding: 2px;\n    color: #D381C3;\n    content: \' => \';\n  }\n\n  .jsondiffpatch-added .jsondiffpatch-value pre,\n  .jsondiffpatch-modified .jsondiffpatch-right-value pre,\n  .jsondiffpatch-textdiff-added {\n    background: rgba(161, 198 ,89, 0.4);\n  }\n\n  .jsondiffpatch-deleted pre,\n  .jsondiffpatch-modified .jsondiffpatch-left-value pre,\n  .jsondiffpatch-textdiff-deleted {\n    background: rgba(251, 159 ,177, 0.4);\n    text-decoration: line-through;\n  }\n\n  .jsondiffpatch-unchanged,\n  .jsondiffpatch-movedestination {\n    color: gray;\n  }\n\n  .jsondiffpatch-unchanged,\n  .jsondiffpatch-movedestination > .jsondiffpatch-value {\n    transition: all 0.5s;\n    -webkit-transition: all 0.5s;\n    overflow-y: hidden;\n  }\n\n  .jsondiffpatch-unchanged-showing .jsondiffpatch-unchanged,\n  .jsondiffpatch-unchanged-showing .jsondiffpatch-movedestination > .jsondiffpatch-value {\n    max-height: 100px;\n  }\n\n  .jsondiffpatch-unchanged-hidden .jsondiffpatch-unchanged,\n  .jsondiffpatch-unchanged-hidden .jsondiffpatch-movedestination > .jsondiffpatch-value {\n    max-height: 0;\n  }\n\n  .jsondiffpatch-unchanged-hiding .jsondiffpatch-movedestination > .jsondiffpatch-value,\n  .jsondiffpatch-unchanged-hidden .jsondiffpatch-movedestination > .jsondiffpatch-value {\n    display: block;\n  }\n\n  .jsondiffpatch-unchanged-visible .jsondiffpatch-unchanged,\n  .jsondiffpatch-unchanged-visible .jsondiffpatch-movedestination > .jsondiffpatch-value {\n    max-height: 100px;\n  }\n\n  .jsondiffpatch-unchanged-hiding .jsondiffpatch-unchanged,\n  .jsondiffpatch-unchanged-hiding .jsondiffpatch-movedestination > .jsondiffpatch-value {\n    max-height: 0;\n  }\n\n  .jsondiffpatch-unchanged-showing .jsondiffpatch-arrow,\n  .jsondiffpatch-unchanged-hiding .jsondiffpatch-arrow {\n    display: none;\n  }\n\n  .jsondiffpatch-value {\n    display: inline-block;\n  }\n\n  .jsondiffpatch-property-name {\n    display: inline-block;\n    padding: 2px 0;\n    padding-right: 5px;\n    vertical-align: top;\n    color: rgb(111, 179, 210);\n  }\n\n  .jsondiffpatch-property-name:after {\n    content: \': \';\n    color: #FFFFFF;\n  }\n\n  .jsondiffpatch-child-node-type-array > .jsondiffpatch-property-name:after {\n    content: \': [\';\n  }\n\n  .jsondiffpatch-child-node-type-array:after {\n    content: \'],\';\n  }\n\n  div.jsondiffpatch-child-node-type-array:before {\n    content: \'[\';\n  }\n\n  div.jsondiffpatch-child-node-type-array:after {\n    content: \']\';\n  }\n\n  .jsondiffpatch-child-node-type-object > .jsondiffpatch-property-name:after {\n    content: \': {\';\n  }\n\n  .jsondiffpatch-child-node-type-object:after {\n    content: \'},\';\n  }\n\n  div.jsondiffpatch-child-node-type-object:before {\n    content: \'{\';\n  }\n\n  div.jsondiffpatch-child-node-type-object:after {\n    content: \'}\';\n  }\n\n  .jsondiffpatch-value pre:after {\n    color: #FFFFFF;\n    content: \',\';\n  }\n\n  li:last-child > .jsondiffpatch-value pre:after,\n  .jsondiffpatch-modified > .jsondiffpatch-left-value pre:after {\n    content: \'\';\n  }\n\n  .jsondiffpatch-modified .jsondiffpatch-value {\n    display: inline-block;\n  }\n\n  .jsondiffpatch-modified .jsondiffpatch-right-value {\n    margin-left: 5px;\n  }\n\n  .jsondiffpatch-moved .jsondiffpatch-value {\n    display: none;\n  }\n\n  .jsondiffpatch-moved .jsondiffpatch-moved-destination {\n    display: inline-block;\n    background: #ffffbb;\n    color: #888;\n  }\n\n  .jsondiffpatch-moved .jsondiffpatch-moved-destination:before {\n    content: \' => \';\n  }\n\n  ul.jsondiffpatch-textdiff {\n    padding: 0;\n  }\n\n  .jsondiffpatch-textdiff-location {\n    color: #bbb;\n    display: inline-block;\n    min-width: 60px;\n  }\n\n  .jsondiffpatch-textdiff-line {\n    display: inline-block;\n  }\n\n  .jsondiffpatch-textdiff-line-number:after {\n    color: #FFFFFF;\n    content: \',\';\n  }\n\n  .jsondiffpatch-error {\n    background: red;\n    color: white;\n    font-weight: bold;\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _html = require('jsondiffpatch/src/formatters/html');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledContainer = exports.StyledContainer = _styledComponents2.default.div(_templateObject);

var VisualDiffTab = function (_Component) {
  _inherits(VisualDiffTab, _Component);

  function VisualDiffTab() {
    _classCallCheck(this, VisualDiffTab);

    return _possibleConstructorReturn(this, (VisualDiffTab.__proto__ || Object.getPrototypeOf(VisualDiffTab)).apply(this, arguments));
  }

  _createClass(VisualDiffTab, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      return this.props.data !== nextProps.data;
    }
  }, {
    key: 'render',
    value: function render() {
      var __html = void 0;
      var data = this.props.data;
      if (data) {
        __html = (0, _html.format)(data);
      }

      return _react2.default.createElement(StyledContainer, { dangerouslySetInnerHTML: { __html: __html } });
    }
  }]);

  return VisualDiffTab;
}(_react.Component);

exports.default = VisualDiffTab;


VisualDiffTab.propTypes = {
  data: _react.PropTypes.object
};