import MyDate from "./MyDate/MyDate";
import "./LogItem.css";
const LogItems = () => {
  return (
    <div className="item">
      <MyDate />
      <div className="content">
        <h2 className="desc">Learn REACT</h2>
        <div className="time">40 minutes</div>
      </div>
    </div>
  );
};

export default LogItems;
