import { useState } from "react";
import "./styles.css";
import Settings from "./components/settings";

export default function App() {
  const [showSettings, setShowSettings] = useState(false);
  return (
    <>
      <button onClick={() => setShowSettings(!showSettings)}>Settings</button>
      <Settings showSettings={showSettings} />
    </>
  );
}
