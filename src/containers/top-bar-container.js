import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import TopBar from '../components/top-bar';
import * as PlayActions from '../actions/play-actions';

function getPreviousVideo(index, items) {
  if (index === -1) { return; }
  if (items[index - 1]) {
    return items[index - 1];
  } else {
    return items[items.length - 1];
  }
}

function getNextVideo(index, items) {
  if (index === -1) { return; }
  if (items[index + 1]) {
    return items[index + 1];
  } else {
    return items[0];
  }
}

function mapStateToProps(state) {
  const items = state.play.isShuffle ? state.play.shuffleItems : state.play.cueItems;
  const index = items.findIndex(item => item === state.play.playingVideo);

  return {
    playingVideo: state.play.playingVideo,
    firstVideo: items[0],
    previousVideo: getPreviousVideo(index, items),
    nextVideo: getNextVideo(index, items),
    isPlaying: state.play.isPlaying,
    isShuffle: state.play.isShuffle,
    isLoop: state.play.isLoop
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(PlayActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TopBar);
