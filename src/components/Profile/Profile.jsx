import React from 'react';
import style from './Profile.module.scss';
import MyPosts from './MyPosts/MyPosts';

const Profile = (props) => (
  <section className={style.profile}>
    <div className={style.bg}></div>
    <div className={style.content}>
      <div>Ava + Description</div>

      <MyPosts posts={props.posts} />
    </div>
  </section>
);

export default Profile;
