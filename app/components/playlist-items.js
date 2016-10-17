import React, { Component, PropTypes } from 'react';
import styles from './styles/playlist-items.css';

class PlaylistItems extends Component {
  static propTypes = {
    cueItems: PropTypes.array.isRequired,
    remove: PropTypes.func.isRequired,
    playById: PropTypes.func.isRequired,
    playingVideo: PropTypes.object.isRequired
  };

  handleClick(event, videoId) {
    this.props.playById(videoId);
  }

  remove(event, videoId) {
    event.stopPropagation();
    this.props.remove(videoId);
  }

  render() {
    const { cueItems, playingVideo, isClosed } = this.props;
    const top = isClosed ? styles.close : styles.open;

    const items = cueItems.map((item, index) => {
      const style = (playingVideo.id && item.id.videoId === playingVideo.id.videoId) ? styles.playing : (index % 2 === 0) ? styles.even : styles.odd;
      return (
        <tr key={index} className={styles.tr}>
          <td className={`${style} ${styles.td}`} onClick={(e) => {this.handleClick(e, item.id.videoId)}}>
            <label className={`media-body ${styles.title}`} title={ item.snippet.title }>{item.snippet.title}</label>
            <div className={`icon icon-cancel ${styles.right} ${styles.cancel}`} onClick={ (e) => { this.remove(e, item.id.videoId) } }></div>
          </td>
        </tr>
      );
    });

    return (
      <tbody className={`${styles.tbody} ${top}`}>
        { items }
      </tbody>
    );
  }
}

export default PlaylistItems;
