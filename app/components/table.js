import React, { Component, PropTypes } from 'react';
import styles from './styles/table.css';

class Table extends Component {
  static propTypes = {
    checkItems: PropTypes.array.isRequired
  };

  render() {
    const { checkItems } = this.props;
    const items = checkItems.map((item, index) => {
      const style = (index % 2 === 0) ? styles.even : styles.odd;
      return (
        <tr key={index}>
          <td className={style}>{item.snippet.title}</td>
        </tr>
      );
    });

    return (
      <table className={`table-striped ${styles.table}`}>
        <thead className={styles.thead}>
          <tr>
            <th className={styles.th}>Title</th>
          </tr>
        </thead>
        <tbody>
          { items }
        </tbody>
      </table>
    );
  }
}

export default Table;
