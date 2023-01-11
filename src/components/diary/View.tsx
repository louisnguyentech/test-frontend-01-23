type Props = {
  name?: string;
  time?: string;
  description?: string;
};

const View = ({ name, description, time }: Props) => {
  return (
    <div className="diary-wrapper">
      <div className="date-time">
        <span>{time.split(" ")[0]}</span>
        <br />
        <span>{time.split(" ")[1]}</span>
      </div>
      <div className="name">{name}</div>
      <div className="description">{description}</div>
    </div>
  );
};

export default View;
