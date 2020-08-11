import React from "react";
import data from "../entities.json";

const Rooms = () => {
  return (
    <div>
      <div className="content">
        <div className="wrapper">
          {data.response.map((resp) => {
            return (
              <div className="room" key={resp.id}>
                <div className="photo">
                  <img src={resp.photo} alt="" />
                </div>
                <div className="description">
                  <div className="title">
                    <h2>{resp.attributes.title}</h2>
                  </div>
                  <div className="quantity-room">
                    <strong>Количество комнат: </strong>
                    {resp.attributes.rooms}
                  </div>
                  <div className="address">
                    <div className="city">
                      <strong>Город: </strong>
                      {resp.attributes.address.city}
                    </div>
                    <div className="street">
                      <strong>Улица: </strong>
                      {resp.attributes.address.street}
                    </div>
                    <div className="house">
                      <strong>Номер дома: </strong>
                      {resp.attributes.address.house}
                    </div>
                    <div className="flat">
                      <strong>Номер квартиры: </strong>
                      {resp.attributes.address.room}
                    </div>
                    <div className="area">
                      <strong>Площадь: </strong>
                      {resp.attributes.area + " " + resp.attributes.unit}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Rooms;
