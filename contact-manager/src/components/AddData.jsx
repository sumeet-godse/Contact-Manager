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
    <div className = "edit-block">
      <div className = "edit-popup">
        <div className = "common">
          <input onChange = {(e) => handlePhone(e)} type = "text" placeholder = "Phone" value = {phone} />
        </div>
        <div className = "common">
          <input onChange = {(e) => handleEmail(e)} type = "text" placeholder = "Email" value = {email} />
        </div>
        <div className = "common">
          <textarea rows = "4" onChange = {(e) => handleAddress(e)} placeholder = "Address" value = {address} />
        </div>
        <div className = "common">
          <input onClick = {handleAdd} type = "button" value = "Submit" />
        </div>
      </div>
    </div>
  );
}

export default AddData;
