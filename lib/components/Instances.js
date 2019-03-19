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

var _SelectField = require('material-ui/SelectField');

var _SelectField2 = _interopRequireDefault(_SelectField);

var _MenuItem = require('material-ui/MenuItem');

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _shallowCompare = require('react/lib/shallowCompare');

var _shallowCompare2 = _interopRequireDefault(_shallowCompare);

var _actions = require('../actions');

var _styles = require('../styles');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Instances = (_temp = _class = function (_Component) {
  _inherits(Instances, _Component);

  function Instances() {
    _classCallCheck(this, Instances);

    return _possibleConstructorReturn(this, (Instances.__proto__ || Object.getPrototypeOf(Instances)).apply(this, arguments));
  }

  _createClass(Instances, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      return (0, _shallowCompare2.default)(this, nextProps);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      this.select = [['Autoselect instances', null]];
      var instances = this.props.instances;
      var name = void 0;
      Object.keys(instances).forEach(function (key) {
        name = instances[key].name;
        if (name !== undefined) _this2.select.push([instances[key].name, key]);
      });

      return _react2.default.createElement(
        _SelectField2.default,
        {
          style: _styles2.default.select,
          labelStyle: _styles2.default.selectLabel,
          iconStyle: _styles2.default.selectIcon,
          onChange: this.props.onSelect,
          value: this.props.selected
        },
        this.select.map(function (option) {
          return _react2.default.createElement(_MenuItem2.default, { key: option[1], value: option[1], primaryText: option[0] });
        })
      );
    }
  }]);

  return Instances;
}(_react.Component), _class.propTypes = {
  selected: _react.PropTypes.string,
  instances: _react.PropTypes.object.isRequired,
  onSelect: _react.PropTypes.func.isRequired
}, _temp);


function mapStateToProps(state) {
  return {
    instances: state.instances.options
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onSelect: (0, _redux.bindActionCreators)(_actions.selectInstance, dispatch)
  };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Instances);
module.exports = exports['default'];