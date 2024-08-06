import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// Функции обновления стейта
import store from './data/state';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

const rerenderTree = (state) => {
  root.render(
    <App state={store.getState()} dispatch={store.dispatch.bind(store)} />
  );
};

store.subscribe(rerenderTree);

rerenderTree(store.getState());
