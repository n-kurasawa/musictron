// @flow
import React, { Component } from 'react';
import styles from './styles/playlist.css';

const ENTER_KEY = 13;
type Props = {
  lists: Array<Object>,
  fetch: Function,
  select: Function,
  remove: Function,
  save: Function,
  menuToggle: Function,
  playlistOpen: boolean
}

class Playlist extends Component {
  constructor(props: Props) {
    super(props);
    this.state = { adding: false };
  }

  state : {
    adding: boolean
  }

  componentDidMount() {
    this.props.fetch();
  }

  selectPlaylist(id: string) {
    this.props.select(id);
  }

  remove(event: Event, id: string) {
    event.stopPropagation();
    this.props.remove(id);
  }

  newPlaylist() {
    this.setState({ adding: true });
  }

  newPlaylistText() {
    if (!this.state.adding) { return; }
    return (
      <span className={`nav-group-item ${styles.item}`}>
        <input type="text" className={`${styles.playlistInput}`} onKeyDown={e => { this.savePlaylist(e); }} placeholder="New Playlist" />
      </span>
    );
  }

  savePlaylist(event: KeyboardEvent) {
    if (event.which === ENTER_KEY) {
      const title = event.target.value.trim();
      if (title) {
        this.props.save(title);
      }
      this.setState({ adding: false });
    }
  }

  render() {
    const { lists } = this.props;
    const list = lists.map(l => (
      <span key={l.id} className={`nav-group-item ${styles.item}`} onClick={() => { this.selectPlaylist(l.id); }} >
        <span className={`icon icon-note-beamed ${styles.itemIcon}`} />
        { l.title }
        <span className={`icon icon-cancel ${styles.itemIconCancel}`} onClick={e => { this.remove(e, l.id); }} />
      </span>)
    );
    const menuStyle = this.props.playlistOpen ? styles.open : styles.close;
    let addIcon;
    if (this.props.playlistOpen) {
      addIcon = (<span className={`icon icon-plus ${styles.iconPlus}`} onClick={() => { this.newPlaylist(); }} />);
    }

    return (
      <nav className={`nav-group ${styles.playlist} ${menuStyle}`}>
        <h5 className={`nav-group-title ${styles.title}`}>
          <span className={`icon icon-menu ${styles.iconMenu}`} onClick={() => { this.props.menuToggle(); }} />
          Playlist
          { addIcon }
        </h5>
        { list }
        { this.newPlaylistText() }
      </nav>
    );
  }
}

export default Playlist;
