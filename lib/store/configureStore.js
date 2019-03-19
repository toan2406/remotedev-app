'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = configureStore;

var _redux = require('redux');

var _api = require('../middlewares/api');

var _api2 = _interopRequireDefault(_api);

var _persist = require('../middlewares/persist');

var _persist2 = _interopRequireDefault(_persist);

var _exportState = require('../middlewares/exportState');

var _exportState2 = _interopRequireDefault(_exportState);

var _reducers = require('../reducers');

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function configureStore(preloadedState) {
  var enhancer = void 0;
  var middlewares = (0, _redux.applyMiddleware)(_exportState2.default, _api2.default, (0, _persist2.default)());
  if (process.env.NODE_ENV === 'production') {
    enhancer = middlewares;
  } else {
    enhancer = (0, _redux.compose)(middlewares, window.devToolsExtension ? window.devToolsExtension() : function (noop) {
      return noop;
    });
  }
  var store = (0, _redux.createStore)(_reducers2.default, preloadedState, enhancer);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', function () {
      var nextReducer = require('../reducers');
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
module.exports = exports['default'];