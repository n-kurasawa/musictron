import React from 'react';
import Sidebar from '../containers/sidebar-container';
import MainPanel from '../components/main-panel';
import Footer from '../components/footer';

const App = () => (
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

export default App;
