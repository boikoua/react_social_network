const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE';

const dialogsReducer = (state, action) => {
  if (action.type === ADD_MESSAGE) {
    // Проверка на пустое поле
    if (state.newMessageText.trim().length > 0) {
      const newMessage = {
        id: state.messages.length + 1,
        text: state.newMessageText,
      };

      state.messages.push(newMessage);
    }
  } else if (action.type === UPDATE_NEW_MESSAGE) {
    state.newMessageText = action.newMessage;
  }

  return state;
};

// Action creator для объекта добавления мообщения
export const addMessageActionCreator = () => {
  return {
    type: ADD_MESSAGE,
  };
};

// Action creator для объекта изменения текста сообщения
export const updateNewMessageActionCreator = (text) => {
  return {
    type: UPDATE_NEW_MESSAGE,
    newMessage: text,
  };
};

export default dialogsReducer;
