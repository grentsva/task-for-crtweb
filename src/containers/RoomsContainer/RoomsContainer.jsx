import React, { Component } from 'react';
import Preloader from '../../components/common/Preloader';
import Rooms from '../../components/Rooms';

class RoomsContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    componentDidMount() {
        fetch('https://task-for-crtweb.firebaseio.com/response.json')
            .then((res) => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result
                    });
                },

                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            );
    }

    handleClick = (id) => {
        const updateItems = this.state.items.map((item) => {
            if (item.id === id) {
                item.isFavorite = !item.isFavorite;
            }

            return item;
        });

        fetch('https://task-for-crtweb.firebaseio.com/response.json', {
            method: 'PUT',
            body: JSON.stringify(updateItems)
        }).then(() => {
            this.setState({ items: updateItems });
        });
    };

    render() {
        const { error, isLoaded, items } = this.state;

        if (error) {
            return <div>Ошибка: {error.message}</div>;
        } else if (!isLoaded) {
            return <Preloader />;
        } else {
            return <Rooms data={items} handleClick={this.handleClick} />;
        }
    }
}

export default RoomsContainer;
