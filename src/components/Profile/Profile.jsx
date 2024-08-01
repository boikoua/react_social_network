import React from 'react';
import style from './Profile.module.scss';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => (
  <section className={style.profile}>
    <div className={style.bg}></div>
    <div className={style.content}>
      <div>Ava + Description</div>

      <MyPosts />
    </div>
  </section>
);

export default Profile;
