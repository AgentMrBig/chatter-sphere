import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <Link to="/" className={styles.logo}>
        ChatterSphere
      </Link>
      <nav className={styles.nav}>
        <Link to="/signin" className={styles['nav-link']}>
          Sign In
        </Link>
        <Link to="/signup" className={styles['nav-link']}>
          Sign Up
        </Link>
      </nav>
    </header>
  );
};

export default Header;
