import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// Функции обновления стейта
import store from './data/reduxStore';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

const rerenderTree = (state) => {
  root.render(
    <App state={state} store={store} dispatch={store.dispatch.bind(store)} />
  );
};

store.subscribe(() => rerenderTree(store.getState()));

rerenderTree(store.getState());
