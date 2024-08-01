import React from 'react';
import style from './Dialogs.module.scss';

const Dialogs = (props) => (
  <section className={style.dialogs}>
    <div className={style.bg}></div>
    <div className={style.content}>
      <h2 className={style.title}>Dialogs</h2>

      <section className={style.wrapper}>
        <section className={style.users}>
          <article className={style.user}>Dima</article>
          <article className={style.user}>Valera</article>
          <article className={style.user}>Sveta</article>
          <article className={style.user}>Dima</article>
          <article className={style.user}>Valera</article>
          <article className={style.user}>Sveta</article>
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
