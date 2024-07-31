import React from 'react';
import style from './App.module.scss';

const App = () => {
  return (
    <div className={style.app}>
      <header className={style.header}>
        <p className={style.logo}>Social Network</p>
      </header>

      <main className={style.main}>
        <nav className={style.nav}>
          <ul className={style.items}>
            <li className={style.item}>
              <a href="https://google.com" className={style.link}>
                Profile
              </a>
            </li>
            <li className={style.item}>
              <a href="https://google.com" className={style.link}>
                Messages
              </a>
            </li>
            <li className={style.item}>
              <a href="https://google.com" className={style.link}>
                News
              </a>
            </li>
            <li className={style.item}>
              <a href="https://google.com" className={style.link}>
                Music
              </a>
            </li>
            <li className={style.item}>
              <a href="https://google.com" className={style.link}>
                Settings
              </a>
            </li>
          </ul>
        </nav>

        <section className={style.content}>
          <div className={style.bg}></div>

          <div>Ava + Description</div>
          <div>My posts</div>
          <div>New post</div>
          <div>Post 1</div>
          <div>Post 2</div>
        </section>
      </main>
    </div>
  );
};

export default App;
