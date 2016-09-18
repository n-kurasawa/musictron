import React, { Component, PropTypes } from 'react';
import styles from './styles/sidebar.css';
const ENTER_KEY = 13;

class Sidebar extends Component {
  static propTypes = {
    search: PropTypes.func.isRequired,
    checkItem: PropTypes.func.isRequired,
    uncheckItem: PropTypes.func.isRequired,
    searchItems: PropTypes.array.isRequired
  };

  handleSubmit(event) {
    if (event.which === ENTER_KEY) {
      var val = event.target.value.trim();
      if (val) {
        this.props.search(val);
      }
    }
  }

  handleCheck(event, item) {
    if (event.target.checked) {
      this.props.checkItem(item);
    } else {
      this.props.uncheckItem(item);
    }
  }

  render() {
    const { searchItems } = this.props;
    const items = searchItems.map((item, index) =>  {
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
            <input className="form-control" type="text" placeholder="Search" onKeyDown={(e) => {this.handleSubmit(e)}} />
          </li>
          { items }
        </ul>
      </div>
    );
  }
}

export default Sidebar;
