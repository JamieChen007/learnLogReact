import "./Backdrop.css";
import ReactDOM from "react-dom";

const Backdrop = (props) => {
  const backdropRoot = document.getElementById("backdrop-root");

  return ReactDOM.createPortal(
    <div className="backdrop">{props.children}</div>,
    backdropRoot
  );
};

export default Backdrop;
