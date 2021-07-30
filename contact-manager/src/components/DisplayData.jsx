import getRecords from "../utilities/utility";
import "../styles/DisplayData.css"
import DisplaySelectedRecord from "./DisplaySelectedRecord";
import { useState } from "react";

const DisplayData = () => {
  const records = getRecords();
  const [selectedRecord, setSelectedRecord] = useState(0);

  const handleRecordChange = (index) => {
    setSelectedRecord(index);
  }

  return(
    <div className = "display-data-container">
      <div className = "display-data-labels">
        {
          records.map((record, index) => {
            return(
              <div className = "label" key = {record.email} onClick = {() => handleRecordChange(index)}>
                Contact {index + 1}
              </div>
            )
          })
        }
      </div>
      <DisplaySelectedRecord selectedRecord = {selectedRecord} />
    </div>
  );
}

export default DisplayData;
