import React from 'react';
import style from './MyPosts.module.scss';
import Post from './Post/Post';
import NewPostContainer from './NewPost/NewPostContainer';
import StoreContext from '../../../storeContext';

const MyPosts = (props) => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        const postsFromServer = store.getState().profilePage.posts;

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
            <NewPostContainer />
            <section className={style.posts}>{postsList}</section>
          </section>
        );
      }}
    </StoreContext.Consumer>
  );
};

export default MyPosts;
