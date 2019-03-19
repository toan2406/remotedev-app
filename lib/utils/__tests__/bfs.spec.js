'use strict';

var _bfs = require('../bfs');

var _bfs2 = _interopRequireDefault(_bfs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Breadth-first search', function () {
  it('should work properly', function () {
    var tree = {
      api_calls: {
        FETCH_PERMISSION: {
          isPending: false,
          payload: {
            data: {
              dashboard: true,
              settings: true,
              admin: false
            }
          }
        },
        FETCH_STAFFS: {
          isPending: false,
          payload: {
            data: [{
              id: 1,
              name: 'Toan'
            }, {
              id: 2,
              name: 'Vu'
            }, {
              id: 3,
              name: 'Minh'
            }]
          }
        }
      },
      navigation: {
        current: 0,
        routes: [{
          key: 'login'
        }, {
          key: 'dashboard',
          current: 0,
          routes: []
        }]
      }
    };

    expect((0, _bfs2.default)(tree, 'FETCH_STAFFS')).toEqual(['_root_', 'api_calls', 'FETCH_STAFFS']);

    expect((0, _bfs2.default)(tree, 'id')).toEqual(['_root_', 'api_calls', 'FETCH_STAFFS', 'payload', 'data', '0', 'id']);

    expect((0, _bfs2.default)(tree, 'foo')).toEqual([]);
  });
});