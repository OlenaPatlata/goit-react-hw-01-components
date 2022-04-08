import s from "./Statistics.module.css";
import getRandomHexColor from "components/util/RandomHexColor";

import PropTypes from "prop-types";

const Statistics = (props) => {
  const { title, stats } = props;
  const { id, label, percentage } = stats;
  return (
    <section className={s.statistics}>
      {title ? <h2 className={s.title}>Upload stats</h2> : ""}
      <ul className={s.list}>
        <li className={s.item} style={{ backgroundColor: getRandomHexColor() }}>
          <span className={s.label}>.docx</span>
          <span className={s.percentage}>4%</span>
        </li>
        <li className={s.item}>
          <span className={s.label}>.mp3</span>
          <span className={s.percentage}>14%</span>
        </li>
        <li className={s.item}>
          <span className={s.label}>.pdf</span>
          <span className={s.percentage}>41%</span>
        </li>
        <li className={s.item}>
          <span className={s.label}>.mp4</span>
          <span className={s.percentage}>12%</span>
        </li>
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.string.isRequired,
    }).isRequired
  ),
};

export default Statistics;
