type Props = {
  name?: string;
  label?: string;
};

const View = ({ name, label }: Props) => {
  return (
    <div className="recommended-wrapper">
      <div className="recommended-name">{name}</div>
      <div className="strikethrough"></div>
      <div className="recommended-label">{label}</div>
    </div>
  );
};

export default View;
