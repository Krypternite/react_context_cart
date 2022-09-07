import React, { useEffect, useReducer } from 'react';
import styles from './shop.module.scss';
import shopReducer from './reducer.js';
import Products from './products';
import Cart from './cart';
import { useStore } from '../context';

const getProducts = () => fetch('https://dummyjson.com/products').then((res) => res.json());
const Shop = () => {
  const {dispatch} = useStore();
  const loadProducts = async () => {
    const {products} = await getProducts();
    dispatch({
      type: 'ADD_PRODUCTS',
      payload: products,
    });
  };

  useEffect(() => {
    loadProducts();
  }, []);
  return (
    <div className={styles.shop}>
      <div className={styles.listing}>
        <div className={styles.products}>
          <Products />
        </div>
        <div className={styles.cart}>
          {/* <Cart/> */}
        </div>
      </div>
    </div>
  );
};

export default Shop;
