import Repository from "./repository";
import uuid from "uuid";

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
    return this.repo.setItem(id, Object.assign({id: id}, val));
  }

  addPlaylist(val) {

  }

  findPlaylist(id) {
    return this.repo.getItem(id);
  }

  removePlaylist(id) {
    return this.repo.removeItem(id);
  }
}

export default new PlaylistRepository();
