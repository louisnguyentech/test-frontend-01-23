type Props = {
  image?: string | null;
  label?: string;
};

const View = ({ image, label }: Props) => {
  return (
    <div className="thumbnail-wrapper">
      <img src={image} alt="" />
      <div className="label">
        <span>{label}</span>
      </div>
    </div>
  );
};

export default View;
