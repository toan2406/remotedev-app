"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = commitExcessActions;

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

// Based on https://github.com/gaearon/redux-devtools/pull/241

function commitExcessActions(liftedState) {
  var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

  // Auto-commits n-number of excess actions.
  var excess = n;
  var idsToDelete = liftedState.stagedActionIds.slice(1, excess + 1);

  for (var i = 0; i < idsToDelete.length; i++) {
    if (liftedState.computedStates[i + 1].error) {
      // Stop if error is found. Commit actions up to error.
      excess = i;
      idsToDelete = liftedState.stagedActionIds.slice(1, excess + 1);
      break;
    } else {
      delete liftedState.actionsById[idsToDelete[i]];
    }
  }

  liftedState.skippedActionIds = liftedState.skippedActionIds.filter(function (id) {
    return idsToDelete.indexOf(id) === -1;
  });
  liftedState.stagedActionIds = [0].concat(_toConsumableArray(liftedState.stagedActionIds.slice(excess + 1)));
  liftedState.committedState = liftedState.computedStates[excess].state;
  liftedState.computedStates = liftedState.computedStates.slice(excess);
  liftedState.currentStateIndex = liftedState.currentStateIndex > excess ? liftedState.currentStateIndex - excess : 0;
}
module.exports = exports["default"];