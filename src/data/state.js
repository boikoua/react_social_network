import { rerenderTree } from '../tools/rerenderTree';

const state = {
  links: [
    {
      id: 1,
      text: 'Profile',
      icon: 'img/icons/icon-profile.png',
    },
    {
      id: 2,
      text: 'Messages',
      icon: 'img/icons/icon-message.png',
    },
    {
      id: 3,
      text: 'News',
      icon: 'img/icons/icon-news.png',
    },
    {
      id: 4,
      text: 'Music',
      icon: 'img/icons/icon-music.png',
    },
    {
      id: 5,
      text: 'Settings',
      icon: 'img/icons/icon-settings.png',
    },
  ],
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
  newPostText: '',
  newMessageText: '',
};
// Слежка за каждым символом ввода текста поста
export const updateNewPostChange = (newText) => {
  state.newPostText = newText;
  rerenderTree(state);
};
// Слежка за каждым символом ввода сообщения
export const updateNewMessage = (newMessage) => {
  state.newMessageText = newMessage;
  rerenderTree(state);
};

// Функция добавления нового поста в стейт
export const addPost = (postText) => {
  const newPost = {
    id: state.posts.length + 1,
    avatar: `https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 50)}`,
    message: postText,
    likes: Math.floor(Math.random() * 1000),
  };

  state.posts.push(newPost);
  rerenderTree(state);
};

// Функция добавления нового сообщения в стейт
export const addMessage = (messageText) => {
  const newMessage = {
    id: state.messages.length + 1,
    text: messageText,
  };

  state.messages.push(newMessage);
  rerenderTree(state);
};

export default state;
