import { useState } from "react";
import "./styles.css";
import Settings from "./components/settings";
import CustomButton from "./components/custom_button";

export default function App() {
  const [showSettings, setShowSettings] = useState(false);
  return (
    <>
      <CustomButton onClick={() => setShowSettings(!showSettings)}>
        Settings
      </CustomButton>
      <Settings showSettings={showSettings} />
    </>
  );
}
