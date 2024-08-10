import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// Функции обновления стейта
import store from './data/reduxStore';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import StoreContext from './storeContext';

const root = ReactDOM.createRoot(document.getElementById('root'));

const rerenderTree = (state) => {
  root.render(
    <BrowserRouter>
      <StoreContext.Provider value={store}>
        <App />
      </StoreContext.Provider>
    </BrowserRouter>
  );
};

store.subscribe(() => rerenderTree(store.getState()));

rerenderTree(store.getState());
