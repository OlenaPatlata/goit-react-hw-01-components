import s from "./ItemStatistics.module.css";
import getRandomHexColor from "components/util/RandomHexColor";

import PropTypes from "prop-types";

const ItemStatistics = (props) => {
  const { stats } = props;
  const { id, label, percentage } = stats;
  return (
    <li
      key={id}
      className={s.item}
      style={{ backgroundColor: getRandomHexColor() }}
    >
      <span className={s.label}>{label}</span>
      <span className={s.percentage}>{percentage}%</span>
    </li>
  );
};

ItemStatistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default ItemStatistics;
