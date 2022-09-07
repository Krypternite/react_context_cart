import React from 'react';
import styles from './products.module.scss';

const Product = ({ product, inCart, actionHandler }) => {
  return (
    <div className={styles.product}>
      <div className={styles['product-title']}>{product.title}</div>
      <div className={styles['thumbnail-container']}>
        <img src={product.thumbnail} alt={product.title} />
      </div>
      <div>Price: ${product.price}</div>
      <div className={styles['action-buttons']}>
        <button onClick={() => actionHandler(product)} className={inCart ? styles.remove : styles.add}>
          {inCart ? 'Remove from cart' : 'Add to cart'}
        </button>
      </div>
    </div>
  );
};

export default Product;
