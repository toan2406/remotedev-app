import { SUBMIT_MOCK } from '../constants/actionTypes';

const initialState = {
  data: [[{}, {}]],
};

export default function mock(state = initialState, action) {
  if (action.type === SUBMIT_MOCK) {
    return { data: action.payload };
  } else {
    return state;
  }
}
