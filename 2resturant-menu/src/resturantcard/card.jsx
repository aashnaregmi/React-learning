import React from "react";

const Card = ({ id, type, name, description, image }) => {
  return (
    <div>
      <div className="card">
        <div className="card-body">
          <span className="card-number"> {id}</span>
          <span className="food-type">{type}</span>
          <span className="food-name">{name}</span>
          <p className="food-description">{description}</p>

          <img src={image} alt="food" />

          <button className="order-now">Order Now</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
