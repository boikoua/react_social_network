import React from 'react';
import style from './Dialogs.module.scss';

const Dialogs = (props) => (
  <section className={style.dialogs}>
    <div className={style.bg}></div>
    <div className={style.content}>
      <h2 className={style.title}>Dialogs</h2>
    </div>
  </section>
);

export default Dialogs;
