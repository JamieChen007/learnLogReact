import "./TipsModal.css";
import Card from "../Card/Card";
import Backdrop from "../Backdrop/Backdrop";

const TipsModal = (props) => {
  return (
    <Backdrop>
      <Card className="tipsModal">
        <div className="tipsText">
          <p>{props.tips}</p>
        </div>
        <div className="confirmBtns">
          <button className="confirmBtn" onClick={props.onConfirm}>
            Confirm
          </button>
        </div>
      </Card>
    </Backdrop>
  );
};

export default TipsModal;
