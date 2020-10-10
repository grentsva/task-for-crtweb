import React from 'react';
import Rooms from './Rooms';
import Preloader from '../common/Preloader/Preloader';

class RoomsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
    };
  }

  componentDidMount() {
    fetch('https://my-json-server.typicode.com/grentsva/task-for-crtweb/db')
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            items: result.response,
          });
        },

        error => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  render() {
    const { error, isLoaded, items } = this.state;

    if (error) {
      return <div>Ошибка: {error.message}</div>;
    } else if (!isLoaded) {
      return <Preloader />;
    } else {
      return <Rooms data={items} />;
    }
  }
}

export default RoomsContainer;
