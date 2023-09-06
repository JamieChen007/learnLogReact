import ReactDOM from "react-dom/client";
import "./index.css";

const App = (
  <div className="logs">
    <div className="item">
      <div className="date">
        <div className="month">April</div>
        <div className="day">19</div>
      </div>
      <div className="content">
        <h2 className="desc">Learn REACT</h2>
        <div className="time">40 minutes</div>
      </div>
    </div>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(App);
