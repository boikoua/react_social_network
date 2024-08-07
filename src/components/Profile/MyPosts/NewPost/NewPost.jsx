import React from 'react';
import style from './NewPost.module.scss';
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from '../../../../data/profileReducer';

const NewPost = (props) => {
  const newPostElement = React.createRef();

  const handleSubmitFunc = (event) => {
    event.preventDefault();
    props.dispatch(addPostActionCreator());
    props.dispatch(updateNewPostTextActionCreator(''));
  };

  const handleChangeFunc = () => {
    props.dispatch(
      updateNewPostTextActionCreator(newPostElement.current.value)
    );
  };

  return (
    <form className={style.form} onSubmit={handleSubmitFunc}>
      <textarea
        className={style.text}
        placeholder="You can write here your post..."
        value={props.text}
        onChange={handleChangeFunc}
        ref={newPostElement}
      ></textarea>
      <button type="submit" className={style.btn}>
        Add post
      </button>
    </form>
  );
};

export default NewPost;
