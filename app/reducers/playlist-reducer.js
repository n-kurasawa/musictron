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
        lists: [ ...state.lists, action.playingList ]
      });
    case PLAYLIST.FETCH:
      const lists = action.lists || [];
      return _.assign({}, state, { lists: lists });
    case PLAYLIST.SELECT:
      return _.assign({}, state, { playingList: action.playingList });
    default:
      return state;
  }
}
