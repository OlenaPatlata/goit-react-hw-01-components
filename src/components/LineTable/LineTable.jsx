import s from "./LineTable.module.css";
import PropTypes from "prop-types";

const LineTable = ({ object }) => {
  const { type, amount, currency } = object;
  return (
    <tr>
      <td className={s.line}>{type}</td>
      <td className={s.line}>{amount}</td>
      <td className={s.line}>{currency}</td>
    </tr>
  );
};
LineTable.propTypes = {
  object: PropTypes.shape({
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
  }).isRequired,
};

export default LineTable;
