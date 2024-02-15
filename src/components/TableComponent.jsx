import { useState } from "react";
import CustomTable from "./CustomTable";

const TableComponent = ({ data, handler }) => {
  const [pageState, setPageState] = useState([0, 1]);

  function handleClick(e) {
    if ((e.target.textContent == "Next")) {

      if (pageState[1] < 5) {
        handler(pageState[0] + 10);
        setPageState([pageState[0] + 10, pageState[1] + 1]);
      }
    } else {
      if (pageState[1] > 1) {
        handler(pageState[0] - 10);
        setPageState([pageState[0] - 10, pageState[1] - 1]);
      }
    }
  }

  return (
    <div>
      <CustomTable data={data}/>
      <div style={{marginTop: "10px"}}>
      <button onClick={handleClick} value="next">Previous</button>
      <span>{pageState[1]}</span>
      <button onClick={handleClick}>Next</button>
      </div>
    </div>
  );
};

export default TableComponent;
