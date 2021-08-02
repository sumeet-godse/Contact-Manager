import { useState } from "react";
import "../styles/EditData.css";
import encryptStore from "../utilities/encryptStore";
import decryptLoad from "../utilities/decryptLoad";

const AddData = (props) => {
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [records, setRecords] = useState(decryptLoad("encryptedRecords"));

  const handleAdd = () => {
    records.push({
      phone,
      email,
      address
    })
    setRecords(records);
    encryptStore(records);
    props.handleAddFlag();
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
    <div id = "add-block" className = "edit-block">
      <div id = "add-popup" className = "edit-popup">
        <div id = "add-data-phone" className = "common">
          <input id = "add-phone-input" onChange = {(e) => handlePhone(e)} type = "text" placeholder = "Phone" value = {phone} />
        </div>
        <div id = "add-data-email" className = "common">
          <input id = "add-email-input" onChange = {(e) => handleEmail(e)} type = "text" placeholder = "Email" value = {email} />
        </div>
        <div id = "add-data-address" className = "common">
          <textarea id = "add-address-input" rows = "4" onChange = {(e) => handleAddress(e)} placeholder = "Address" value = {address} />
        </div>
        <div id = "add-data-button" className = "common">
          <input id = "add-button-input" onClick = {handleAdd} type = "button" value = "Submit" />
        </div>
      </div>
    </div>
  );
}

export default AddData;
