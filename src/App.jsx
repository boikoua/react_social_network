import React from 'react';
import style from './App.module.scss';

const App = () => {
  return (
    <div className={style.app}>
      <header className={style.header}>
        <p className={style.logo}>Social Network</p>
      </header>
      <main className="main">
        <nav className="nav">
          <ul className="nav__items">
            <li className="nav__item">
              <a href="#" className="nav__link">
                Profile
              </a>
            </li>
            <li className="nav__item">
              <a href="#" className="nav__link">
                Messages
              </a>
            </li>
            <li className="nav__item">
              <a href="#" className="nav__link">
                News
              </a>
            </li>
            <li className="nav__item">
              <a href="#" className="nav__link">
                Music
              </a>
            </li>
            <li className="nav__item">
              <a href="#" className="nav__link">
                Settings
              </a>
            </li>
          </ul>
        </nav>

        <section className="content">Main Content</section>
      </main>
    </div>
  );
};

export default App;
