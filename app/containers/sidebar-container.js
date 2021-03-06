import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Sidebar from '../components/sidebar';
import * as PlayActions from '../actions/play-actions';

function getCueIds(cueItems) {
  return cueItems.map((item) => {
    return item.id.videoId;
  });
}

function mapStateToProps(state) {
  return {
    searchedItems: state.search.searchedItems,
    cueIds: getCueIds(state.play.cueItems)
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(PlayActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
