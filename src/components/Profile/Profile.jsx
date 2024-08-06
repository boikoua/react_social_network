import React from 'react';
import style from './Profile.module.scss';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => (
  <section className={style.profile}>
    <div className={style.bg}></div>
    <div className={style.content}>
      <ProfileInfo />
      <MyPosts
        posts={props.posts}
        text={props.text}
        dispatch={props.dispatch}
      />
    </div>
  </section>
);

export default Profile;
