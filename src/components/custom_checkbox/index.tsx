import { ChangeEventHandler } from "react";
import "./index.css";

interface Props {
  checked: boolean;
  onChange: ChangeEventHandler;
}

const CustomCheckbox = ({ checked, onChange }: Props) => {
  return (
    <div className="container">
      <input type="checkbox" onChange={onChange} checked={checked} />
      <label>Check here</label>
    </div>
  );
};

export default CustomCheckbox;
