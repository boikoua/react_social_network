import React from 'react';
import style from './MyPosts.module.scss';
import Post from './Post/Post';
import NewPost from './NewPost/NewPost';

const MyPosts = (props) => (
  <section className={style.container}>
    <h2 className={style.title}>My posts</h2>
    <NewPost
      addPost={props.addPost}
      text={props.text}
      updateNewPostChange={props.updateNewPostChange}
    />
    <section className={style.posts}>
      {props.posts.map((post) => (
        <Post
          avatar={post.avatar}
          message={post.message}
          likes={post.likes}
          key={post.id}
        />
      ))}
    </section>
  </section>
);

export default MyPosts;
