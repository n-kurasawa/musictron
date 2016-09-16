import React, { Component, PropTypes } from 'react';

export default class App extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired
  };

  render() {
    return (
      <div className="window">
        <div className="window-content">
          <div className="pane-group">
            <div className="pane-sm sidebar">
              <ul className="list-group">
                <li className="list-group-header">
                  <input className="form-control" type="text" placeholder="Search for someone" />
                </li>
                <li className="list-group-item">
                  <div className="media-body">
                    <strong>List item title</strong>
                    <p>Lorem ipsum dolor sit amet.</p>
                  </div>
                </li>
                <li className="list-group-item">
                  <div className="media-body">
                    <strong>List item title</strong>
                    <p>Lorem ipsum dolor sit amet.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="pane">
              {this.props.children}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
