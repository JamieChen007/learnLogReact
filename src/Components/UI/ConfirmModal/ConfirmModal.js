import "./ConfirmModal.css";
import Card from "../Card/Card";
import Backdrop from "../Backdrop/Backdrop";

const ConfirmModal = (props) => {
  return (
    <Backdrop>
      <Card className="confirmModal">
        <div className="confirmTips">
          <p>{props.tips}</p>
        </div>
        <div className="confirmBtns">
          <button className="confirmBtn" onClick={props.onConfirm}>
            Confirm
          </button>
          <button className="cancelBtn" onClick={props.onCancel}>
            Cancel
          </button>
        </div>
      </Card>
    </Backdrop>
  );
};

export default ConfirmModal;
