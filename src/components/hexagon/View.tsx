import React from "react";

type Props = {
  icon?: string | null;
  label?: string;
};

const View = ({ icon, label }: Props) => {
  return (
    <div className="hexagon-wrapper">
      {/* <img src="/assets/images/components/hexagon.svg" alt="" /> */}
      <div className="hexagon-content">
        <div className="hexagon-icon">
          <img src={icon} alt="" />
        </div>
        <div className="hexagon-label">{label}</div>
      </div>
    </div>
  );
};

export default View;
