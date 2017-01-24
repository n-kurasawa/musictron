// @flow
import React, { Component } from 'react';
import styles from './styles/table.css';
import PlaylistItems from './playlist-items';

class Table extends Component {

  props: {
    closeView: Function,
    openView: Function,
    isClosed: Boolean,
    playingList: Object
  }

  closeView() {
    this.props.closeView();
  }

  openView() {
    this.props.openView();
  }

  openIcon() {
    if (this.props.isClosed) {
      return (<div className={`icon icon-down-open ${styles.pointer} ${styles.openCloseIcon}`} onClick={() => { this.openView(); }} />);
    } else {
      return (<div className={`icon icon-up-open ${styles.pointer} ${styles.openCloseIcon}`} onClick={() => { this.closeView(); }} />);
    }
  }

  playlistTitle() {
    const title = this.props.playingList.title || 'Playlist';
    return (<span className={styles.plaulistTitle}>{title}</span>);
  }

  render() {
    return (
      <table className={`table-striped ${styles.table}`}>
        <thead className={styles.thead}>
          <tr>
            <th className={styles.th}>
              <div className={styles.left}>
                { this.playlistTitle() }
              </div>
              { this.openIcon() }
            </th>
          </tr>
        </thead>
        <PlaylistItems {...this.props} />
      </table>
    );
  }
}

export default Table;
