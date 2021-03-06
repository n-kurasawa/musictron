import { SEARCH } from '../actions/';
import _ from 'lodash';

const initialState = {
  searchedItems: []
};

export default function search(state = initialState, action) {
  switch (action.type) {
    case SEARCH.START_SEARCH:
      return state;
    case SEARCH.SUCCESS_SEARCH:
      return handleSearchItem(state, action.items);
    case SEARCH.FAIL_SEARCH:
      return state;
    default:
      return state;
  }
}

function handleSearchItem(state, searchedItems) {
  return _.assign({}, state, {
    searchedItems
  });
}
