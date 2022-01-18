import "./index.css";

const CustomButton = ({ onClick }: any) => {
  return (
    <div className="btn-wrapper">
      <button className="btn" onClick={onClick}>
        Click here
      </button>
    </div>
  );
};

export default CustomButton;
