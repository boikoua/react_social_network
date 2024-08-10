import React from 'react';
import {
  addMessageActionCreator,
  updateNewMessageActionCreator,
} from '../../../data/dialogsReducer';
import NewMessage from './NewMessage';

const NewMessageContainer = (props) => {
  const newMessageText = props.store.getState().dialogsPage.newMessageText;

  const onAddMessage = () => {
    props.store.dispatch(addMessageActionCreator());
    props.store.dispatch(updateNewMessageActionCreator(''));
  };

  const onChangeMessage = (text) => {
    const action = updateNewMessageActionCreator(text);
    props.store.dispatch(action);
  };

  return (
    <NewMessage
      onChangeMessage={onChangeMessage}
      onAddMessage={onAddMessage}
      newMessageText={newMessageText}
    />
  );
};

export default NewMessageContainer;
