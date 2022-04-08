import user from "db/user";

import s from "./Profile.module.css";
import PropTypes from "prop-types";

const Profile = (props) => {
  const { username, tag, location, avatar, stats } = props;

  return (
    <div className={s.wrapper}>
      <div className={s.profile}>
        <div className={s.description}>
          <img src={avatar} alt={username} className={s.avatar} />
          <p className={s.username}>{username}</p>
          <p className={s.tag}>@{tag}</p>
          <p className={s.location}>{location}</p>
        </div>
        <ul className={s.stats}>
          <li className={s.item}>
            <span className={s.label}>Followers</span>
            <span className={s.quantity}>{stats.followers}</span>
          </li>
          <li className={s.item}>
            <span className={s.label}>Views</span>
            <span className={s.quantity}>{stats.views}</span>
          </li>
          <li className={s.item}>
            <span className={s.label}>Likes</span>
            <span className={s.quantity}>{stats.likes}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(
    PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }).isRequired
  ),
};

export default Profile;
