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

const App = (props) => {
  return (
    <BrowserRouter>
      <div className={style.app}>
        <Header />
        <main className={style.main}>
          <Navbar links={props.state.links} users={props.state.users} />

          <Routes>
            <Route
              path="/profile"
              element={
                <Profile
                  posts={props.state.posts}
                  updateNewPostChange={props.updateNewPostChange}
                  addPost={props.addPost}
                  text={props.state.newPostText}
                />
              }
            />
            <Route
              path="/messages/*"
              element={
                <Dialogs
                  users={props.state.users}
                  messages={props.state.messages}
                  addMessage={props.addMessage}
                  newMessageText={props.state.newMessageText}
                  updateNewMessage={props.updateNewMessage}
                />
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
