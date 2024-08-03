import React from 'react';
import style from './DialogsMessage.module.scss';

const DialogsMessage = (props) => (
  <div className={style.wrapper}>
    <div className={style.avatar}></div>
    <article className={style.message}>{props.message}</article>
  </div>
);

export default DialogsMessage;
