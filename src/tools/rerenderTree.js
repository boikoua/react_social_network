import React from 'react';
import ReactDOM from 'react-dom/client';
// Функция обновления стейта
import { addMessage, addPost } from '../data/state';
import App from '../App';

export const rerenderTree = (state) => {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <App
      links={state.links}
      posts={state.posts}
      users={state.users}
      messages={state.messages}
      addPost={addPost}
      addMessage={addMessage}
    />
  );
};
