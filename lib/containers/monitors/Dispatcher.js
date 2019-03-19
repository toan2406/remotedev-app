'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp; // Based on https://github.com/YoruNoHikage/redux-devtools-dispatch

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reduxDevtoolsThemes = require('redux-devtools-themes');

var themes = _interopRequireWildcard(_reduxDevtoolsThemes);

var _redux = require('redux');

var _reactRedux = require('react-redux');

var _actions = require('../../actions');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  button: {
    cursor: 'pointer',
    fontWeight: 'bold',
    borderRadius: '3px',
    padding: '3px',
    margin: '5px',
    fontSize: '0.8em',
    textDecoration: 'none',
    border: 'none'
  },
  content: {
    margin: '5px',
    padding: '5px',
    borderRadius: '3px',
    outline: 'none',
    flex: '1 1 80%',
    overflow: 'auto'
  },
  label: {
    margin: '5px',
    padding: '5px',
    flex: '1 1 20%',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    direction: 'rtl',
    textAlign: 'left'
  }
};

var Dispatcher = (_temp = _class = function (_Component) {
  _inherits(Dispatcher, _Component);

  function Dispatcher(props, context) {
    _classCallCheck(this, Dispatcher);

    var _this = _possibleConstructorReturn(this, (Dispatcher.__proto__ || Object.getPrototypeOf(Dispatcher)).call(this, props, context));

    _this.state = {
      selected: 'default',
      args: []
    };
    return _this;
  }

  _createClass(Dispatcher, [{
    key: 'selectActionCreator',
    value: function selectActionCreator(e) {
      var selected = e.target.value;
      var args = [];
      if (selected !== 'default') {
        // Shrink the number args to the number of the new ones
        args = this.state.args.slice(0, this.props.options.actionCreators[selected].args.length);
      }
      this.setState({
        selected: selected,
        args: args
      });
    }
  }, {
    key: 'handleArg',
    value: function handleArg(e, argIndex) {
      var value = this.refs['arg' + argIndex].textContent.trim();
      if (value === '') value = undefined;
      var args = [].concat(_toConsumableArray(this.state.args.slice(0, argIndex)), [value], _toConsumableArray(this.state.args.slice(argIndex + 1)));
      this.setState({ args: args });
    }
  }, {
    key: 'launchAction',
    value: function launchAction() {
      if (this.state.selected !== 'default') {
        var rest = this.refs.restArgs.textContent.trim();
        if (rest === '') rest = undefined;
        var _state = this.state,
            selected = _state.selected,
            args = _state.args;

        this.props.dispatch({
          name: this.props.options.actionCreators[selected].name,
          selected: selected, args: args, rest: rest
        });
      } else {
        if (this.refs.action.textContent !== '') {
          this.props.dispatch(this.refs.action.textContent);
        }
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.resetCustomAction();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      if (this.state.selected === 'default' && prevState.selected !== 'default') {
        this.resetCustomAction();
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (this.state.selected !== 'default' && !nextProps.options.actionCreators) {
        this.setState({
          selected: 'default',
          args: []
        });
      }
    }
  }, {
    key: 'resetCustomAction',
    value: function resetCustomAction() {
      this.refs.action.innerHTML = this.props.options.lib === 'redux' ? '{<br/>type: \'\'<br/>}' : 'this.';
    }
  }, {
    key: 'getTheme',
    value: function getTheme() {
      var theme = this.props.theme;

      if (typeof theme !== 'string') {
        return theme;
      }

      if (typeof themes[theme] !== 'undefined') {
        return themes[theme];
      }

      console.warn('DevTools theme ' + theme + ' not found, defaulting to nicinabox');
      return themes.nicinabox;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var theme = this.getTheme();
      var contentEditableStyle = _extends({}, styles.content, { color: theme.base06, backgroundColor: theme.base00
      });
      var buttonStyle = _extends({}, styles.button, { color: theme.base06, backgroundColor: theme.base00
      });
      var actionCreators = this.props.options.actionCreators;

      var fields = _react2.default.createElement('div', { contentEditable: true, style: contentEditableStyle, ref: 'action' });
      if (this.state.selected !== 'default' && actionCreators) {
        (function () {
          var fieldStyles = _extends({}, styles.label, { color: theme.base06 });
          fields = actionCreators[_this2.state.selected].args.map(function (param, i) {
            return _react2.default.createElement(
              'div',
              { key: i, style: { display: 'flex' } },
              _react2.default.createElement(
                'span',
                { style: fieldStyles },
                param
              ),
              _react2.default.createElement('div', {
                contentEditable: true, style: contentEditableStyle, ref: 'arg' + i,
                onInput: function onInput(e) {
                  return _this2.handleArg(e, i);
                }
              })
            );
          });
          fields.push(_react2.default.createElement(
            'div',
            { key: 'action', style: { display: 'flex' } },
            _react2.default.createElement(
              'span',
              { style: fieldStyles },
              'args...'
            ),
            _react2.default.createElement('div', { contentEditable: true, style: contentEditableStyle, ref: 'restArgs' })
          ));
        })();
      }

      var dispatchButtonStyle = buttonStyle;
      if (!actionCreators || actionCreators.length <= 0) {
        dispatchButtonStyle = _extends({}, buttonStyle, {
          position: 'absolute',
          bottom: '3px',
          right: '5px',
          background: theme.base02
        });
      }

      var dispatchButton = _react2.default.createElement(
        'button',
        { style: dispatchButtonStyle, onClick: this.launchAction.bind(this) },
        'Dispatch'
      );

      return _react2.default.createElement(
        'div',
        {
          style: {
            background: theme.base02,
            fontFamily: 'monaco,Consolas,Lucida Console,monospace',
            position: 'relative'
          }
        },
        fields,
        actionCreators && actionCreators.length > 0 ? _react2.default.createElement(
          'div',
          { style: { display: 'flex' } },
          _react2.default.createElement(
            'select',
            {
              onChange: this.selectActionCreator.bind(this),
              style: { flex: '1', margin: '5px 0 0 5px', height: '1.5em' },
              defaultValue: this.state.selected || 'default'
            },
            _react2.default.createElement(
              'option',
              { value: 'default' },
              'Custom action'
            ),
            actionCreators.map(function (_ref, i) {
              var name = _ref.name,
                  func = _ref.func,
                  args = _ref.args;
              return _react2.default.createElement(
                'option',
                { key: i, value: i },
                name + '(' + args.join(', ') + ')'
              );
            })
          ),
          dispatchButton
        ) : dispatchButton
      );
    }
  }]);

  return Dispatcher;
}(_react.Component), _class.propTypes = {
  options: _react.PropTypes.object.isRequired,
  dispatch: _react.PropTypes.func.isRequired,
  theme: _react.PropTypes.oneOfType([_react.PropTypes.object, _react.PropTypes.string])
}, _class.defaultProps = {
  theme: 'nicinabox'
}, _temp);


function mapDispatchToProps(dispatch) {
  return {
    dispatch: (0, _redux.bindActionCreators)(_actions.dispatchRemotely, dispatch)
  };
}

exports.default = (0, _reactRedux.connect)(null, mapDispatchToProps)(Dispatcher);
module.exports = exports['default'];