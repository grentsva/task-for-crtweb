import React from "react";
import style from "./Rooms.module.css";
import data from "../../entities.json";

const like = () => {
  console.log("allo");
};

const Rooms = () => {
  return (
    <div>
      <div className={style.content}>
        <div className={style.wrapper}>
          {data.response.map((resp) => {
            return (
              <div className={style.room} key={resp.id}>
                <div className={style.photo}>
                  <img src={resp.photo} alt="" />
                </div>
                <div className={style.description}>
                  <div className={style.title}>
                    <h2>{resp.attributes.title}</h2>
                  </div>
                  <div className={style.quantity}>
                    <strong>Количество комнат: </strong>
                    {resp.attributes.rooms}
                  </div>
                  <div className={style.address}>
                    <div className={style.city}>
                      <strong>Город: </strong>
                      {resp.attributes.address.city}
                    </div>
                    <div className={style.street}>
                      <strong>Улица: </strong>
                      {resp.attributes.address.street}
                    </div>
                    <div className={style.home}>
                      <strong>Номер дома: </strong>
                      {resp.attributes.address.house}
                    </div>
                    <div className={style.flat}>
                      <strong>Номер квартиры: </strong>
                      {resp.attributes.address.room}
                    </div>
                    <div className={style.area}>
                      <strong>Площадь: </strong>
                      {resp.attributes.area + " " + resp.attributes.unit}
                    </div>
                  </div>
                </div>
                <div className={style.like} onClick={like}></div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Rooms;
