import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Table from '../components/table';
import * as SearchActions from '../actions/search-actions';

function mapStateToProps(state) {
  return {
    checkItems: state.search.checkItems
  };
}

export default connect(mapStateToProps)(Table);
