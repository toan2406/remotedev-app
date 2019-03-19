'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.default = bfs;

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var ROOT_KEY = '_root_';

function bfs(object, target) {
  var queue = [];

  queue.push([[ROOT_KEY, object]]);

  while (queue.length) {
    var path = queue.shift();
    var lastStep = last(path);

    var _lastStep = _slicedToArray(lastStep, 2),
        stepName = _lastStep[0],
        stepValue = _lastStep[1];

    if (stepName.toLowerCase() === target.toLowerCase()) return path.map(function (step) {
      return step[0];
    });

    if (isObject(stepValue) || isArray(stepValue)) {
      for (var key in stepValue) {
        if (stepValue.hasOwnProperty(key)) {
          var nextStep = [key, stepValue[key]];
          var nextPath = [].concat(_toConsumableArray(path), [nextStep]);
          queue.push(nextPath);
        }
      }
    }
  }

  return [];
}

var last = function last(array) {
  return array[array.length - 1];
};

var isObject = function isObject(value) {
  return (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object';
};

var isArray = Array.isArray;
module.exports = exports['default'];