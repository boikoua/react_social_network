import React from 'react';
import style from './News.module.scss';

const News = (props) => (
  <section className={style.news}>
    <div className={style.bg}></div>
    <div className={style.content}>
      <h2 className={style.title}>News</h2>
    </div>
  </section>
);

export default News;
