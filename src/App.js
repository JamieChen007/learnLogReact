import Logs from "./Components/Logs/Logs";
import LogsForm from "./Components/LogsForm/LogsForm";
import "./App.css";
import { useState } from "react";
// import ConfirmModal from "./Components/UI/ConfirmModal/ConfirmModal";

const App = () => {
  const [data, setData] = useState([
    {
      desc: "Learn React",
      time: 20,
      date: new Date("December 17, 2022 03:24:00"),
    },
    { desc: "Learn JS", time: 30, date: new Date("June 18, 2023 03:24:00") },
    { desc: "Learn CSS", time: 50, date: new Date("May 06, 2023 03:24:00") },
  ]);

  const saveNewLogHandler = (newLog) => {
    // console.log(newLog);

    setData([newLog, ...data]);
  };

  // const delLogHandler = (index) => {
  //   const newData = [...data];
  //   newData.splice(index, 1);
  //   return setData(newData);
  // };

  const delLogByDescHandler = (desc) => {
    const newData = data.filter((item) => item.desc !== desc);
    return setData(newData);
  };

  const verifyLogHandler = (desc) => {
    let verifyRes = false;
    const verifyResArr = data.filter((item) => item.desc === desc);
    if (verifyResArr.length > 0) {
      verifyRes = true;
    }
    return verifyRes;
  };

  return (
    <div className="app">
      <LogsForm
        saveNewLogHandler={saveNewLogHandler}
        verifyLogHandler={verifyLogHandler}
      />
      <Logs data={data} delLogHandler={delLogByDescHandler} />
    </div>
  );
};

export default App;
