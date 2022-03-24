import React from "react";
import "./Card.css";
import { faCartFlatbed } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Card = (props) => {
  const { name, img, bullet, action, capacity, price } = props.gun;
  const addToCart = props.addToCart;
  return (
    <div className="card">
      <img src={img} alt={name} />
      <h2>{name}</h2>
      <p>Bullet Type: {bullet}</p>
      <p>Capacity: {capacity}</p>
      <p>Action: {action}</p>
      <div className="card-bottom">
          <button onClick={addToCart}><FontAwesomeIcon  icon={faCartFlatbed}></FontAwesomeIcon></button>
        <h2>${price}</h2>
      </div>
    </div>
  );
};

export default Card;
