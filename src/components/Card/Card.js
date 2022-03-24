import React from 'react';

const Card = (props) => {
    const {name} = props.gun
    return (
        <div>
          <h2>{name}</h2> 
        </div>
    );
};

export default Card;