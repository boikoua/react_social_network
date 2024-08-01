import React from 'react';
import style from './MyPosts.module.scss';
import Post from './Post/Post';

const MyPosts = (props) => (
  <section className={style.container}>
    <h2 className={style.title}>My posts</h2>
    <p>NEW POST COMPONENT</p>
    <section className={style.posts}>
      {props.posts.map((post) => (
        <Post avatar={post.avatar} message={post.message} likes={post.likes} />
      ))}
    </section>
  </section>
);

export default MyPosts;
