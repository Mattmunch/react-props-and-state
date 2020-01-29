import React, { Component } from 'react';
import styles from './Header.css';

export default class Header extends Component {
  render() {
    return (
      <header className={styles.header}>
        <section>
          <h1>The Madlib</h1>
          <h2>Use your extensive vocabulary.</h2>
        </section>
      </header>
    );
  }
}
