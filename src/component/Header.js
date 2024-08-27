import "./Header.css";
import logo from "./../src-assets/logo.png";

function Header() {
  return (
    <div className="Header">
      <div className="titleBox">
        <div className="title">
          <div><img className="logo" src={logo} alt="logo" oncontextmenu="return false"></img></div>
          <div className="titleText">DevTI</div>
          <div className="colorBox"></div>
        </div>
      </div>
    </div>
  );
}

export default Header;
