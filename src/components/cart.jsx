import React from 'react';
import styles from './cart.module.scss';
import { useStore } from '../context';

const Cart = () => {
  const {
    state: { cart },
    dispatch,
  } = useStore();
  const total = cart.reduce((acc, item) => acc + item.price * item.qty, 0);
  const changeQuantity = (item, count) => {
    dispatch({
      type: 'UPDATE_COUNT',
      payload: {
        id: item.id,
        qty: count,
      },
    });
  };
  const remove = (item) => {
    dispatch({
      type: 'REMOVE_FROM_CART',
      payload: item.id,
    });
  };
  return (
    <div className={styles.cart}>
      <div className={styles['cart-total']}>
        Cart Total
        <div>${total}</div>
      </div>
      <div className={styles['cart-items']}>
        {cart.map((item) => (
          <div className={styles['cart-item']} key={item.id}>
            <div className={styles['item-details']}>
              <img src={item.thumbnail} alt={item.title} />
              {item.title}
            </div>
            <div className={styles.quantity}>
              <span className={styles.count}>${item.price}</span>
              <span className={styles.qnty}>x</span>
              <span className={styles.count}>{item.qty}</span>
            </div>
            <div className={styles.actions}>
              <button className={styles.add} onClick={() => changeQuantity(item, item.qty + 1)}>
                +
              </button>
              <button className={styles.add} onClick={() => changeQuantity(item, item.qty - 1)}>
                -
              </button>
              <button className={styles.remove} onClick={() => remove(item)}>
                x
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
