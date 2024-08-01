import React from 'react';
import style from './Music.module.scss';

const Music = (props) => (
  <section className={style.music}>
    <div className={style.bg}></div>
    <div className={style.content}>
      <h2 className={style.title}>Music</h2>
    </div>
  </section>
);

export default Music;
