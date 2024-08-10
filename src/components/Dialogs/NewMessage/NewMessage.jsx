import React from 'react';
import style from './NewMessage.module.scss';

const NewMessage = (props) => {
  const textareaElement = React.createRef();

  const handleSubmitFunc = (event) => {
    event.preventDefault();
    props.onAddMessage();
  };

  const handleChangeFunc = () => {
    const text = textareaElement.current.value;
    props.onChangeMessage(text);
  };

  return (
    <form className={style.form} onSubmit={handleSubmitFunc}>
      <textarea
        className={style.text}
        value={props.newMessageText}
        onChange={handleChangeFunc}
        placeholder="You can write your new message here..."
        ref={textareaElement}
      ></textarea>
      <button type="submit" className={style.btn}>
        Send
      </button>
    </form>
  );
};

export default NewMessage;
