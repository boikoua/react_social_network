import React from 'react';
import style from './NewMessage.module.scss';

const NewMessage = (props) => {
  const textareaElement = React.createRef();

  // Функция обработчик обновления формы
  const handleSubmitFunc = (event) => {
    event.preventDefault();
    props.dispatch({ type: 'ADD-MESSAGE' });
    props.dispatch({ type: 'UPDATE-NEW-MESSAGE', newMessage: '' });
  };

  const handleChangeFunc = () => {
    props.dispatch({
      type: 'UPDATE-NEW-MESSAGE',
      newMessage: textareaElement.current.value,
    });
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
