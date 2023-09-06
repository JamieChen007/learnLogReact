import LogItems from "./LogItem/LogItem";
import "./Logs.css";
import Card from "../UI/Card/Card";
import LogFilter from "./LogFilter/LogFilter";
import { useState } from "react";

const Logs = (props) => {
  const [year, setYear] = useState(2023);

  const yearChangeHandler = (year) => {
    setYear(year);
  };

  const filterData = props.data.filter(
    (item) => item.date.getFullYear() === year
  );

  // const desc = "dssd";

  // const time = 20;

  // const date = new Date("December 17, 2022 03:24:00");

  const logItemData = filterData.map((item, index) => {
    return (
      // <LogItems
      //   desc={item.desc}
      //   time={item.time + " minutes"}
      //   date={item.date}
      // />
      <LogItems
        delLogHandler={() => props.delLogHandler(item.desc)}
        {...item}
        key={item.desc}
      />
    );
  });

  // console.log(logItemData);

  return (
    <Card className="logs">
      <LogFilter year={year} onYearChange={yearChangeHandler} />
      {logItemData.length !== 0 ? logItemData : <p>no data found</p>}
    </Card>
  );
};

export default Logs;
