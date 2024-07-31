import React from 'react';
import style from './App.module.scss';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';

import linksFromData from './data/links';
import Content from './components/Content/Content';

const App = () => {
  return (
    <div className={style.app}>
      <Header />
      <main className={style.main}>
        <Navbar links={linksFromData} />

        <Content />
      </main>
    </div>
  );
};

export default App;
