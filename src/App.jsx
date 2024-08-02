import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import style from './App.module.scss';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';

import linksFromData from './data/links';
import postsFromData from './data/posts';
import usersFromData from './data/users';
import messagesFromData from './data/messages';

const App = () => {
  return (
    <BrowserRouter>
      <div className={style.app}>
        <Header />
        <main className={style.main}>
          <Navbar links={linksFromData} />

          <Routes>
            <Route
              path="/profile"
              element={<Profile posts={postsFromData} />}
            />
            <Route
              path="/messages/*"
              element={
                <Dialogs users={usersFromData} messages={messagesFromData} />
              }
            />
            <Route path="/news" element={<News />} />
            <Route path="/music" element={<Music />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
