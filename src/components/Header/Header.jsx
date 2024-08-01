import React from 'react';
import style from './Header.module.scss';
import Logo from './Logo/Logo';

const Header = () => (
  <header className={style.header}>
    <Logo text={'Social Network'} />
  </header>
);

export default Header;
