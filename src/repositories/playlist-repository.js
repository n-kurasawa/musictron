import uuid from 'uuid';
import Repository from './repository';

class PlaylistRepository {
  constructor() {
    this.repo = new Repository({
      storeName: 'playlists'
    });
  }

  findAll() {
    return this.repo.all();
  }

  savePlaylist(val) {
    const id = uuid.v1();
    return this.repo.setItem(id, Object.assign({ id }, val));
  }

  updatePlaylist(id, list) {
    return this.repo.setItem(id, list);
  }

  add(playlistId, item) {
    return this.findPlaylist(playlistId).then(list => (
      Object.assign({}, list, { items: [...list.items, item] })
    )).then(list => (
      this.updatePlaylist(playlistId, list)
    ));
  }

  remove(playlistId, videoId) {
    return this.findPlaylist(playlistId).then(list => {
      const items = list.items.filter(item => (
        item.id.videoId !== videoId
      ));
      return Object.assign({}, list, { items });
    }).then(list => (
      this.updatePlaylist(playlistId, list)
    ));
  }

  findPlaylist(id) {
    return this.repo.getItem(id);
  }

  removePlaylist(id) {
    return this.repo.removeItem(id);
  }
}

export default new PlaylistRepository();
