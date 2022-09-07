import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useStore } from '../context';
import styles from './header.module.scss';

const Header = () => {
  const {
    state: { cart },
  } = useStore();
  const total = useMemo(() => cart.reduce((acc, item) => acc + item.price * item.qty, 0), [cart]);
  return (
    <div className={styles.nav}>
      <Link to="home">Home</Link>
      <Link to="cart">Cart({total})</Link>
    </div>
  );
};

export default Header;
