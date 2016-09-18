import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import TopBar from '../components/top-bar';
import * as PlayActions from '../actions/play-actions';

function getPreviousVideo(index, cueItems) {
  if (index === -1) { return; }
  if (cueItems[index - 1]) {
    return cueItems[index - 1];
  }
}

function getNextVideo(index, cueItems) {
  if (index === -1) { return; }
  if (cueItems[index + 1]) {
    return cueItems[index + 1];
  }
}

function mapStateToProps(state) {
  const index = state.app.cueItems.findIndex((item) => {
    return item === state.app.playingVideo
  });

  return {
    playingVideo: state.app.playingVideo,
    previousVideo: getPreviousVideo(index, state.app.cueItems),
    nextVideo: getNextVideo(index, state.app.cueItems),
    isPlaying: state.app.isPlaying
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(PlayActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TopBar);
