const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const initialState = {
  posts: [
    {
      id: 1,
      avatar: 'https://i.pravatar.cc/150?img=1',
      message: 'This is a test message from user 1.',
      likes: 120040,
    },
    {
      id: 2,
      avatar: 'https://i.pravatar.cc/150?img=10',
      message: 'Here is another message from user 2.',
      likes: 99,
    },
    {
      id: 3,
      avatar: 'https://i.pravatar.cc/150?img=33',
      message: 'This is yet another message from user 3.',
      likes: 100,
    },
  ],
  newPostText: '',
};

const profileReducer = (state = initialState, action) => {
  if (action.type === ADD_POST) {
    // Проверка на пустое поле
    if (state.newPostText.trim().length > 0) {
      const newPost = {
        id: state.posts.length + 1,
        avatar: `https://i.pravatar.cc/150?img=${Math.floor(
          Math.random() * 50
        )}`,
        message: state.newPostText,
        likes: Math.floor(Math.random() * 1000),
      };

      state.posts.push(newPost);
    }
  } else if (action.type === UPDATE_NEW_POST_TEXT) {
    state.newPostText = action.newText;
  }

  return state;
};

// Action creator для объекта добавления поста
export const addPostActionCreator = () => {
  return {
    type: ADD_POST,
  };
};

// Action creator для объекта изменения текста поста
export const updateNewPostTextActionCreator = (text) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newText: text,
  };
};

export default profileReducer;
