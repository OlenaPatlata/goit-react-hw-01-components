import s from "./List.module.css";
import ItemStatistics from "components/ItemStatistics/ItemStatistics";
import getRandomHexColor from "components/util/RandomHexColor";

import PropTypes from "prop-types";

const List = (props) => {
  const { array = [], direction } = props;
  return (
    <ul className={direction ? s.row : s.column}>
      {array.map((object) => {
        return (
          <li
            key={object.id}
            className={s.item}
            style={{ backgroundColor: getRandomHexColor() }}
          >
            <ItemStatistics
              label={object.label}
              percentage={object.percentage}
            />
          </li>
        );
      })}
    </ul>
  );
};

List.propTypes = {
  array: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.string.isRequired }).isRequired
  ),
  direction: PropTypes.bool.isRequired,
};

export default List;
