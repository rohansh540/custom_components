import { useState } from "react";
import "./styles.css";
import Settings from "./components/settings";
import CustomButton from "./components/custom_button";
import CustomCheckbox from "./components/custom_checkbox";

export default function App() {
  const [showSettings, setShowSettings] = useState(false);
  const [checked, setChecked] = useState(false);
  return (
    <div className="App">
      {/* <CustomButton onClick={() => setShowSettings(!showSettings)}>
        Settings
      </CustomButton>
      <Settings showSettings={showSettings} /> */}
      <CustomCheckbox checked={checked} onChange={() => setChecked(!checked)} />
    </div>
  );
}
