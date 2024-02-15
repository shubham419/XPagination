import { useEffect, useRef, useState } from "react";
import "./App.css";
import TableComponent from "./components/TableComponent";

function App() {
  const arryData = useRef([]);

  // const [apiData, setApiData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  const handlePagingData = (indexNo) => {
    console.log(indexNo);
    const newData = [];
    for (let i = indexNo; i < indexNo + 10; i++) {
      if (arryData.current[i]) newData.push(arryData.current[i]);
    }
    setFilteredData(newData);
  };

  async function getApiData() {
    try {
      const res = await fetch(
        "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json"
      );
      const data = await res.json();
      arryData.current = data;
      handlePagingData(0);
      // setApiData(() => {
      //   return data;
      // });
    } catch (e) {
      console.error(e);
      alert(e.message);
    }
  }

  useEffect(() => {
    getApiData();
  }, []);

  return (
    <div>
      <h1>Employee Data Table</h1>
      <TableComponent data={filteredData} handler={handlePagingData} />
    </div>
  );
}

export default App;
