import { useState } from "react";
import DisplayData from "../components/DisplayData"
import LoginScreen from "../components/LoginScreen";

const Home = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  }

  return (
    <div>
      { !isLoggedIn && <LoginScreen handleLogin = {handleLogin} /> }
      { isLoggedIn && <DisplayData /> }
    </div>
  );
}

export default Home;
