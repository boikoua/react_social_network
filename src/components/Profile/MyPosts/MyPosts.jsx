import React from 'react';
import style from './MyPosts.module.scss';
import Post from './Post/Post';
import NewPost from './NewPost/NewPost';

const MyPosts = (props) => {
  // Вывод списка постов
  const postsList = props.posts.map((post) => (
    <Post
      avatar={post.avatar}
      message={post.message}
      likes={post.likes}
      key={post.id}
    />
  ));

  return (
    <section className={style.container}>
      <h2 className={style.title}>My posts</h2>
      <NewPost text={props.text} dispatch={props.dispatch} />
      <section className={style.posts}>{postsList}</section>
    </section>
  );
};

export default MyPosts;
