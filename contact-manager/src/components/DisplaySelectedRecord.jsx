import { useEffect } from "react";
import { useState } from "react";
import "../styles/DisplayData.css"
import getRecords from "../utilities/utility";
import AddData from "./AddData";
import EditData from "./EditData";

const DisplaySelectedRecord = (props) => {
  const [records, setRecords] = useState(getRecords());
  const { selectedRecord } = props;
  const [ addFlag, setAddFlag ] = useState(false);
  const [ editFlag, setEditFlag ] = useState(false);

  const handleAddFlag = () => {
    setAddFlag(!addFlag);
  }

  const handleEditFlag = () => {
    setEditFlag(!editFlag);
  }

  useEffect(() => {
    setRecords(getRecords());
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
          <input className = "modify-button" type = "button" value = "Add" onClick = {handleAddFlag} />
          <input className = "modify-button" type = "button" value = "Edit" onClick = {handleEditFlag} />
        </div>
      </div>
      { addFlag && <AddData handleAddFlag = {handleAddFlag} />}
      { editFlag && <EditData handleEditFlag = {handleEditFlag} index = {selectedRecord} />}
    </div>
  );
}

export default DisplaySelectedRecord;
