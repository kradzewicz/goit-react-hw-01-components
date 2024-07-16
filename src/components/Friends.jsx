import css from '../css/Friends.module.css';
import PropTypes from 'prop-types';
import friends from '../data/friends.json';

export const Friends = () => {
  return (
    <ul className={css.friendsBox}>
      {friends.map(friend => {
        let onlineColor = '#ff0000';
        if (friend.isOnline) {
          onlineColor = '#008000';
          console.log(onlineColor);
        }
        return (
          <li className={css.friendsProfile} key={friend.id}>
            <span
              className={css.friendsStatus}
              style={{ backgroundColor: onlineColor }}
            >
              {friend.isOnline}
            </span>
            <img
              src={friend.avatar}
              alt="Friend avatar"
              className={css.friendsAvatar}
            />
            <p className={css.friendsName}>{friend.name}</p>
          </li>
        );
      })}
    </ul>
  );
};

Friends.propTypes = {
  name: PropTypes.string,
  avatar: PropTypes.string,
  id: PropTypes.string,
  isOnline: PropTypes.bool,
};
