'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.liftedDispatch = liftedDispatch;
exports.selectInstance = selectInstance;
exports.selectMonitor = selectMonitor;
exports.selectMonitorWithState = selectMonitorWithState;
exports.selectMonitorTab = selectMonitorTab;
exports.updateMonitorState = updateMonitorState;
exports.importState = importState;
exports.exportState = exportState;
exports.lockChanges = lockChanges;
exports.pauseRecording = pauseRecording;
exports.dispatchRemotely = dispatchRemotely;
exports.toggleSync = toggleSync;
exports.toggleSlider = toggleSlider;
exports.toggleDispatcher = toggleDispatcher;
exports.saveSocketSettings = saveSocketSettings;
exports.showNotification = showNotification;
exports.clearNotification = clearNotification;
exports.getReport = getReport;

var _actionTypes = require('../constants/actionTypes');

var _socketActionTypes = require('../constants/socketActionTypes');

var monitorReducer = void 0;
var monitorProps = {};

function liftedDispatch(action) {
  if (action.type[0] === '@') {
    if (action.type === '@@INIT_MONITOR') {
      monitorReducer = action.update;
      monitorProps = action.monitorProps;
    }
    return { type: _actionTypes.MONITOR_ACTION, action: action, monitorReducer: monitorReducer, monitorProps: monitorProps };
  }
  return { type: _actionTypes.LIFTED_ACTION, message: 'DISPATCH', action: action };
}

function selectInstance(event, index, selected) {
  return { type: _actionTypes.SELECT_INSTANCE, selected: selected };
}

function selectMonitor(event, index, value, nextMonitorState) {
  return { type: _actionTypes.SELECT_MONITOR, monitor: value, nextMonitorState: nextMonitorState };
}

function selectMonitorWithState(value, monitorState) {
  return { type: _actionTypes.SELECT_MONITOR, monitor: value, monitorState: monitorState };
}

function selectMonitorTab(subTabName) {
  return { type: _actionTypes.UPDATE_MONITOR_STATE, nextState: { subTabName: subTabName } };
}

function updateMonitorState(nextState) {
  return { type: _actionTypes.UPDATE_MONITOR_STATE, nextState: nextState };
}

function importState(state, preloadedState) {
  return { type: _actionTypes.LIFTED_ACTION, message: 'IMPORT', state: state, preloadedState: preloadedState };
}

function exportState() {
  return { type: _actionTypes.EXPORT };
}

function lockChanges(status) {
  return {
    type: _actionTypes.LIFTED_ACTION,
    message: 'DISPATCH',
    action: { type: 'LOCK_CHANGES', status: status },
    toAll: true
  };
}

function pauseRecording(status) {
  return {
    type: _actionTypes.LIFTED_ACTION,
    message: 'DISPATCH',
    action: { type: 'PAUSE_RECORDING', status: status },
    toAll: true
  };
}

function dispatchRemotely(action) {
  return { type: _actionTypes.LIFTED_ACTION, message: 'ACTION', action: action };
}

function toggleSync() {
  return { type: _actionTypes.TOGGLE_SYNC };
}

function toggleSlider() {
  return { type: _actionTypes.TOGGLE_SLIDER };
}

function toggleDispatcher() {
  return { type: _actionTypes.TOGGLE_DISPATCHER };
}

function saveSocketSettings(isCustom, options) {
  return { type: _socketActionTypes.RECONNECT, isCustom: isCustom, options: options };
}

function showNotification(message) {
  return { type: _actionTypes.SHOW_NOTIFICATION, notification: { type: 'ERROR', message: message } };
}

function clearNotification() {
  return { type: _actionTypes.CLEAR_NOTIFICATION };
}

function getReport(report) {
  return { type: _actionTypes.GET_REPORT_REQUEST, report: report };
}