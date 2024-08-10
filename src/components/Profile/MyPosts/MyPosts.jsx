import React from 'react';
import style from './MyPosts.module.scss';
import Post from './Post/Post';
import NewPostContainer from './NewPost/NewPostContainer';

const MyPosts = (props) => {
  const postsFromServer = props.store.getState().profilePage.posts;

  const postsList = postsFromServer.map((post) => (
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
      <NewPostContainer store={props.store} />
      <section className={style.posts}>{postsList}</section>
    </section>
  );
};

export default MyPosts;
