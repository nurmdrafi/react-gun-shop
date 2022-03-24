import React from 'react';
import './Card.css'

const Card = (props) => {
    const {name, img, price} = props.gun
    return (
        <div className='card'>
          <h2>{name}</h2> 
          <img src={img} alt={name} />
          <h4>Price: {price}</h4>
        </div>
    );
};

export default Card;