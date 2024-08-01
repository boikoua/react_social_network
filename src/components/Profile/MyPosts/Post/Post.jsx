import React from 'react';
import style from './Post.module.scss';

const Post = (props) => (
  <article className={style.post}>
    <div className={style.top}>
      <img src={props.avatar} alt="User's avatar" className={style.avatar} />
      <p className={style.message}>{props.message}</p>
    </div>

    <div className={style.bottom}>
      <button className={style.like}></button>
      <span className={style.count}>{props.likes}</span>
    </div>
  </article>
);

export default Post;
