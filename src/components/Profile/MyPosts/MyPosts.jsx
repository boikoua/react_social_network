import React from 'react';
import style from './MyPosts.module.scss';
import Post from './Post/Post';

const MyPosts = () => (
  <section className={style.container}>
    <h2 className={style.title}>My posts</h2>
    <p>NEW POST COMPONENT</p>
    <section className={style.posts}>
      <Post />
      <Post />
    </section>
  </section>
);

export default MyPosts;
