import { SEARCH, PLAY } from '../actions/';
import _ from 'lodash';

const initialState = {
  searchedItems: [],
  cueItems: []
};

export default function app(state = initialState, action) {
  switch (action.type) {
    case SEARCH.START_SEARCH:
      return state;
    case SEARCH.SUCCESS_SEARCH:
      return handleSearchItem(state, action.items);
    case SEARCH.FAIL_SEARCH:
      return state;
    case PLAY.CHECK_ITEM:
      return checkItem(state, action.item)
    case PLAY.UNCHECK_ITEM:
      return uncheckItem(state, action.item)
    default:
      return state;
  }
}

function handleSearchItem(state, searchedItems) {
  return _.assign({}, state, {
    searchedItems: searchedItems,
  });
}

function checkItem(state, checkItem) {
  return _.assign({}, state, {
    cueItems: [...state.cueItems, checkItem],
  });
}

function uncheckItem(state, uncheckItem) {
  return _.assign({}, state, {
    cueItems: state.cueItems.filter((item) => {
      return item.id.videoId !== uncheckItem.id.videoId;
    })
  });
}
