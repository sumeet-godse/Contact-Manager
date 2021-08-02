import "../styles/DisplayData.css"
import DisplaySelectedRecord from "./DisplaySelectedRecord";
import { useState } from "react";
import decryptLoad from "../utilities/decryptLoad";
import encryptStore from "../utilities/encryptStore";

const DisplayData = () => {
  const [records, setRecords] = useState(decryptLoad("encryptedRecords"));
  const [selectedRecord, setSelectedRecord] = useState("");
  const [newFlag, setNewFlag] = useState(false);
  const [index, setIndex] = useState(-1);

  const handleRecordEdit = () => {
    setRecords(decryptLoad("encryptedRecords"));
  }

  const handleRecordChange = (index) => {
    setSelectedRecord(records[index]);
    setIndex(index);
  }

  const handleNewFlag = () => {
    setNewFlag(!newFlag);
    setRecords(decryptLoad("encryptedRecords"));
  }

  const handleDelete = () => {
    records.splice(index, 1);
    setRecords(records);
    setSelectedRecord(records[index - 1]);
    encryptStore(records);
  }

  return(
    <div id = "display-container" className = "display-data-container">
      <div id = "display-labels" className = "display-data-labels">
        {
          records.map((record, index) => {
            return(
              <div className = "label" id = {`${record.email}_${record.phone}`} key = {`${record.email}_${record.phone}`} onClick = {() => handleRecordChange(index)}>
                Contact {index + 1}
              </div>
            )
          })
        }
      </div>
      <DisplaySelectedRecord handleDelete = {handleDelete} handleRecordEdit = {() => handleRecordEdit()} handleNewFlag = {handleNewFlag} selectedRecord = {selectedRecord} index = {index} />
    </div>
  );
}

export default DisplayData;
