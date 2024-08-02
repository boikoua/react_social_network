import React from 'react';
import style from './Dialogs.module.scss';
import { NavLink } from 'react-router-dom';

const Dialogs = (props) => (
  <section className={style.dialogs}>
    <div className={style.bg}></div>
    <div className={style.content}>
      <h2 className={style.title}>Dialogs</h2>

      <section className={style.wrapper}>
        <section className={style.users}>
          <article className={style.user}>
            <NavLink
              to="/messages/1"
              className={({ isActive }) =>
                isActive ? `${style.link} ${style.active}` : style.link
              }
            >
              Dima
            </NavLink>
          </article>
          <article className={style.user}>
            <NavLink
              to="/messages/2"
              className={({ isActive }) =>
                isActive ? `${style.link} ${style.active}` : style.link
              }
            >
              Valera
            </NavLink>
          </article>
          <article className={style.user}>
            <NavLink
              to="/messages/3"
              className={({ isActive }) =>
                isActive ? `${style.link} ${style.active}` : style.link
              }
            >
              Sveta
            </NavLink>
          </article>
          <article className={style.user}>
            <NavLink
              to="/messages/4"
              className={({ isActive }) =>
                isActive ? `${style.link} ${style.active}` : style.link
              }
            >
              Vladimir
            </NavLink>
          </article>
          <article className={style.user}>
            <NavLink
              to="/messages/5"
              className={({ isActive }) =>
                isActive ? `${style.link} ${style.active}` : style.link
              }
            >
              Nastya
            </NavLink>
          </article>
          <article className={style.user}>
            <NavLink
              to="/messages/6"
              className={({ isActive }) =>
                isActive ? `${style.link} ${style.active}` : style.link
              }
            >
              Nataly
            </NavLink>
          </article>
        </section>

        <section className={style.messages}>
          <article className={style.message}>Hi!</article>
          <article className={style.message}>How are you?</article>
          <article className={style.message}>Hello, i'm here</article>
          <article className={style.message}>Hi!</article>
          <article className={style.message}>How are you?</article>
          <article className={style.message}>Hello, i'm here</article>
        </section>
      </section>
    </div>
  </section>
);

export default Dialogs;
