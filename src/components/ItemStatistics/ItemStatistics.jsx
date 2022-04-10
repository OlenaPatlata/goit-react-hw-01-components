import s from "./ItemStatistics.module.css";
import getRandomHexColor from "components/util/RandomHexColor";
import PropTypes from "prop-types";

const ItemStatistics = ({ object }) => {
  const { label, percentage } = object;
  return (
    <li className={s.item} style={{ backgroundColor: getRandomHexColor() }}>
      <span className={s.label}>{label}</span>
      <span className={s.percentage}>{percentage}%</span>
    </li>
  );
};

ItemStatistics.propTypes = {
  object: PropTypes.shape({
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }).isRequired,
};

export default ItemStatistics;
