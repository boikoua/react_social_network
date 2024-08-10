const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE';

const initialState = {
  messages: [
    { id: 1, text: 'Hello there!' },
    { id: 2, text: 'Good morning!' },
    { id: 3, text: "How's it going?" },
    { id: 4, text: 'Happy to see you!' },
    { id: 5, text: "What's up?" },
    { id: 6, text: 'Nice to meet you!' },
    { id: 7, text: 'Goodbye!' },
    { id: 8, text: 'Have a great day!' },
    { id: 9, text: 'See you soon!' },
    { id: 10, text: 'Take care!' },
    { id: 11, text: "What's new?" },
    { id: 12, text: 'Long time no see!' },
    { id: 13, text: "How's the weather?" },
    { id: 14, text: 'I like your profile picture!' },
    { id: 15, text: 'What are your plans?' },
  ],
  users: [
    { id: 1, name: 'Alice', avatar: 'https://i.pravatar.cc/150?img=41' },
    { id: 2, name: 'Bob', avatar: 'https://i.pravatar.cc/150?img=52' },
    { id: 3, name: 'Charlie', avatar: 'https://i.pravatar.cc/150?img=53' },
    { id: 4, name: 'Diana', avatar: 'https://i.pravatar.cc/150?img=34' },
    { id: 5, name: 'Eve', avatar: 'https://i.pravatar.cc/150?img=25' },
    { id: 6, name: 'Frank', avatar: 'https://i.pravatar.cc/150?img=56' },
    { id: 7, name: 'Grace', avatar: 'https://i.pravatar.cc/150?img=37' },
    { id: 8, name: 'Hank', avatar: 'https://i.pravatar.cc/150?img=58' },
    { id: 9, name: 'Ivy', avatar: 'https://i.pravatar.cc/150?img=19' },
    { id: 10, name: 'Jack', avatar: 'https://i.pravatar.cc/150?img=60' },
  ],
  newMessageText: '',
};

const dialogsReducer = (state = initialState, action) => {
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
