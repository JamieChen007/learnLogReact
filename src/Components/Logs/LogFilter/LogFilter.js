const LogFilter = (props) => {
  const changeYearHandler = (e) => {
    props.onYearChange(+e.target.value);
  };

  return (
    <div>
      Select Year:{"  "}
      <select onChange={changeYearHandler} value={props.year}>
        <option value="2023">2023</option>
        <option value="2022">2022</option>
        <option value="2021">2021</option>
      </select>
    </div>
  );
};

export default LogFilter;
