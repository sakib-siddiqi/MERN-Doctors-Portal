import React from "react";

const HomeTitle = ({ subTitle, Title, title_class, className }) => {
  return (
    <div className={className}>
      {subTitle && <h5 className="my-t-primary fw-md">{subTitle}</h5>}
      {Title && <h1 className={`my-t-dark fw-md ${title_class}`}>{Title}</h1>}
    </div>
  );
};

export default HomeTitle;
