import React from "react";

const Section = ({ id, children, className, ...rest }) => {
  return (
    <section
      {...rest}
      id={id}
      className={`${className}`}
      style={{ marginTop: "5rem" }}
    >
      {children}
    </section>
  );
};

export default Section;
