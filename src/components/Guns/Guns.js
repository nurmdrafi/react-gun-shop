import React from "react";
import Card from "../Card/Card";
import "./Guns.css";

const Guns = ({ guns, addToCart }) => {
  return (
    <div className="card-container">
      {guns.map((gun) => (
        <Card key={gun.id} gun={gun} addToCart={addToCart}></Card>
      ))}
    </div>
  );
};

export default Guns;
