import React, { Component, PropTypes } from 'react';
import styles from './styles/table.css';
const ENTER_KEY = 13;

class Table extends Component {
  static propTypes = {
    cueItems: PropTypes.array.isRequired,
    playById: PropTypes.func.isRequired,
    closeView: PropTypes.func.isRequired,
    openView: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired,
    save: PropTypes.func.isRequired,
    isClosed: PropTypes.bool.isRequired,
    playingVideo: PropTypes.object.isRequired,
    playingList: PropTypes.object.isRequired
  };

  constructor(props, context) {
    super(props, context);
    this.state = { isPlaylistEdit: false };
  }

  handleClick(event, videoId) {
    this.props.playById(videoId);
  }

  handleSave(event) {
    if (event.which === ENTER_KEY) {
      var name = event.target.value.trim();
      if (name) {
        this.props.save(name, this.props.cueItems);
      }
      this.setState({ isPlaylistEdit: false });
    }
  }

  handleClickSave() {
    this.setState({ isPlaylistEdit: true });
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
      return (<div className={`icon icon-down-open ${styles.pointer} ${styles.openCloseIcon}`} onClick={() => { this.openView() }}/>);
    } else {
      return (<div className={`icon icon-up-open ${styles.pointer} ${styles.openCloseIcon}`} onClick={() => { this.closeView() }}/>);
    }
  }

  playlistTitle() {
    if (this.state.isPlaylistEdit) {
      return (<input type="text" className={`${styles.playlistInput}`} onKeyDown={(e) => {this.handleSave(e)}} placeholder="Playlist Title"/>);
    } else {
      const title = this.props.playingList.title || 'Playlist';
      return (<span>{title}</span>);
    }
  }

  render() {
    const { cueItems, playingVideo, isClosed } = this.props;
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
    const top = isClosed ? styles.close : styles.open;

    return (
      <table className={`table-striped ${styles.table}`}>
        <thead className={styles.thead}>
          <tr>
            <th className={styles.th}>
              <div className={styles.left}>
                { this.playlistTitle() }
                <span className={`icon icon-download ${styles.save}`} onClick={() => {this.handleClickSave()}}></span>
              </div>
              { this.openIcon() }
            </th>
          </tr>
        </thead>
        <tbody className={`${styles.tbody} ${top}`}>
          { items }
        </tbody>
      </table>
    );
  }
}

export default Table;
