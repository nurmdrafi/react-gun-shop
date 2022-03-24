import { faCartFlatbed } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Header.css";

const Header = (props) => {

  return (
    <div className="header">
      <h1>বন্দুকের দোকান</h1>
      <div className="header-cart">
      <FontAwesomeIcon
        icon={faCartFlatbed}
      ></FontAwesomeIcon>
      <sup>{props.count}</sup>
      </div>
      
    </div>
  );
};

export default Header;
