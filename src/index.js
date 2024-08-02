import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// Данные из сервера
import linksFromData from './data/links';
import postsFromData from './data/posts';
import usersFromData from './data/users';
import messagesFromData from './data/messages';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App
    links={linksFromData}
    posts={postsFromData}
    users={usersFromData}
    messages={messagesFromData}
  />
);
