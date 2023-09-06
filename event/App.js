import Logs from "./Components/Logs/Logs";

const App = () => {
  const clickHandler = (event) => {
    // cancel defaut event
    event.preventDefault();

    // cancel event bubble
    event.stopPropagation();

    alert("333");
  };

  return (
    <div
      onClick={() => {
        alert(5666);
      }}
    >
      <Logs />

      {/* {

        Native vs React

        onclick -> onClick

        onclick="alert(123)" -> onClick={()=>{alert(123)}}
      } */}

      <button
        onClick={() => {
          alert(123);
        }}
      >
        click me
      </button>
      <button onClick={clickHandler}>click me2</button>

      <a href="#" onClick={clickHandler}>
        url
      </a>
    </div>
  );
};

export default App;
