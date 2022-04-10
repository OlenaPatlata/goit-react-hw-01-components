import s from "./List.module.css";
import ItemStatistics from "components/ItemStatistics/ItemStatistics";
import ItemFriends from "components/ItemFriends/ItemFriends";

import PropTypes from "prop-types";

const List = (props) => {
  const { array = [], direction } = props;
  return (
    <ul className={direction ? s.row : s.column}>
      {array.map((object) => {
        if (direction) {
          return <ItemStatistics key={object.id} object={object} />;
        }
        if (!direction) {
          return <ItemFriends key={object.id} object={object} />;
        }
      })}
    </ul>
  );
};

List.propTypes = {
  array: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.node.isRequired }).isRequired
  ).isRequired,
  direction: PropTypes.bool.isRequired,
};

export default List;
