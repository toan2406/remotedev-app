'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stringifyJSON = require('../utils/stringifyJSON');

var _stringifyJSON2 = _interopRequireDefault(_stringifyJSON);

var _actionTypes = require('../constants/actionTypes');

var _instances = require('../reducers/instances');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var toExport = void 0;

function download(state) {
  var blob = new Blob([state], { type: 'octet/stream' });
  var href = window.URL.createObjectURL(blob);
  var a = document.createElement('a');
  a.style = 'display: none';
  a.download = 'state.json';
  a.href = href;
  document.body.appendChild(a);
  a.click();
  setTimeout(function () {
    document.body.removeChild(a);
    window.URL.revokeObjectURL(href);
  }, 0);
}

var exportState = function exportState(store) {
  return function (next) {
    return function (action) {
      var result = next(action);

      if (toExport && action.type === _actionTypes.UPDATE_STATE && action.request.type === 'EXPORT') {
        var request = action.request;
        var id = request.instanceId || request.id;
        if (id === toExport) {
          toExport = undefined;
          download(JSON.stringify({
            payload: request.payload, preloadedState: request.committedState
          }, null, '\t'));
        }
      } else if (action.type === _actionTypes.EXPORT) {
        var instances = store.getState().instances;
        var instanceId = (0, _instances.getActiveInstance)(instances);
        var options = instances.options[instanceId];
        if (options.features.export === true) {
          download((0, _stringifyJSON2.default)(instances.states[instanceId], options.serialize));
        } else {
          toExport = instanceId;
          next({ type: _actionTypes.LIFTED_ACTION, message: 'EXPORT', toExport: true });
        }
      }
      return result;
    };
  };
};

exports.default = exportState;
module.exports = exports['default'];