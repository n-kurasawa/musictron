import React, { Component, PropTypes } from 'react';
import styles from './styles/sidebar.css';
import Search from '../containers/search-container';
const ENTER_KEY = 13;

class Sidebar extends Component {
  static propTypes = {
    checkItem: PropTypes.func.isRequired,
    uncheckItem: PropTypes.func.isRequired,
    searchedItems: PropTypes.array.isRequired
  };

  handleCheck(event, item) {
    if (event.target.checked) {
      this.props.checkItem(item);
    } else {
      this.props.uncheckItem(item);
    }
  }

  render() {
    const { searchedItems } = this.props;
    const items = searchedItems.map((item, index) =>  {
      return (
        <li key={index} className={`list-group-item ${styles.listGroupItem}`}>
          <div className="media-body">
            <div className="checkbox">
              <label className={ styles.label }>
                <input className={ styles.checkbox } type="checkbox" onChange={(e) => { this.handleCheck(e, item) }} />
                {item.snippet.title}
              </label>
            </div>
          </div>
        </li>
      )
    });

    return (
      <div className={`pane-one-fourth sidebar ${styles.sidebar}`}>
        <ul className={`list-group ${styles.listGroup}`}>
          <li className="list-group-header">
            <Search />
          </li>
          { items }
        </ul>
      </div>
    );
  }
}

export default Sidebar;