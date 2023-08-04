import React from 'react';
import styles from './HomePage.module.css';

const HomePage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Welcome to Our Bakery</h1>
      <img
        src="path/to/your/image"  // Replace with the actual path to your image
        alt="Bakery"
        className={styles.image}
      />
    </div>
  );
};

export default HomePage;
