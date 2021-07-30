import { useEffect } from "react";
import { useState } from "react";
import "../styles/DisplayData.css"
import decryptLoad from "../utilities/decryptLoad";
import AddData from "./AddData";
import EditData from "./EditData";

const DisplaySelectedRecord = (props) => {
  const [records, setRecords] = useState(decryptLoad("encryptedRecords"));
  const { handleNewFlag, selectedRecord } = props;
  const [ addFlag, setAddFlag ] = useState(false);
  const [ editFlag, setEditFlag ] = useState(false);

  const handleAddFlag = () => {
    setAddFlag(!addFlag);
    handleNewFlag();
  }

  const handleEditFlag = () => {
    setEditFlag(!editFlag);
  }

  useEffect(() => {
    setRecords(decryptLoad("encryptedRecords"));
  }, [addFlag, editFlag]);

  return(
    <div>
      <div className = "display-record-data">
        {
          records.length &&
          <>
            <h3>Contact {selectedRecord + 1}</h3>
            <h4>Phone: {records[selectedRecord].phone}</h4>
            <h4>Email: {records[selectedRecord].email}</h4>
            <h4>Address: {records[selectedRecord].address}</h4>
          </>
        }
        <div className = "modify-records">
          <input className = "add" type = "button" value = "Add" onClick = {handleAddFlag} />
          <input className = "edit" type = "button" value = "Edit" onClick = {handleEditFlag} />
        </div>
      </div>
      { addFlag && <AddData handleAddFlag = {handleAddFlag} />}
      { editFlag && <EditData handleEditFlag = {handleEditFlag} index = {selectedRecord} />}
    </div>
  );
}

export default DisplaySelectedRecord;
