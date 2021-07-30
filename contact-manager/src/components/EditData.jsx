import { useState } from "react";
import getRecords from "../utilities/utility";
import "../styles/EditData.css";

const EditData = ({ handleEditFlag, index }) => {
  const [records, setRecords] = useState(getRecords());
  const [phone, setPhone] = useState(records[index].phone);
  const [email, setEmail] = useState(records[index].email);
  const [address, setAddress] = useState(records[index].address);

  const handleEdit = () => {
    records[index].phone = phone;
    records[index].email = email;
    records[index].address = address;
    setRecords(records);
    localStorage.setItem("records", JSON.stringify(records));
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
    <div className = "edit-block">
      <div className = "edit-popup">
        <div>
          <input onChange = {(e) => handlePhone(e)} type = "text" placeholder = "Phone" value = {phone} />
        </div>
        <div>
          <input onChange = {(e) => handleEmail(e)} type = "text" placeholder = "Email" value = {email} />
        </div>
        <div>
          <input onChange = {(e) => handleAddress(e)} type = "text" placeholder = "Address" value = {address} />
        </div>
        <div>
          <input onClick = {handleEdit} type = "button" value = "Submit" />
        </div>
      </div>
    </div>
  );
}

export default EditData;
