import React from 'react';
import style from './Post.module.scss';

const Post = () => (
  <article className={style.post}>
    <div className={style.top}>
      <img
        src="https://static.vecteezy.com/system/resources/thumbnails/001/503/756/small_2x/boy-face-avatar-cartoon-free-vector.jpg"
        alt=""
        className={style.avatar}
      />
      <p className={style.text}>Hello, How are you?</p>
    </div>

    <div className={style.bottom}>
      <button className={style.like}></button>
      <span className={style.count}>100</span>
    </div>
  </article>
);

export default Post;
