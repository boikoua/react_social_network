import React from 'react';
import style from './App.module.scss';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';

import linksFromData from './data/links';
import Profile from './components/Profile/Profile';

const App = () => {
  return (
    <div className={style.app}>
      <Header />
      <main className={style.main}>
        <Navbar links={linksFromData} />

        <Profile />
      </main>
    </div>
  );
};

export default App;
