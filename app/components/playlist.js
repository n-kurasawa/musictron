import React, { Component, PropTypes } from 'react';
import styles from './styles/playlist.css';

class Playlist extends Component {
  static propTypes = {
    lists: PropTypes.array.isRequired,
    fetch: PropTypes.func.isRequired,
    select: PropTypes.func.isRequired,
    selectPlaylist: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.fetch();
  }

  handleClick(list) {
    this.props.select(list);
    this.props.selectPlaylist(list);
  }

  render() {
    const { lists } = this.props;
    const list = lists.map((list) => {
      return (
        <span className={`nav-group-item ${styles.item}`} onClick={ () => {this.handleClick(list)} }>
          { list.title }
        </span>
      );
    });

    return (
      <nav className={`nav-group ${styles.playlist}`}>
        <h5 className={`nav-group-title ${styles.title}`}>
          <span className={`icon icon-menu ${styles.icon}`}></span>
          Playlist
        </h5>
        { list }
      </nav>
    );
  }
}

export default Playlist;
