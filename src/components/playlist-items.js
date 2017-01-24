// @flow
import React, { Component } from 'react';
import styles from './styles/playlist-items.css';

class PlaylistItems extends Component {
  props: {
    cueItems: Array<Object>,
    remove: Function,
    playById: Function,
    playingVideo: Object,
    isClosed: Boolean
  };

  handleClick(event: Event, videoId: string) {
    this.props.playById(videoId);
  }

  remove(event: Event, videoId: string) {
    event.stopPropagation();
    this.props.remove(videoId);
  }

  render() {
    const { cueItems, playingVideo, isClosed } = this.props;
    const top = isClosed ? styles.close : styles.open;

    const items = cueItems.map((item, index) => {
      const isPlaying = playingVideo.id && item.id.videoId === playingVideo.id.videoId;
      const rowStyle = index % 2 === 0 ? styles.even : styles.odd;
      const style = isPlaying ? styles.playing : rowStyle;
      return (
        <tr key={item.id} className={styles.tr}>
          <td className={`${style} ${styles.td}`} onClick={e => { this.handleClick(e, item.id.videoId); }}>
            <div htmlFor="" className={`media-body ${styles.title}`} title={item.snippet.title}>{item.snippet.title}</div>
            <div id="" className={`icon icon-cancel ${styles.right} ${styles.cancel}`} onClick={e => { this.remove(e, item.id.videoId); }} />
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
