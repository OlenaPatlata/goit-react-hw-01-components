import s from "./ItemFriends.module.css";
import PropTypes from "prop-types";

const ItemFriends = ({ object }) => {
  const { avatar, name, isOnline } = object;
  return (
    <li className={s.item}>
      <span className={isOnline ? s.online : s.offline}></span>
      <img className={s.avatar} src={avatar} alt={name} width="48" />
      <p className={s.name}>{name}</p>
    </li>
  );
};
ItemFriends.propTypes = {
  object: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }).isRequired,
};

export default ItemFriends;
