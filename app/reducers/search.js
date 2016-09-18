import { SEARCH } from '../actions/';
import _ from 'lodash';

const initialState = {
  searchItems: [],
  checkItems: []
};

export default function search(state = initialState, action) {
  switch (action.type) {
    case SEARCH.START_SEARCH:
      return state;
    case SEARCH.SUCCESS_SEARCH:
      return handleSearchItem(state, action.items);
    case SEARCH.FAIL_SEARCH:
      return state;
    case SEARCH.CHECK_ITEM:
      return checkItem(state, action.item)
    case SEARCH.UNCHECK_ITEM:
      return uncheckItem(state, action.item)
    default:
      return state;
  }
}

function handleSearchItem(state, searchItems) {
  return _.assign({}, state, {
    searchItems: searchItems,
  });
}

function checkItem(state, checkItem) {
  return _.assign({}, state, {
    checkItems: [...state.checkItems, checkItem],
  });
}

function uncheckItem(state, uncheckItem) {
  return _.assign({}, state, {
    checkItems: state.checkItems.filter((item) => {
      return item.id.videoId !== uncheckItem.id.videoId;
    })
  });
}
