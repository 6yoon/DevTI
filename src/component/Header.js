import "./Header.css";
import logo from './../src-assets/logo.png';

function Header() {
  return (
    <div className="Header">
      <div className="title">
        <img className="logo" src={logo} alt="logo"></img>
        <span className="titleText">DevTI</span>
      </div>
    </div>
  );
}

export default Header;
