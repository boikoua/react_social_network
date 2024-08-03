import React from 'react';
import style from './NewPost.module.scss';

const NewPost = () => {
  return (
    <form className={style.form}>
      <textarea
        name=""
        id=""
        className={style.text}
        placeholder="You can write here your post..."
      ></textarea>
      <button type="submit" className={style.btn}>
        Add post
      </button>
    </form>
  );
};

export default NewPost;
