import "../styles/DisplayData.css"
import DisplaySelectedRecord from "./DisplaySelectedRecord";
import { useState } from "react";
import decryptLoad from "../utilities/decryptLoad";

const DisplayData = () => {
  let records = decryptLoad("encryptedRecords");
  const [selectedRecord, setSelectedRecord] = useState(0);
  const [newFlag, setNewFlag] = useState(false);

  const handleRecordChange = (index) => {
    setSelectedRecord(index);
  }

  const handleNewFlag = () => {
    setNewFlag(!newFlag);
  }

  return(
    <div className = "display-data-container">
      <div className = "display-data-labels">
        {
          records.map((record, index) => {
            return(
              <div className = "label" key = {`${record.email}_${record.phone}`} onClick = {() => handleRecordChange(index)}>
                Contact {index + 1}
              </div>
            )
          })
        }
      </div>
      <DisplaySelectedRecord handleNewFlag = {handleNewFlag} selectedRecord = {selectedRecord} />
    </div>
  );
}

export default DisplayData;
