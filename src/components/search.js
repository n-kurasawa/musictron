import React, { Component } from 'react';

const ENTER_KEY = 13;

class Search extends Component {
  props: {
    search: Function
  }

  handleSubmit(event) {
    if (event.which === ENTER_KEY) {
      const val = event.target.value.trim();
      if (val) {
        this.props.search(val);
      }
    }
  }

  render() {
    return (
      <input className="form-control" type="text" placeholder="Search" onKeyDown={e => { this.handleSubmit(e); }} />
    );
  }
}

export default Search;
