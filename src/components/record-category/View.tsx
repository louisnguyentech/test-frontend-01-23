import React from "react";

type Props = {
  name?: string;
  label?: string;
  image?: string;
};

const View = ({ name, label, image }: Props) => {
  return (
    <div className="record-category-wrapper">
      <div className="record-category">
        <div
          className="record-category-bg"
          style={{ backgroundImage: `url(${image})` }}
        ></div>
        <div className="record-category-content">
          <div className="record-category-content-name">{name}</div>
          <div className="record-category-content-label">{label}</div>
        </div>
      </div>
    </div>
  );
};

export default View;
