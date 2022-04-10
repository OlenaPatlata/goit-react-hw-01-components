import s from "./Table.module.css";
import LineTable from "components/LineTable/LineTable";

import PropTypes from "prop-types";

const Table = (props) => {
  const { array = [] } = props;
  return (
    <table className={s.transaction}>
      <thead>
        <tr>
          <th className={s.line}>Type</th>
          <th className={s.line}>Amount</th>
          <th className={s.line}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {array.map((object) => {
          return <LineTable key={object.id} object={object} />;
        })}
      </tbody>
    </table>
  );
};

Table.propTypes = {
  array: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.string.isRequired }).isRequired
  ).isRequired,
};

export default Table;
