import React from 'react';
import style from './Navbar.module.scss';
import { NavLink } from 'react-router-dom';
import Friends from './Friends/Friends';

const Navbar = (props) => {
  const linksFromStore = props.store.getState().sidebar.links;
  const usersFromStore = props.store.getState().sidebar.users;

  const links = linksFromStore.map((link) => (
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
  ));

  return (
    <div className={style.wrapper}>
      <nav className={style.nav}>
        <ul className={style.items}>{links}</ul>
      </nav>

      <Friends users={usersFromStore} />
    </div>
  );
};

export default Navbar;
