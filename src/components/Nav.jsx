import "./nav.scss";
import DateTime from "./DateTime.jsx";
import appleIcon from "../assets/navbar-icons/apple.svg";
import wifiIcon from "../assets/navbar-icons/wifi.svg";

const Nav = () => {
  return (
    <nav>
      <div className="left">
        <div className="apple-icon">
          <img src={appleIcon} alt="apple-icon" />
        </div>
        <div className="nav-item">
          <p>Rahul Kumar</p>
        </div>
        <div className="nav-item">
          <p>File</p>
        </div>
        <div className="nav-item">
          <p>Window</p>
        </div>
        <div className="nav-item">
          <p>Terminal</p>
        </div>
      </div>

      <div className="right">
        <div className="wifi-icon">
          <img src={wifiIcon} alt="wifi-icon" />
        </div>
        <div className="nav-item">
          <DateTime />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
