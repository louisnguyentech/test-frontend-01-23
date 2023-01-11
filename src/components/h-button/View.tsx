type Props = {
  label?: string;
  className?: string;
};

const View = ({ label, className }: Props) => {
  return (
    <div className={`${className} h-button-wrapper`}>
      <button>{label}</button>
    </div>
  );
};

export default View;
