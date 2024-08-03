import React from 'react';
import style from './Dialogs.module.scss';
import DialogsUser from './DialogsUser/DialogsUser';
import DialogsMessage from './DialogsMessage/DialogsMessage';
import NewMessage from './NewMessage/NewMessage';
import { addMessage } from '../../data/state';

const Dialogs = (props) => {
  // Отображаем юзеров с помощью МАР
  const userItems = props.users.map((user) => (
    <DialogsUser
      avatar={user.avatar}
      id={user.id}
      name={user.name}
      key={user.id}
    />
  ));

  // Отображаем сообщения с помощью МАР
  const messageItems = props.messages.map((message) => (
    <DialogsMessage message={message.text} key={message.id} />
  ));

  return (
    <section className={style.dialogs}>
      <div className={style.bg}></div>
      <div className={style.content}>
        <h2 className={style.title}>Dialogs</h2>

        <section className={style.wrapper}>
          <section className={style.users}>{userItems}</section>

          <section className={style.messages}>
            {messageItems} <NewMessage addMessage={addMessage} />
          </section>
        </section>
      </div>
    </section>
  );
};

export default Dialogs;
