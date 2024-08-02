import React from 'react';
import style from './DialogsUser.module.scss';
import { NavLink } from 'react-router-dom';

const DialogsUser = (props) => (
  <article className={style.user}>
    <img src={props.avatar} className={style.avatar} alt="avatar" />
    <NavLink
      to={`/messages/${props.id}`}
      className={({ isActive }) =>
        isActive ? `${style.link} ${style.active}` : style.link
      }
    >
      {props.name}
    </NavLink>
  </article>
);

export default DialogsUser;
