import { useState } from "react";
import "../styles/DisplayData.css"
import AddData from "./AddData";
import EditData from "./EditData";

const DisplaySelectedRecord = (props) => {
  const { handleDelete, handleRecordEdit, handleNewFlag, selectedRecord, index } = props;
  const [ addFlag, setAddFlag ] = useState(false);
  const [ editFlag, setEditFlag ] = useState(false);

  const handleAddFlag = () => {
    setAddFlag(!addFlag);
    handleNewFlag();
  }

  const handleEditFlag = () => {
    setEditFlag(!editFlag);
    handleRecordEdit();
  }

  const handleAddClose = () => {
    setAddFlag(!addFlag);
  }

  const handleEditClose = () => {
    setEditFlag(!editFlag);
  }

  return(
    <div id = "display-selected-record">
      <div id = "display-record-data" className = "display-record-data">
        {
          selectedRecord ?
          <>
            <div id = "selected-record-contact">
              Contact {index + 1}
              <input type = "button" value = "Delete" className = "delete" onClick = {handleDelete} />
            </div>
            <h4 id = "selected-record-phone">Phone: {selectedRecord.phone}</h4>
            <h4 id = "selected-record-email">Email: {selectedRecord.email}</h4>
            <h4 id = "selected-record-address">Address: {selectedRecord.address}</h4>
          </>
          : null
        }
        <div id = "modify-records" className = "modify-records">
          <input id = "add-record" className = "add" type = "button" value = "Add" onClick = {handleAddFlag} />
          <input id = "edit-record" className = "edit" type = "button" value = "Edit" onClick = {handleEditFlag} />
        </div>
      </div>
      { addFlag && <AddData handleAddFlag = {handleAddFlag} handleAddClose = {handleAddClose} />}
      { editFlag && <EditData handleEditFlag = {handleEditFlag} index = {index} handleEditClose = {handleEditClose} />}
    </div>
  );
}

export default DisplaySelectedRecord;
