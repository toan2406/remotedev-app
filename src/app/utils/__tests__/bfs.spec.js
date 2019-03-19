import bfs from '../bfs';

describe('Breadth-first search', () => {
  it('should work properly', () => {
    const tree = {
      api_calls: {
        FETCH_PERMISSION: {
          isPending: false,
          payload: {
            data: {
              dashboard: true,
              settings: true,
              admin: false,
            },
          },
        },
        FETCH_STAFFS: {
          isPending: false,
          payload: {
            data: [
              {
                id: 1,
                name: 'Toan',
              },
              {
                id: 2,
                name: 'Vu',
              },
              {
                id: 3,
                name: 'Minh',
              },
            ],
          },
        },
      },
      navigation: {
        current: 0,
        routes: [
          {
            key: 'login',
          },
          {
            key: 'dashboard',
            current: 0,
            routes: [],
          },
        ],
      },
    };

    expect(bfs(tree, 'FETCH_STAFFS')).toEqual([
      '_root_',
      'api_calls',
      'FETCH_STAFFS',
    ]);

    expect(bfs(tree, 'id')).toEqual([
      '_root_',
      'api_calls',
      'FETCH_STAFFS',
      'payload',
      'data',
      '0',
      'id',
    ]);

    expect(bfs(tree, 'foo')).toEqual([]);
  });
});
