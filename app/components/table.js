import React, { Component, PropTypes } from 'react';
import styles from './styles/table.css';

class Table extends Component {
  static propTypes = {};

  render() {
    return (
      <table className="table-striped">
        <thead className={styles.thead}>
          <tr>
            <th className={styles.th}>Name</th>
            <th className={styles.th}>Kind</th>
            <th className={styles.th}>File Size</th>
          </tr>
        </thead>
        <tbody>
          <tr className={styles.odd}>
            <td>photon.css</td>
            <td>CSS</td>
            <td>28K</td>
          </tr>
          <tr>
            <td className={styles.even}>photon.css</td>
            <td className={styles.even}>CSS</td>
            <td className={styles.even}>28K</td>
          </tr>
          <tr className={styles.odd}>
            <td>photon.css</td>
            <td>CSS</td>
            <td>28K</td>
          </tr>
          <tr>
            <td className={styles.even}>photon.css</td>
            <td className={styles.even}>CSS</td>
            <td className={styles.even}>28K</td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default Table;
