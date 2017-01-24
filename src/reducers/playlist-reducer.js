import { PLAYLIST } from '../actions/';
import _ from 'lodash';

const initialState = {
  playingList: {},
  lists: []
};

export default function playlist(state = initialState, action) {
  switch (action.type) {
    case PLAYLIST.SAVE:
      return _.assign({}, state, {
        playingList: action.playingList,
        lists: [ ...state.lists, action.playingList ],
      });
    case PLAYLIST.FETCH:
      return _.assign({}, state, { lists: action.lists || [] });
    case PLAYLIST.REMOVE:
      return remove(state, action.id)
    case PLAYLIST.SELECT:
      return _.assign({}, state, {
        playingList: action.playingList,
      });
    default:
      return state;
  }
}

function remove(state, id) {
  const lists = state.lists.filter((list) => {
    return list.id !== id;
  });
  return _.assign({}, state, { lists: lists });
}
