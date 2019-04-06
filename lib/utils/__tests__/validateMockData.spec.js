'use strict';

var _validateMockData = require('../validateMockData');

var _validateMockData2 = _interopRequireDefault(_validateMockData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Validate mock data', function () {
  it('should work properly', function () {
    expect((0, _validateMockData2.default)([])).toBe(true);
    expect((0, _validateMockData2.default)([{}])).toBe(false);
    expect((0, _validateMockData2.default)([[]])).toBe(false);
    expect((0, _validateMockData2.default)([[{}]])).toBe(false);
    expect((0, _validateMockData2.default)([[{}, {}]])).toBe(true);
  });
});