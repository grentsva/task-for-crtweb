import React from "react";
import "./App.css";
import Rooms from "./components/Rooms/Rooms";
import Favorite from "./components/Favorite";
import Agents from "./components/Agents";

const App = () => {
  return (
    <div>
      <Rooms />
      <Favorite />
      <Agents />
    </div>
  );
};

export default App;
