import css from '../css/User.module.css';
import PropTypes from 'prop-types';
import user from '../data/user.json';

export const Profile = () => {
  const { username, tag, location, avatar, stats } = user;

  return (
    <div className={css.profileBox}>
      <div>
        <img src={avatar} alt="User avatar" className={css.avatar} />
        <div className={css.profile}>
          <h3>{username}</h3>
          <p>@{tag}</p>
          <p>{location}</p>
        </div>
      </div>
      <ul className={css.statsBox}>
        <li className={css.stats}>
          <h4>Followers</h4>
          <span>{stats.followers}</span>
        </li>
        <li className={css.stats}>
          <h4>Views</h4>
          <span>{stats.views}</span>
        </li>
        <li className={css.stats}>
          <h4>Likes</h4>
          <span>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.objectOf(PropTypes.number),
};
