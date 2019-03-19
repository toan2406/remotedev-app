'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.getFromStorage = getFromStorage;
exports.saveToStorage = saveToStorage;
exports.saveObjToStorage = saveObjToStorage;
exports.getSocketSettings = getSocketSettings;
exports.getMonitorSettings = getMonitorSettings;
exports.getTestTemplates = getTestTemplates;
exports.getTemplatesSelected = getTemplatesSelected;

var _chromeStorageLocal = require('chrome-storage-local');

var _chromeStorageLocal2 = _interopRequireDefault(_chromeStorageLocal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getFromStorage(key) {
  if (_chromeStorageLocal2.default.isChromeStorage) return null;
  return _chromeStorageLocal2.default.getItem(key);
}

function saveToStorage(key, value, remove) {
  if (remove) {
    _chromeStorageLocal2.default.removeItem(key);
    return null;
  }

  var sValue = value;
  if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && !_chromeStorageLocal2.default.isChromeStorage) {
    sValue = JSON.stringify(value);
  }
  _chromeStorageLocal2.default.setItem(key, sValue);
  return value;
}

function saveObjToStorage(remove, obj) {
  if (remove) {
    Object.keys(obj).forEach(function (key) {
      _chromeStorageLocal2.default.removeItem('s:' + key);
    });
    return null;
  }

  Object.keys(obj).forEach(function (key) {
    _chromeStorageLocal2.default.setItem('s:' + key, obj[key]);
    obj[key] = obj[key];
  });
  return obj;
}

function getSocketSettings() {
  if (_chromeStorageLocal2.default.isChromeStorage) return undefined;
  var hostname = _chromeStorageLocal2.default.getItem('s:hostname');
  var port = _chromeStorageLocal2.default.getItem('s:port');
  var secure = _chromeStorageLocal2.default.getItem('s:secure');
  secure = secure === 'true';
  if (hostname && port) return { hostname: hostname, port: Number(port), secure: secure };
}

function getMonitorSettings() {
  if (_chromeStorageLocal2.default.isChromeStorage) return undefined;
  return {
    selected: _chromeStorageLocal2.default.getItem('monitor') || 'InspectorMonitor',
    sliderIsOpen: _chromeStorageLocal2.default.getItem('slider') === 'true',
    dispatcherIsOpen: _chromeStorageLocal2.default.getItem('dispatcher') === 'true'
  };
}

function getTestTemplates() {
  var templates = getFromStorage('test-templates');
  return templates && JSON.parse(templates);
}

function getTemplatesSelected() {
  return Number(getFromStorage('test-templates-sel')) || 0;
}