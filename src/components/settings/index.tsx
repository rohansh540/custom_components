import "./index.css";

const Row = ({ index, label }: object) => {
  const className = index % 2 === 0 ? "row-even" : "row-odd";
  return <div className={className}>{label}</div>;
};

const Settings = ({ showSettings }: object) => {
  const settingList = [
    "Lobby",
    "Leave Seat",
    "Table Themes",
    "Leader Boards",
    "Table Information"
  ];
  if (showSettings) return null;
  return (
    <div className="settings-dialog">
      {settingList.length &&
        settingList.map((row, index) => {
          return <Row index={index} label={row} />;
        })}
    </div>
  );
};

export default Settings;
