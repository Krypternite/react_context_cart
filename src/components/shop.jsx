import React, { useEffect } from 'react';
import styles from './shop.module.scss';
import Products from './products';
import { useStore } from '../context';

const getProducts = () => fetch('https://dummyjson.com/products').then((res) => res.json());
const Shop = () => {
  const { dispatch } = useStore();

  useEffect(() => {
    const loadProducts = async () => {
      const { products } = await getProducts();
      dispatch({
        type: 'ADD_PRODUCTS',
        payload: products,
      });
    };
    loadProducts();
  }, []);
  return (
    <div className={styles.shop}>
      <div className={styles.listing}>
        <div className={styles.products}>
          <Products />
        </div>
        <div className={styles.cart}>{/* <Cart/> */}</div>
      </div>
    </div>
  );
};

export default Shop;
