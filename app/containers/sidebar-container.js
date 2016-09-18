import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Sidebar from '../components/sidebar';
import * as PlayActions from '../actions/play-actions';

function mapStateToProps(state) {
  return {
    searchedItems: state.app.searchedItems
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(PlayActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
