import React from 'react';
import style from './NewPost.module.scss';

const NewPost = () => {
  const newPostElement = React.createRef();

  return (
    <form className={style.form} onSubmit={(event) => event.preventDefault()}>
      <textarea
        className={style.text}
        placeholder="You can write here your post..."
        defaultValue={'320943029dsfkl;klsldf;ldsfsfd'}
        ref={newPostElement}
      ></textarea>
      <button
        type="submit"
        className={style.btn}
        onClick={() => console.log(newPostElement.current.defaultValue)}
      >
        Add post
      </button>
    </form>
  );
};

export default NewPost;
