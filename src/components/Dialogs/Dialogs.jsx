import React from 'react';
import style from './Dialogs.module.scss';
import DialogsUser from './DialogsUser/DialogsUser';
import DialogsMessage from './DialogsMessage/DialogsMessage';
import NewMessageContainer from './NewMessage/NewMessageContainer';

const Dialogs = (props) => {
  const usersFromStore = props.store.getState().dialogsPage.users;
  const messagesFromStore = props.store.getState().dialogsPage.messages;

  const userItems = usersFromStore.map((user) => (
    <DialogsUser
      avatar={user.avatar}
      id={user.id}
      name={user.name}
      key={user.id}
    />
  ));

  const messageItems = messagesFromStore.map((message) => (
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
            {messageItems} <NewMessageContainer store={props.store} />
          </section>
        </section>
      </div>
    </section>
  );
};

export default Dialogs;
