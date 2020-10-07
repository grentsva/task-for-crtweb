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
    fetch('data/entities.json')
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            items: result.items,
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
      return <Rooms data={items.response} />;
    }
  }
}

export default RoomsContainer;
