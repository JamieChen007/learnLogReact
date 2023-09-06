import MyDate from "./MyDate/MyDate";
import "./LogItem.css";
import Card from "../../UI/Card/Card";
import ConfirmModal from "../../UI/ConfirmModal/ConfirmModal";
import { useState } from "react";

const LogItems = (props) => {
  const [displayConfirmModal, setDisplayConfirmModal] = useState(false);

  const deleteLogItemHandler = () => {
    setDisplayConfirmModal(true);
    // temp solution
    // const isDel = window.confirm("Do you wish to delete this item!");
    // if (isDel) {
    //   props.delLogHandler();
    // }
  };

  const cancelHandler = () => {
    setDisplayConfirmModal(false);
  };

  const confirmHandler = () => {
    props.delLogHandler();
    setDisplayConfirmModal(false);
  };

  return (
    <Card className="item">
      {displayConfirmModal && (
        <ConfirmModal
          onCancel={cancelHandler}
          onConfirm={confirmHandler}
          tips={"Do you wish to delete this item!"}
        />
      )}
      <MyDate date={props.date} />
      <div className="content">
        <h2 className="desc">{props.desc}</h2>
        <div className="time">{props.time} minutes</div>
      </div>
      <div>
        <div className="delete" onClick={deleteLogItemHandler}>
          ×
        </div>
      </div>
    </Card>
  );
};

export default LogItems;
