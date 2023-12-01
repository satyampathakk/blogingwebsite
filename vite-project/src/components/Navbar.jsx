// Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import Search from './Search'
import styles from '../css modules/Navbar.module.css'

const Navbar = ({onSearch}) => {

  return (
    <header className={styles.nav}>
      <Link className={styles.link} to="/">Home</Link>
      <Link className={styles.link} to="/about">About</Link>
      <Link className={styles.link} to="/submitform">Add Post</Link>
      <Search onSearch={onSearch} ></Search>
    </header>
  );
};

export default Navbar;
