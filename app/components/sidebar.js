import React, { Component, PropTypes } from 'react';
import styles from './styles/sidebar.css';
const ENTER_KEY = 13;

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.search = this.props.search;
  }

  static propTypes = {
    search: PropTypes.func.isRequired,
    searchItems: PropTypes.array.isRequired
  };

  handleSubmit(event) {
    if (event.which === ENTER_KEY) {
      var val = event.target.value.trim();
      if (val) {
        this.search(val);
      }
    }
  }

  render() {
    const { searchItems } = this.props;
    const items = searchItems.map((item) =>  {
      return (
        <li className={`list-group-item ${styles.listGroupItem}`}>
          <div className="media-body">
            <div class="checkbox">
              <label className={ styles.label }>
                <input type="checkbox" /> {item.snippet.title}
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
