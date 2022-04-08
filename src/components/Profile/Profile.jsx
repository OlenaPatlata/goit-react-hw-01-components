import user from "db/user";

import s from "./Profile.module.css";
import PropTypes from "prop-types";

const Profile = (props) => {
  const { username, tag, location, avatar, stats } = props;

  return (
    <div className={s.wrapper}>
      <div className="profile">
        <div className="description">
          <img src={avatar} alt={username} className="avatar" />
          <p className={username}>{username}</p>
          <p className={location}>{location}</p>
        </div>
      </div>
    </div>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
};

export default Profile;
