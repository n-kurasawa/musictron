import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Table from '../components/table';
import * as PlayActions from '../actions/play-actions';

function mapStateToProps(state) {
  return {
    cueItems: state.play.cueItems,
    isClosed: state.play.isClosed,
    playingVideo: state.play.playingVideo
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(PlayActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Table);
