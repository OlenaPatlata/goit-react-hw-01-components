import s from "./ItemStatistics.module.css";
import getRandomHexColor from "components/util/RandomHexColor";
import PropTypes from "prop-types";

const ItemStatistics = (props) => {
  const { label, percentage } = props;
  return (
    <li className={s.item} style={{ backgroundColor: getRandomHexColor() }}>
      <span className={s.label}>{label}</span>
      <span className={s.percentage}>{percentage}%</span>
    </li>
  );
};

ItemStatistics.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default ItemStatistics;
