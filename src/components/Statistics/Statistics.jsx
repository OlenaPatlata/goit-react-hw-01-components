import s from "./Statistics.module.css";
import ItemStatistics from "components/ItemStatistics/ItemStatistics";
import data from "db/data";
import PropTypes from "prop-types";

const Statistics = (title, { items = [] }) => {
  //   const { id, label, percentage } = stats;
  console.log(items);
  return (
    <section className={s.statistics}>
      {title ? <h2 className={s.title}>{title}</h2> : ""}
      <ul className={s.list}>
        {items.map(function (item) {
          <ItemStatistics stats={data} />;
        })}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  // stats: PropTypes.arrayOf(
  //   PropTypes.shape({
  //     id: PropTypes.string.isRequired,
  //     label: PropTypes.string.isRequired,
  //     percentage: PropTypes.string.isRequired,
  //   }).isRequired
  // ),
};

export default Statistics;
