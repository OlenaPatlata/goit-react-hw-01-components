import s from "./ItemStatistics.module.css";
import PropTypes from "prop-types";

const ItemStatistics = (props) => {
  const { label, percentage } = props;
  return (
    <>
      <span className={s.label}>{label}</span>
      <span className={s.percentage}>{percentage}%</span>
    </>
  );
};

ItemStatistics.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default ItemStatistics;
