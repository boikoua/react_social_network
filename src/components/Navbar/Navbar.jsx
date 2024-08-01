import React from 'react';
import style from './Navbar.module.scss';
import { NavLink } from 'react-router-dom';

const Navbar = ({ links }) => (
  <nav className={style.nav}>
    <ul className={style.items}>
      {/* Вывод ссылок из массива данных */}
      {links.map((link) => (
        <li className={style.item} key={link.id}>
          <img src={link.icon} alt="icon" className={style.icon} />
          <NavLink
            to={`/${link.text.toLowerCase()}`}
            className={({ isActive }) =>
              isActive ? `${style.link} ${style.active}` : style.link
            }
          >
            {link.text}
          </NavLink>
        </li>
      ))}
    </ul>
  </nav>
);

export default Navbar;
