import React from 'react';
import styles from './AboutPage.module.css';

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>About Us</h1>
      <p className={styles.paragraph}>
        Fictional history of the bakery...
        {/* Add more paragraphs with bakery's mission and values */}
      </p>
    </div>
  );
};

export default AboutPage;
