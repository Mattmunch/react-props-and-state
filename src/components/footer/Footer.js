import React, { Component } from 'react';
import styles from './Footer.css';
export default class Footer extends Component {
  render() {
    return (
      <footer className={styles.footer}>
        <section className=''>
          <p>Created</p>
          <p>by</p>
          <p>Matt</p>
        </section>
      </footer>
    );
  }
}
  
