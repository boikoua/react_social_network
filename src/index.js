import React from 'react';
import ReactDOM from 'react-dom/client';
import state, { subscribe } from './data/state';
import './index.css';
// Функции обновления стейта
import {
  addMessage,
  addPost,
  updateNewMessage,
  updateNewPostChange,
} from './data/state';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

const rerenderTree = () => {
  root.render(
    <App
      links={state.links}
      posts={state.posts}
      users={state.users}
      messages={state.messages}
      addPost={addPost}
      addMessage={addMessage}
      newPostText={state.newPostText}
      updateNewPostChange={updateNewPostChange}
      newMessageText={state.newMessageText}
      updateNewMessage={updateNewMessage}
    />
  );
};

subscribe(rerenderTree);

rerenderTree();
