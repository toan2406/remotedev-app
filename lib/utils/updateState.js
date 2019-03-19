'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.recompute = recompute;

var _commitExcessActions = require('./commitExcessActions');

var _commitExcessActions2 = _interopRequireDefault(_commitExcessActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function recompute(previousLiftedState, storeState, action) {
  var nextActionId = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
  var maxAge = arguments[4];
  var isExcess = arguments[5];

  var actionId = nextActionId - 1;
  var liftedState = _extends({}, previousLiftedState);

  if (liftedState.currentStateIndex === liftedState.stagedActionIds.length - 1) {
    liftedState.currentStateIndex++;
  }
  liftedState.stagedActionIds = [].concat(_toConsumableArray(liftedState.stagedActionIds), [actionId]);
  liftedState.actionsById = _extends({}, liftedState.actionsById);
  if (action.type === 'PERFORM_ACTION') {
    liftedState.actionsById[actionId] = action;
  } else {
    liftedState.actionsById[actionId] = {
      action: action.action || action,
      timestamp: action.timestamp || Date.now(),
      stack: action.stack,
      type: 'PERFORM_ACTION'
    };
  }
  liftedState.nextActionId = nextActionId;
  liftedState.computedStates = [].concat(_toConsumableArray(liftedState.computedStates), [{ state: storeState }]);

  if (isExcess) (0, _commitExcessActions2.default)(liftedState);else if (maxAge) {
    var excess = liftedState.stagedActionIds.length - maxAge;
    if (excess > 0) (0, _commitExcessActions2.default)(liftedState, excess);
  }

  return liftedState;
}