import React, { useState } from 'react';
import styles from './Favorite.module.css';
import like from '../../assets/images/like.png';
import unlike from '../../assets/images/unlike.png';

const Favorite = props => {
  const [state, toggleIsFovorite] = useState({
    isFavorite: false,
  });

  return (
    <div>
      <div
        onClick={() =>
          toggleIsFovorite({ ...state, isFavorite: !state.isFavorite })
        }
      >
        {state.isFavorite ? (
          <img className={styles.like} src={like} alt="" />
        ) : (
          <img className={styles.like} src={unlike} alt="" />
        )}
      </div>
    </div>
  );
};

export default Favorite;
