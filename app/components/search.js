import React, { Component, PropTypes } from 'react';
import styles from './styles/sidebar.css';
const ENTER_KEY = 13;

class Search extends Component {
  static propTypes = {
    search: PropTypes.func.isRequired,
  };

  handleSubmit(event) {
    if (event.which === ENTER_KEY) {
      var val = event.target.value.trim();
      if (val) {
        this.props.search(val);
      }
    }
  }

  render() {
    return (
      <input className="form-control" type="text" placeholder="Search" onKeyDown={(e) => {this.handleSubmit(e)}} />
    );
  }
}

export default Search;
