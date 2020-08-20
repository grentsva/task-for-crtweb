import React from "react";
import style from "./Favorite.module.css";

class Favorite extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isFavorite: false };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((state) => ({
      isFavorite: !state.isFavorite,
    }));
  }

  render() {
    return (
      <div>
        <div onClick={this.handleClick}>
          {this.state.isFavorite ? (
            <img className={style.like} src="./img/like.png" alt="" />
          ) : (
            <img className={style.like} src="./img/unlike.png" alt="" />
          )}
        </div>
      </div>
    );
  }
}

export default Favorite;
