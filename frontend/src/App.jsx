import { useState } from "react";
import "./App.css";
import StatusBox from "./components/statusbox/statusbox";
import ControlBox from "./components/control/controlbox";
import Cards from "./components/cards/cards";
import { Toaster } from "react-hot-toast";
function App() {
  return (
    <>
      <Toaster />
      <h1>Uptime Application!</h1>
      <code>See if your website is running</code>
      <p>Available Uptimes!</p>
      {/* <StatusBox/> */}
      <Cards />
      <ControlBox />
    </>
  );
}

export default App;
