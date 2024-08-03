import style from './Friends.module.scss';

const Friends = (props) => {
  const usersItem = props.users.map((user) => (
    <li className={style.friend} key={user.id}>
      <img src={user.avatar} alt={user.name} />
    </li>
  ));

  return (
    <section className={style.container}>
      <h3 className={style.title}>Friends</h3>

      <ul className={style.friends}>{usersItem}</ul>
    </section>
  );
};
export default Friends;
