import { useState } from "react";
import getRecords from "../utilities/utility";
import "../styles/EditData.css";

const AddData = (props) => {
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [records, setRecords] = useState(getRecords());

  const handleAdd = () => {
    records.push({
      phone,
      email,
      address
    })
    setRecords(records);
    localStorage.setItem("records", JSON.stringify(records));
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
          <input onClick = {handleAdd} type = "button" value = "Submit" />
        </div>
      </div>
    </div>
  );
}

export default AddData;
