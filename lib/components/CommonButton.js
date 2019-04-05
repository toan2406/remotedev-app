'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  max-width: 200px;\n  padding: 5px 10px;\n  margin: 0;\n  margin-right: 10px;\n  border: solid thin rgba(190, 190, 190, 0.5);\n  font-size: 12px;\n  color: white;\n  background: transparent;\n  border-radius: 3px;\n  cursor: pointer;\n  outline: none;\n\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n\n  &:hover {\n    background: rgba(190, 190, 190, 0.2);\n  }\n\n  ', '\n'], ['\n  max-width: 200px;\n  padding: 5px 10px;\n  margin: 0;\n  margin-right: 10px;\n  border: solid thin rgba(190, 190, 190, 0.5);\n  font-size: 12px;\n  color: white;\n  background: transparent;\n  border-radius: 3px;\n  cursor: pointer;\n  outline: none;\n\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n\n  &:hover {\n    background: rgba(190, 190, 190, 0.2);\n  }\n\n  ', '\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var disabledStyle = '\n  opacity: 0.5;\n  pointer-events: none;\n';

var Button = _styledComponents2.default.button(_templateObject, function (_ref) {
  var disabled = _ref.disabled;
  return disabled ? disabledStyle : '';
});

exports.default = Button;
module.exports = exports['default'];