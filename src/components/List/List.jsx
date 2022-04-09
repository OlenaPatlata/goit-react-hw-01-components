import s from "./List.module.css";
import ItemStatistics from "components/ItemStatistics/ItemStatistics";

import PropTypes from "prop-types";

const List = (props) => {
  const { array = [], direction } = props;
  return (
    <ul className={direction ? s.row : s.column}>
      {array.map((object) => {
        return (
          <ItemStatistics
            key={object.id}
            label={object.label}
            percentage={object.percentage}
          />
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
