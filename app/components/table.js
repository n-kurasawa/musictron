import React, { Component, PropTypes } from 'react';
import styles from './styles/table.css';

class Table extends Component {
  static propTypes = {
    cueItems: PropTypes.array.isRequired,
    playById: PropTypes.func.isRequired
  };

  handleClick(event, videoId) {
    this.props.playById(videoId);
  }

  render() {
    const { cueItems } = this.props;
    const items = cueItems.map((item, index) => {
      const style = (index % 2 === 0) ? styles.even : styles.odd;
      return (
        <tr key={index}>
          <td className={`${style} ${styles.td}`} onClick={(e) => {this.handleClick(e, item.id.videoId)}}>{item.snippet.title}</td>
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
        <tbody className={styles.tbody}>
          { items }
        </tbody>
      </table>
    );
  }
}

export default Table;
