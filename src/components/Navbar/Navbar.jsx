import React from 'react';
import style from './Navbar.module.scss';
import { NavLink } from 'react-router-dom';
import Friends from './Friends/Friends';

const Navbar = (props) => (
  <div className={style.wrapper}>
    <nav className={style.nav}>
      <ul className={style.items}>
        {props.links.map((link) => (
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

    <Friends users={props.users} />
  </div>
);

export default Navbar;
