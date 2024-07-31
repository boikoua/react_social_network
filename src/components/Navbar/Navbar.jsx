import React from 'react';
import style from './Navbar.module.scss';

const Navbar = ({ links }) => (
  <nav className={style.nav}>
    <ul className={style.items}>
      {/* Нужно еще добавить иконки */}
      {links.map((link) => (
        <li className={style.item} key={link.id}>
          <span className={style.icon}></span>
          <a href={link.url} className={style.link}>
            {link.text}
          </a>
        </li>
      ))}
    </ul>
  </nav>
);

export default Navbar;

// Вывод ссылок из массива данных
