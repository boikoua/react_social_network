import React from 'react';
import style from './Content.module.scss';

const Content = () => (
  <section className={style.content}>
    <div className={style.bg}></div>

    <div>Ava + Description</div>
    <div>My posts</div>
    <div>New post</div>
    <div>Post 1</div>
    <div>Post 2</div>
  </section>
);

export default Content;
