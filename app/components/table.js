import React, { Component, PropTypes } from 'react';
import styles from './styles/table.css';

class Table extends Component {
  static propTypes = {
    cueItems: PropTypes.array.isRequired,
    playById: PropTypes.func.isRequired,
    closeView: PropTypes.func.isRequired,
    openView: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired,
    isClosed: PropTypes.bool.isRequired,
    playingVideo: PropTypes.object.isRequired
  };

  handleClick(event, videoId) {
    this.props.playById(videoId);
  }

  closeView() {
    this.props.closeView();
  }

  openView() {
    this.props.openView();
  }

  remove(event, videoId) {
    event.stopPropagation();
    this.props.remove(videoId);
  }

  openIcon() {
    if (this.props.isClosed) {
      return (<div className={`icon icon-down-open ${styles.pointer} ${styles.right}`} onClick={() => { this.openView() }}/>);
    } else {
      return (<div className={`icon icon-up-open ${styles.pointer} ${styles.right}`} onClick={() => { this.closeView() }}/>);
    }
  }

  render() {
    const { cueItems, playingVideo } = this.props;
    const items = cueItems.map((item, index) => {
      const style = (playingVideo.id && item.id.videoId === playingVideo.id.videoId) ? styles.playing : (index % 2 === 0) ? styles.even : styles.odd;
      return (
        <tr key={index}>
          <td className={`${style} ${styles.td}`} onClick={(e) => {this.handleClick(e, item.id.videoId)}}>
            <div className={styles.left}>{item.snippet.title}</div>
            <div className={`icon icon-cancel ${styles.right} ${styles.cancel}`} onClick={ (e) => { this.remove(e, item.id.videoId) } }></div>
          </td>
        </tr>
      );
    });

    return (
      <table className={`table-striped ${styles.table}`}>
        <thead className={styles.thead}>
          <tr>
            <th className={styles.th}>
              <div className={styles.left}>Title</div>
              { this.openIcon() }
            </th>
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
