import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navigation.module.css';

const Navigation = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <Link to="/" className={styles.navLink}>Home</Link>
        </li>
        <li className={styles.navItem}>
          <Link to="/about" className={styles.navLink}>About Us</Link>
        </li>
        <li className={styles.navItem}>
          <Link to="/menu" className={styles.navLink}>Menu</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
