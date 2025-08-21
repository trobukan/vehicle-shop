import LogoSVG from "../components/LogoSVG";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <div className="nav-container">
        <Link className="nav__logo" to={"/"}>
          <LogoSVG />
        </Link>

        <div className="nav__links">
          <Link to={"/"} className="nav__link-item">Home</Link>
          <a href="#models" className="nav__link-item">Models</a>
        </div>
      </div>
      
    </nav>
  );
};

export default Nav;
