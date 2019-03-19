'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _actionTypes = require('../constants/actionTypes');

var _socketActionTypes = require('../constants/socketActionTypes');

var _localStorage = require('../utils/localStorage');

var persist = function persist() {
  var suffix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return function (store) {
    return function (next) {
      return function (action) {
        var result = next(action);
        switch (action.type) {// eslint-disable-line default-case
          case _socketActionTypes.RECONNECT:
            if (action.options) (0, _localStorage.saveObjToStorage)(!action.isCustom, action.options);
            break;
          case _actionTypes.SELECT_MONITOR:
            (0, _localStorage.saveToStorage)('monitor' + suffix, action.monitor);
            break;
          case _actionTypes.TOGGLE_SLIDER:
            (0, _localStorage.saveToStorage)('slider' + suffix, true, !store.getState().monitor.sliderIsOpen);
            break;
          case _actionTypes.TOGGLE_DISPATCHER:
            (0, _localStorage.saveToStorage)('dispatcher' + suffix, true, !store.getState().monitor.dispatcherIsOpen);
            break;
          case _actionTypes.TEST_SELECT:
            (0, _localStorage.saveToStorage)('test-templates-sel', action.selected);
            break;
          case _actionTypes.TEST_ADD:
          case _actionTypes.TEST_EDIT:
          case _actionTypes.TEST_REMOVE:
            var testsTemplates = store.getState().test.templates;
            (0, _localStorage.saveToStorage)('test-templates', testsTemplates, !testsTemplates);
            (0, _localStorage.saveToStorage)('test-templates-sel', action.selected);
            break;
        }
        return result;
      };
    };
  };
};

exports.default = persist;
module.exports = exports['default'];