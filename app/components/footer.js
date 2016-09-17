import React, { Component, PropTypes } from 'react';
import styles from './styles/footer.css';

class Footer extends Component {
  static propTypes = {};

  render() {
    return (
      <footer className={`${styles.footer}`}>
        Footer
      </footer>
    );
  }
}

export default Footer;
