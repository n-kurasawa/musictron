import React, { Component, PropTypes } from 'react';
import styles from './styles/sidebar.css';

class Sidebar extends Component {
  static propTypes = {};

  render() {
    return (
      <div className={`pane-sm sidebar ${styles.sidebar}`}>
        <ul className={`list-group ${styles.listGroup}`}>
          <li className="list-group-header">
            <input className="form-control" type="text" placeholder="Search for someone" />
          </li>
          <li className={`list-group-item ${styles.listGroupItem}`}>
            <div className="media-body">
              <strong>List item title</strong>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </li>
          <li className={`list-group-item ${styles.listGroupItem}`}>
            <div className="media-body">
              <strong>List item title</strong>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

export default Sidebar;
