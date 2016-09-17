import React, { Component, PropTypes } from 'react';
import Sidebar from '../containers/sidebar-container';
import MainPanel from '../components/main-panel';
import Footer from '../components/footer';

export default class App extends Component {
  static propTypes = {
  };

  render() {
    return (
      <div className="window">
        <div className="window-content">
          <div className="pane-group">
            <Sidebar />
            <MainPanel />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
