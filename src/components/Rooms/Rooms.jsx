import React from 'react';
import styles from './Rooms.module.css';
import Favorite from '../Favorite';
import Agents from '../Agents';

const Rooms = ({ data, handleClick }) => {
    return (
        <div className={styles.content}>
            <div className={styles.wrapper}>
                {data.map((resp) => {
                    return (
                        <div className={styles.room} key={resp.id}>
                            <div className={styles.photo}>
                                <img src={resp.photo} alt='' />
                            </div>
                            <div className={styles.description}>
                                <div className={styles.title}>
                                    <h2>{resp.attributes.title}</h2>
                                </div>
                                <div className={styles.quantity}>
                                    <strong>Количество комнат: </strong>
                                    {resp.attributes.rooms}
                                </div>
                                <div className={styles.address}>
                                    <div className={styles.city}>
                                        <strong>Город: </strong>
                                        {resp.attributes.address.city}
                                    </div>
                                    <div className={styles.street}>
                                        <strong>Улица: </strong>
                                        {resp.attributes.address.street}
                                    </div>
                                    <div className={styles.home}>
                                        <strong>Номер дома: </strong>
                                        {resp.attributes.address.house}
                                    </div>
                                    <div className={styles.flat}>
                                        <strong>Номер квартиры: </strong>
                                        {resp.attributes.address.room}
                                    </div>
                                    <div className={styles.area}>
                                        <strong>Площадь: </strong>
                                        {`${resp.attributes.area} ${resp.attributes.unit}`}
                                    </div>
                                </div>
                            </div>
                            <Agents agents={resp.relationships.attributes} />
                            <Favorite
                                isFavorite={resp.isFavorite}
                                handleClick={() => handleClick(resp.id)}
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Rooms;
