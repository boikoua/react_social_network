import React from 'react';
import style from './DialogsMessage.module.scss';

const DialogsMessage = (props) => (
  <article className={style.message}>{props.message}</article>
);

export default DialogsMessage;
