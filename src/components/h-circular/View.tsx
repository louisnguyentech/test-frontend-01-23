import {
  buildStyles,
  CircularProgressbarWithChildren,
} from "react-circular-progressbar";

type Props = {
  value?: number;
  date?: string;
};

const View = ({ value, date }: Props) => {
  return (
    <CircularProgressbarWithChildren
      value={value}
      styles={buildStyles({
        textColor: "#ffffff",
        pathColor: "#ffffff",
        trailColor: "transparent",
      })}
      strokeWidth={2}
    >
      <div className="h-circular">
        <span className="date">{date}</span>
        <span className="value">{value}%</span>
      </div>
    </CircularProgressbarWithChildren>
  );
};

export default View;
