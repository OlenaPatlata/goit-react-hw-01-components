import React from "react";
import s from "./Section.module.css";
import PropTypes from "prop-types";

const Section = (props) => {
  const { title, children } = props;

  return (
    <section className={s.wrapper}>
      {title && <h2 className={s.title}>{title}</h2>}
      {children}
    </section>
  );
};
Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Section;
