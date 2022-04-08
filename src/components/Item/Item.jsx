const Item = (props) => {
  return array.map((elem) => (
    <li className={s.item} style={{ backgroundColor: getRandomHexColor() }}>
      <span className={s.label}>.docx</span>
      <span className={s.percentage}>4%</span>
    </li>
  ));
};

export default Item;
