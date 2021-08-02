import { useState } from "react";
import "../styles/LoginScreen.css";

const LoginScreen = ({ handleLogin }) => {
  const [password, setPassword] = useState("");

  const handlePassword = (e) => {
    setPassword(e.target.value);
  }

  const handleSubmit = () => {
    password === "12345" ? handleLogin() : document.getElementById("errorPassword").innerHTML = "Invalid Password!";
  }

  const handleClose = () => {
    window.open("about:blank", "_self");
    window.close();
  }

  return (
    <div id = "login-container" className = "login-container">
      <div id = "login-text-welcome" className = "welcome">
        Welcome to <br />Simple Secure Contact Manager!
      </div>
      <div id = "login-text-prompt" className = "prompt">
        Please enter the password for your contact data file
      </div>
      <div id = "password-container" className = "password-container">
        <input className = "password" type = "password" placeholder = "Password" value = {password} onChange = {handlePassword} />
      </div>
      <p style = {{textAlign: "center", color: "red"}} id = "errorPassword" />
      <div id = "buttons" className = "buttons">
          <input className = "close" type = "button" value = "Close" onClick = {handleClose} />
          <input className = "submit" type = "button" value = "OK" onClick = {handleSubmit} />
      </div>
    </div>
  );
}

export default LoginScreen;
