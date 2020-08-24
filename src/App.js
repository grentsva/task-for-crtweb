import React from "react";
import "./App.css";
import Rooms from "./components/Rooms/Rooms";

const App = (props) => {
  return (
    <div>
      <Rooms data={props.state.response} />
    </div>
  );
};

export default App;
