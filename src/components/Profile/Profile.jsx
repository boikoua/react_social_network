import React from 'react';
import style from './Profile.module.scss';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => (
  <section className={style.profile}>
    <div className={style.bg}></div>
    <div className={style.content}>
      <ProfileInfo />
      <MyPosts />
    </div>
  </section>
);

export default Profile;
