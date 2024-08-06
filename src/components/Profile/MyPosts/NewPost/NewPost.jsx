import React from 'react';
import style from './NewPost.module.scss';

const NewPost = (props) => {
  const newPostElement = React.createRef();

  const handleSubmitFunc = (event) => {
    event.preventDefault();
    props.dispatch({ type: 'ADD-POST' });
    props.dispatch({ type: 'UPDATE-NEW-POST-CHANGE', newText: '' });
  };

  const handleChangeFunc = () => {
    props.dispatch({
      type: 'UPDATE-NEW-POST-CHANGE',
      newText: newPostElement.current.value,
    });
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
