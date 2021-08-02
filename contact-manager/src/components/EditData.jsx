import { useState } from "react";
import "../styles/EditData.css";
import encryptStore from "../utilities/encryptStore";
import decryptLoad from "../utilities/decryptLoad";

const EditData = ({ handleEditFlag, index, handleEditClose }) => {
  const [records, setRecords] = useState(decryptLoad("encryptedRecords"));
  const [phone, setPhone] = useState(records[index].phone);
  const [email, setEmail] = useState(records[index].email);
  const [address, setAddress] = useState(records[index].address);

  const phoneRegexp = /^[0-9]{10}$/;
  const emailRegexp = /\S+@\S+\.\S+/;

  const handleEdit = () => {
    if( !phoneRegexp.test(phone) || !emailRegexp.test(email) || !address ) {
      if( !phoneRegexp.test(phone) ) {
        document.getElementById("edit-phone-error").innerHTML = "Invalid Phone";
      } else {
        document.getElementById("edit-phone-error").innerHTML = "";
      }
      if( !emailRegexp.test(email) ) {
        document.getElementById("edit-email-error").innerHTML = "Invalid Email";
      } else {
        document.getElementById("edit-email-error").innerHTML = "";
      }
      if( !address ) {
        document.getElementById("edit-address-error").innerHTML = "Address cannot be empty";
      } else {
        document.getElementById("edit-address-error").innerHTML = "";
      }
    } else {
      records[index].phone = phone;
      records[index].email = email;
      records[index].address = address;
      setRecords(records);
      encryptStore(records);
      handleEditFlag();
    }
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
          <p id = "edit-phone-error" />
        </div>
        <div id = "edit-data-email" className = "common">
          <input id = "edit-email-input" onChange = {(e) => handleEmail(e)} type = "text" placeholder = "Email" value = {email} />
          <p id = "edit-email-error" />
        </div>
        <div id = "edit-data-address" className = "common">
          <textarea id = "edit-address-input" rows = "4" onChange = {(e) => handleAddress(e)} type = "text" placeholder = "Address" value = {address} />
          <p id = "edit-address-error" />
        </div>
        <div id = "edit-data-submit" className = "common">
          <input id = "edit-submit-input" onClick = {() => handleEdit()} type = "button" value = "Submit" />
        </div>
      </div>
    </div>
  );
}

export default EditData;
