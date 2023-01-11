type Props = {
  image?: string | null;
  label?: string;
  tags?: string[];
  name?: string;
};

const View = ({ image, label, tags, name }: Props) => {
  return (
    <div className="thumbnail-column-wrapper">
      <div className="thumbnail-column">
        <img src={image} alt="" />
        <div className="label">
          <span>{label}</span>
        </div>
      </div>

      <div className="name">{name}</div>
      <div className="tags">
        {tags.map((tag) => (
          <div className="tag">#{tag}</div>
        ))}
      </div>
    </div>
  );
};

export default View;
