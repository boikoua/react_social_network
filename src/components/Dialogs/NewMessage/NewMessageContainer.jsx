import React from 'react';
import {
  addMessageActionCreator,
  updateNewMessageActionCreator,
} from '../../../data/dialogsReducer';
import NewMessage from './NewMessage';
import StoreContext from '../../../storeContext';

const NewMessageContainer = (props) => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        const newMessageText = store.getState().dialogsPage.newMessageText;

        const onAddMessage = () => {
          store.dispatch(addMessageActionCreator());
          store.dispatch(updateNewMessageActionCreator(''));
        };

        const onChangeMessage = (text) => {
          const action = updateNewMessageActionCreator(text);
          store.dispatch(action);
        };
        return (
          <NewMessage
            onChangeMessage={onChangeMessage}
            onAddMessage={onAddMessage}
            newMessageText={newMessageText}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};

export default NewMessageContainer;
