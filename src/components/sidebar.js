// @flow
import React, { Component, PropTypes } from 'react';
import styles from './styles/sidebar.css';
import Search from '../containers/search-container';
import Playlist from '../containers/playlist-container';

type Props = {
  checkItem: PropTypes.func.isRequired,
  uncheckItem: PropTypes.func.isRequired,
  searchedItems: PropTypes.array.isRequired,
  cueIds: PropTypes.array.isRequired
};

class Sidebar extends Component {
  constructor(props: Props) {
    super(props);
    this.state = { playlistOpen: true };
  }

  state: {
    playlistOpen: boolean
  }

  menuToggle() {
    this.setState({ playlistOpen: !this.state.playlistOpen });
  }

  handleCheck(event: Event, item) {
    if (event.target.checked) {
      this.props.checkItem(item);
    } else {
      this.props.uncheckItem(item);
    }
  }

  isChecked(videoId: string) {
    return this.props.cueIds.some(id => id === videoId);
  }

  render() {
    const { searchedItems } = this.props;
    const playlistOpen = this.state.playlistOpen;
    const style = playlistOpen ? styles.playlistOpen : styles.playlistClose;
    const items = searchedItems.map(item => {
      const checked = this.isChecked(item.id.videoId);
      return (
        <li key={item.id.videoId} className={`list-group-item ${styles.listGroupItem}`}>
          <div className="media-body">
            <div className="checkbox">
              <div className={styles.label} title={item.snippet.title}>
                <input className={styles.checkbox} checked={checked} type="checkbox" onChange={e => { this.handleCheck(e, item); }} />
                {item.snippet.title}
              </div>
            </div>
          </div>
        </li>
      );
    });

    return (
      <div className={`pane-one-fourth sidebar ${styles.sidebar}`}>
        <ul className={`list-group ${styles.border}`}>
          <li className="list-group-header">
            <Search />
          </li>
        </ul>
        <ul className={`list-group ${styles.scroll} ${style}`}>
          { items }
        </ul>
        <Playlist menuToggle={() => { this.menuToggle(); }} playlistOpen={playlistOpen} />
      </div>
    );
  }
}

export default Sidebar;
