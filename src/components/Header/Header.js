import { faCartFlatbed } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Header = () => {
    return (
        <div>
            <h1>বন্দুকের দোকান</h1>
            <FontAwesomeIcon icon={faCartFlatbed}></FontAwesomeIcon>
        </div>
    );
};

export default Header;