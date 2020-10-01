import React, { useState, useEffect } from 'react';
import Rooms from './Rooms';
import Preloader from '../common/Preloader/Preloader';

const RoomsContainer = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [response, setRooms] = useState([]);

  useEffect(() => {
    fetch('data/entities.json')
      .then(res => res.json())
      .then(
        result => {
          setIsLoaded(true);
          setRooms(result.response);
        },

        error => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>Ошибка: {error.message}</div>;
  } else if (!isLoaded) {
    return <Preloader />;
  } else {
    return <Rooms data={response} />;
  }
};

export default RoomsContainer;
