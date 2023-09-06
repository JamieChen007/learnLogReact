import { useState } from "react";
import Card from "../UI/Card/Card";
import "./LogsForm.css";
import TipsModal from "../UI/TipsModal/TipsModal";

const LogsForm = (props) => {
  const [tipsModalDisplay, setTipsModalDisplay] = useState({
    type: "",
    display: false,
  });

  const tipsConfirmHandler = () => {
    setTipsModalDisplay({ ...tipsModalDisplay, display: false });
    setInputDate("");
    setInputDesc("");
    setInputTime("");
  };

  //   let inputDate = "";
  //   let inputDesc = "";
  //   let inputTime = 0;

  const [inputDate, setInputDate] = useState("");
  const [inputDesc, setInputDesc] = useState("");
  const [inputTime, setInputTime] = useState("");

  function dateChangHandler(e) {
    // inputDate = e.target.value;
    setInputDate(e.target.value);
    // console.log(inputDate);
  }

  const descChangHandler = (e) => {
    // inputDesc = e.target.value;
    setInputDesc(e.target.value);
  };

  const timeChangHandler = (e) => {
    // inputTime = e.target.value;
    setInputTime(e.target.value);
  };

  let tipsText = "";

  switch (tipsModalDisplay.type) {
    case "empty":
      tipsText = "Empty data. Pleas check!";
      break;
    case "duplicate":
      tipsText = "Duplicate data. Pleas check!";
      break;
  }

  const formSubmitHandler = (e) => {
    e.preventDefault();

    if (!inputDesc || !inputTime || !inputDate) {
      setTipsModalDisplay({ type: "empty", display: true });
      return;
    }

    if (props.verifyLogHandler(inputDesc)) {
      setTipsModalDisplay({ type: "duplicate", display: true });
      return;
    }

    const newLog = {
      desc: inputDesc,
      time: +inputTime,
      date: new Date(inputDate),
    };

    props.saveNewLogHandler(newLog);

    setInputDate("");
    setInputDesc("");
    setInputTime("");

    // console.log(newLog);
  };

  return (
    <Card className="logsForm">
      {tipsModalDisplay.display && (
        <TipsModal onConfirm={tipsConfirmHandler} tips={tipsText} />
      )}
      <form onSubmit={formSubmitHandler}>
        <div>
          <label htmlFor="date">Date:</label>
          <input
            onChange={dateChangHandler}
            value={inputDate}
            type="date"
            id="date"
          />
        </div>
        <div>
          <label htmlFor="desc">Desc:</label>
          <input
            onChange={descChangHandler}
            value={inputDesc}
            type="text"
            id="desc"
          />
        </div>
        <div>
          <label htmlFor="time">Time:</label>
          <input
            onChange={timeChangHandler}
            value={inputTime}
            type="number"
            id="time"
          />
        </div>
        <div>
          <button>Confirm</button>
        </div>
      </form>
    </Card>
  );
};

export default LogsForm;
