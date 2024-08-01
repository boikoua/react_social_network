import React from 'react';
import style from './Profile.module.scss';

const Profile = () => (
  <section className={style.profile}>
    <div className={style.bg}></div>

    <div>Ava + Description</div>
    <div>My posts</div>
    <div>New post</div>
    <div>Post 1</div>
    <div>Post 2</div>
  </section>
);

export default Profile;
