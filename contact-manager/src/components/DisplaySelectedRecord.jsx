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

  const handleAddClose = () => {
    setAddFlag(!addFlag);
  }

  const handleEditClose = () => {
    setEditFlag(!editFlag);
  }

  useEffect(() => {
    setRecords(decryptLoad("encryptedRecords"));
  }, [addFlag, editFlag]);

  return(
    <div id = "display-selected-record">
      <div id = "display-record-data" className = "display-record-data">
        {
          records.length &&
          <>
            <h3 id = "selected-record-contact">Contact {selectedRecord + 1}</h3>
            <h4 id = "selected-record-phone">Phone: {records[selectedRecord].phone}</h4>
            <h4 id = "selected-record-email">Email: {records[selectedRecord].email}</h4>
            <h4 id = "selected-record-address">Address: {records[selectedRecord].address}</h4>
          </>
        }
        <div id = "modify-records" className = "modify-records">
          <input id = "add-record" className = "add" type = "button" value = "Add" onClick = {handleAddFlag} />
          <input id = "edit-record" className = "edit" type = "button" value = "Edit" onClick = {handleEditFlag} />
        </div>
      </div>
      { addFlag && <AddData handleAddFlag = {handleAddFlag} handleAddClose = {handleAddClose} />}
      { editFlag && <EditData handleEditFlag = {handleEditFlag} index = {selectedRecord} handleEditClose = {handleEditClose} />}
    </div>
  );
}

export default DisplaySelectedRecord;
