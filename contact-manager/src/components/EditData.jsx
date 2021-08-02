import { useState } from "react";
import "../styles/EditData.css";
import encryptStore from "../utilities/encryptStore";
import decryptLoad from "../utilities/decryptLoad";

const EditData = ({ handleEditFlag, index, handleEditClose }) => {
  const [records, setRecords] = useState(decryptLoad("encryptedRecords"));
  const [phone, setPhone] = useState(records[index].phone);
  const [email, setEmail] = useState(records[index].email);
  const [address, setAddress] = useState(records[index].address);

  const handleEdit = () => {
      records[index].phone = phone;
      records[index].email = email;
      records[index].address = address;
      setRecords(records);
      encryptStore(records);
      handleEditFlag();
  }

  const handlePhone = (e) => {
    setPhone(e.target.value);
  }

  const handleEmail = (e) => {
    setEmail(e.target.value);
  }

  const handleAddress = (e) => {
    setAddress(e.target.value);
  }

  return(
    <div id = "edit-block" className = "edit-block">
      <div id = "edit-popup" className = "edit-popup">
        <span id = "close-icon" className="close-icon" onClick = {handleEditClose}>
          x
        </span>
        <div id = "edit-data-phone" className = "common">
          <input id = "edit-phone-input" onChange = {(e) => handlePhone(e)} type = "text" placeholder = "Phone" value = {phone} />
        </div>
        <div id = "edit-data-email" className = "common">
          <input id = "edit-email-input" onChange = {(e) => handleEmail(e)} type = "text" placeholder = "Email" value = {email} />
        </div>
        <div id = "edit-data-address" className = "common">
          <textarea id = "edit-address-input" rows = "4" onChange = {(e) => handleAddress(e)} type = "text" placeholder = "Address" value = {address} />
        </div>
        <div id = "edit-data-submit" className = "common">
          <input id = "edit-submit-input" onClick = {handleEdit} type = "button" value = "Submit" />
        </div>
      </div>
    </div>
  );
}

export default EditData;
