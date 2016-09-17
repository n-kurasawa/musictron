import { SEARCH } from '../actions/';

const initialState = [];

export default function search(state = initialState, action) {
  switch (action.type) {
    case SEARCH.START_SEARCH:
      return state;
    case SEARCH.SUCCESS_SEARCH:
      return action.items;
    case SEARCH.FAIL_SEARCH:
      return state;
    default:
      return state;
  }
}
