import React from 'react';
import styles from './Preloader.module.css';
import preloader from '../../../assets/images/preloader.svg';

const Preloader = () => {
    return (
        <div className={styles.preloader}>
            <img src={preloader} alt='' />
        </div>
    );
};

export default Preloader;
