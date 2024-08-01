import React from 'react';
import style from './Settings.module.scss';

const Settings = (props) => (
  <section className={style.settings}>
    <div className={style.bg}></div>
    <div className={style.content}>
      <h2 className={style.title}>Settings</h2>
    </div>
  </section>
);

export default Settings;
