import { SUBMIT_MOCK } from '../constants/actionTypes';

export const DEFAULT_MOCK_DATA = [];

const initialState = {
  data: DEFAULT_MOCK_DATA,
};

export default function mock(state = initialState, action) {
  if (action.type === SUBMIT_MOCK) {
    return { data: action.payload };
  } else {
    return state;
  }
}
