import { SEARCH, PLAY } from '../actions/';
import _ from 'lodash';

const initialState = {
  searchedItems: [],
  cueItems: [],
  playingVideo: {},
  isPlaying: false,
  isPausing: false
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
      return checkItem(state, action.item);
    case PLAY.UNCHECK_ITEM:
      return uncheckItem(state, action.item);
    case PLAY.PLAY:
      return play(state, action.videoId);
    case PLAY.PAUSE:
      return pause(state);
    default:
      return state;
  }
}

function handleSearchItem(state, searchedItems) {
  return _.assign({}, state, {
    searchedItems
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

function play(state, videoId) {
  let playingVideo;
  if (videoId) {
    playingVideo = state.cueItems.find((item) => {
      return item.id.videoId === videoId;
    });
  } else {
    playingVideo = state.playingVideo;
  }

  return _.assign({}, state, {
    playingVideo,
    isPlaying: true,
    isPausing: false
  });
}

function pause(state) {
  return _.assign({}, state, {
    isPausing: true,
    isPlaying: false
  });
}
