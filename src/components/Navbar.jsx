import "../styles/Navbar.css";
import logo from "../assets/logo.svg";
function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-inner">
          <img src={logo} alt="Tutedude Logo" className="navbar-logo" />
          <div className="navbar-right">
            <div className="navbar-login">Login</div>
            <div className="navbar-signup">Sign Up</div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
