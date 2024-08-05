import React from 'react';
import style from './NewPost.module.scss';

const NewPost = (props) => {
  const newPostElement = React.createRef();

  console.log(props);

  return (
    <form className={style.form} onSubmit={(event) => event.preventDefault()}>
      <textarea
        className={style.text}
        placeholder="You can write here your post..."
        value={props.text}
        onChange={() => props.updateNewPostChange(newPostElement.current.value)}
        ref={newPostElement}
      ></textarea>
      <button
        type="submit"
        className={style.btn}
        onClick={() => {
          props.addPost(newPostElement.current.value);
        }}
      >
        Add post
      </button>
    </form>
  );
};

export default NewPost;
