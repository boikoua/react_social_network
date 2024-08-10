import React from 'react';
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from '../../../../data/profileReducer';
import NewPost from './NewPost';

const NewPostContainer = (props) => {
  const newPostText = props.store.getState().profilePage.newPostText;

  const addPost = () => {
    props.store.dispatch(addPostActionCreator());
    props.store.dispatch(updateNewPostTextActionCreator(''));
  };

  const onPostChange = (text) => {
    const action = updateNewPostTextActionCreator(text);
    props.store.dispatch(action);
  };

  return (
    <NewPost onPostChange={onPostChange} addPost={addPost} text={newPostText} />
  );
};

export default NewPostContainer;
