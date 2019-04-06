export default mock =>
  Array.isArray(mock) &&
  mock.every(actions => Array.isArray(actions) && actions.length > 1);
