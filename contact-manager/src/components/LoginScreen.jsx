import { useState } from "react";
import "../styles/LoginScreen.css";

const LoginScreen = ({ handleLogin }) => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handlePassword = (e) => {
    setPassword(e.target.value);
  }

  const handleSubmit = () => {
    password === "12345" ? handleLogin() : setError("Invalid Password!");
  }

  const handleClose = () => {
    window.open("about:blank", "_self");
    window.close();
  }

  return (
    <div className = "login-container">
      <div>
        Welcome to Simple Secure Contact Manager!
      </div>
      <div>
        Please enter the password for your contact data file
      </div>
      <div>
        <input className = "password" type = "password" placeholder = "Password" value = {password} onChange = {handlePassword} />
      </div>
      <div className = "buttons">
        <input className = "close" type = "button" value = "Close" onClick = {handleClose} />
        <input className = "submit" type = "button" value = "Submit" onClick = {handleSubmit} />
      </div>
    </div>
  );
}

export default LoginScreen;
