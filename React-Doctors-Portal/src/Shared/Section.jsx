import React from "react";

const Section = ({ id, children, className }) => {
  return (
    <section id={id} className={`${className} mt-5 mb-3`}>
      {children}
    </section>
  );
};

export default Section;
