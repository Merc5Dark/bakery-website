import React from 'react';
import styles from './MenuPage.module.css';

const MenuPage = () => {
  const menuItems = [
    {
      name: 'Pastry 1',
      description: 'Description for Pastry 1',
      imageSrc: 'path/to/pastry1.jpg', // Replace with the actual image path
    },
    // Add more menu items as needed
  ];

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Menu</h1>
      <div>
        {menuItems.map((item, index) => (
          <div key={index} className={styles.menuItem}>
            <img src={item.imageSrc} alt={item.name} className={styles.menuItemImage} />
            <div className={styles.menuItemName}>{item.name}</div>
            <div className={styles.menuItemDescription}>{item.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuPage;
