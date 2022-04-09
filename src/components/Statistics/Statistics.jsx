import s from "./Statistics.module.css";
import ItemStatistics from "components/ItemStatistics/ItemStatistics";

import PropTypes from "prop-types";

const Statistics = (props) => {
  const { array = [] } = props;
  return (
    <>
      <ul className={s.list}>
        {array.map((item) => {
          return (
            <ItemStatistics
              key={item.id}
              label={item.label}
              percentage={item.percentage}
            />
          );
        })}
      </ul>
    </>
  );
};

Statistics.propTypes = {
  array: PropTypes.arrayOf(PropTypes.shape({}).isRequired),
};

export default Statistics;
