import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Sidebar from '../components/sidebar';
import * as SearchActions from '../actions/search-actions';

function mapStateToProps(state) {
  return {
    searchItems: state.search.searchItems
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(SearchActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
