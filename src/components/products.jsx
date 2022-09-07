import React from 'react';
import Product from './product';
import styles from './products.module.scss';
import { useStore } from '../context';

const Products = () => {
  const {state: {products, cart}, dispatch} = useStore();

  const isProductInCart = (id) => cart.some((pr) => id === pr.id);
  const actionHandler = (product) => {
    if (isProductInCart(product.id)) {
      dispatch({ type: 'REMOVE_FROM_CART', payload: product.id });
    } else {
      dispatch({ type: 'ADD_TO_CART', payload: {...product, qty: 1} });
    }
  };
  return (
    <div className={styles.products}>
      {products.map((pr) => (
        <Product key={pr.id} inCart={isProductInCart(pr.id)} product={pr} actionHandler={actionHandler} />
      ))}
    </div>
  );
};

export default Products;
