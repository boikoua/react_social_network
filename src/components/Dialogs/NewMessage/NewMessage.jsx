import React from 'react';
import style from './NewMessage.module.scss';

const NewMessage = (props) => {
  const textareaElement = React.createRef();

  // Функция обработчик обновления формы
  const handleSubmitFunc = (event) => {
    event.preventDefault();
    props.addMessage(textareaElement.current.value);
    props.updateNewMessage('');
  };

  return (
    <form className={style.form} onSubmit={handleSubmitFunc}>
      <textarea
        className={style.text}
        value={props.newMessageText}
        onChange={() => props.updateNewMessage(textareaElement.current.value)}
        placeholder="You can write your new message here..."
        ref={textareaElement}
      ></textarea>
      <button className={style.btn}>Send</button>
    </form>
  );
};

export default NewMessage;
