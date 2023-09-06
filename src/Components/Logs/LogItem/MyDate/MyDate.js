import "./MyDate.css";

const MyDate = (props) => {
  const month = props.date.toLocaleDateString("en-au", { month: "short" });

  const date = props.date.getDate();

  return (
    <div className="date">
      <div className="month">{month}</div>
      <div className="day">{date}</div>
    </div>
  );
};

export default MyDate;
