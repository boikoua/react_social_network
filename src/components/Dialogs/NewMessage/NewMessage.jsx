import React from 'react';
import style from './NewMessage.module.scss';

const NewMessage = (props) => {
  const textareaElement = React.createRef();

  return (
    <form
      className={style.form}
      onSubmit={(event) => {
        event.preventDefault();
        props.addMessage(textareaElement.current.value);
      }}
    >
      <textarea
        className={style.text}
        placeholder="You can write your new message here..."
        ref={textareaElement}
      ></textarea>
      <button
        className={style.btn}
        onClick={() => console.log(textareaElement.current.placeholder)}
      >
        Send
      </button>
    </form>
  );
};

export default NewMessage;
