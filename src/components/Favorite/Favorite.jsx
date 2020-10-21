import React from 'react';
import styles from './Favorite.module.css';
import like from '../../assets/images/like.png';
import unlike from '../../assets/images/unlike.png';

const Favorite = ({ isFavorite, handleClick }) => (
  <div onClick={handleClick}>
    {isFavorite ? (
      <img className={styles.like} src={like} alt="" />
    ) : (
        <img className={styles.like} src={unlike} alt="" />
      )}
  </div>
);

export default Favorite;
