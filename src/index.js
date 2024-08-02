import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// Данные из сервера
import stateFromData from './data/state';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App
    links={stateFromData.links}
    posts={stateFromData.posts}
    users={stateFromData.users}
    messages={stateFromData.messages}
  />
);
