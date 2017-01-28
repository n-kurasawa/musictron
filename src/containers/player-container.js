import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Player from '../components/player';
import * as PlayActions from '../actions/play-actions';

function getNextVideo(index, items, isLoop) {
  if (index === -1) { return; }
  if (items[index + 1]) {
    return items[index + 1];
  } else if (isLoop) {
    return items[0];
  }
}

function mapStateToProps(state) {
  const items = state.play.isShuffle ? state.play.shuffleItems : state.play.cueItems;

  const index = items.findIndex(item => item === state.play.playingVideo);

  return {
    nextVideo: getNextVideo(index, items, state.play.isLoop),
    isEnded: state.play.isEnded,
    isClosed: state.play.isClosed
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(PlayActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Player);
