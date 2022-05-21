import React from 'react';
import styles from './Favorite.module.css';

const Favorite = ({ isFavorite, handleClick }) => (
    <div className={styles.like} onClick={handleClick}>
        <i className={isFavorite ? 'fas fa-heart' : 'far fa-heart'}></i>
    </div>
);

export default Favorite;
