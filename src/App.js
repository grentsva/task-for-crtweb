import React from 'react';
import './App.css';
//import Rooms from './components/Rooms/Rooms';
import RoomsContainer from './components/Rooms/RoomsContainer';

const App = props => {
  return (
    <div>
      {/* <Rooms data={props.state.response} /> */}
      <RoomsContainer />
    </div>
  );
};

export default App;
