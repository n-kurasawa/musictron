import React, { Component, PropTypes } from 'react';
import styles from './styles/playlist.css';
const ENTER_KEY = 13;

class Playlist extends Component {
  static propTypes = {
    lists: PropTypes.array.isRequired,
    fetch: PropTypes.func.isRequired,
    select: PropTypes.func.isRequired,
    selectPlaylist: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired,
    save: PropTypes.func.isRequired
  };

  constructor(props, context) {
    super(props, context);
    this.state = { adding: false };
  }

  componentDidMount() {
    this.props.fetch();
  }

  selectPlaylist(list) {
    this.props.select(list);
    this.props.selectPlaylist(list);
  }

  remove(event, id) {
    event.stopPropagation();
    this.props.remove(id);
  }

  newPlaylist() {
    this.setState({adding: true});
  }

  newPlaylistText() {
    if (!this.state.adding) { return; }
    return (
      <span className={`nav-group-item ${styles.item}`}>
        <input type="text" className={`${styles.playlistInput}`} onKeyDown={(e) => {this.savePlaylist(e)}} placeholder="New Playlist"/>
      </span>
    );
  }

  savePlaylist(event) {
    if (event.which === ENTER_KEY) {
      var title = event.target.value.trim();
      if (title) {
        this.props.save(title);
      }
      this.setState({ adding: false });
    }
  }

  render() {
    const { lists } = this.props;
    const list = lists.map((list) => {
      return (
        <span key={list.id} className={`nav-group-item ${styles.item}`} onClick={ () => { this.selectPlaylist(list) }}>
          <span className={`icon icon-note-beamed ${styles.itemIcon}`}/>
          { list.title }
          <span className={`icon icon-cancel ${styles.itemIconCancel}`} onClick={ (e) => { this.remove(e, list.id) }}/>
        </span>
      );
    });
    const menuStyle = this.props.playlistOpen ? styles.open : styles.close;
    let addIcon;
    if (this.props.playlistOpen) {
      addIcon = (<span className={`icon icon-plus ${styles.iconPlus}`} onClick={ () => { this.newPlaylist()} }></span>);
    }

    return (
      <nav className={`nav-group ${styles.playlist} ${menuStyle}`}>
        <h5 className={`nav-group-title ${styles.title}`}>
          <span className={`icon icon-menu ${styles.iconMenu}`} onClick={() => { this.props.menuToggle() }}></span>
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
