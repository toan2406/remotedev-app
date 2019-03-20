const API_CALL_TYPES = [
  '@@api/FETCH_START',
  '@@api/FETCH_COMPLETE',
  '@@api/FETCH_FAILURE',
  '@@api/UPDATE_LOCAL',
  '@@api/RESET_LOCAL',
];

export default action => {
  const debugType = API_CALL_TYPES.includes(action.type)
    ? `${action.type} (${action.payload.name})`
    : action.type;
  return {
    ...action,
    _type_: action.type,
    type: debugType,
  };
};
