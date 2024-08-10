import React from 'react';
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from '../../../../data/profileReducer';
import NewPost from './NewPost';
import StoreContext from '../../../../storeContext';

const NewPostContainer = (props) => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        const addPost = () => {
          store.dispatch(addPostActionCreator());
          store.dispatch(updateNewPostTextActionCreator(''));
        };

        const onPostChange = (text) => {
          const action = updateNewPostTextActionCreator(text);
          store.dispatch(action);
        };

        return (
          <NewPost
            onPostChange={onPostChange}
            addPost={addPost}
            text={store.getState().profilePage.newPostText}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};

export default NewPostContainer;
