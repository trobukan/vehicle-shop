import LogoSVG from "../components/LogoSVG";
import { Link } from "react-router-dom";

const Nav = () => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const mainRoot = document.querySelector("#models");
    mainRoot?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <nav>
      <div className="nav-container">
        <Link className="nav__logo" to={"/"}>
          <LogoSVG />
        </Link>

        <div className="nav__links">
          <Link to={"/"} className="nav__link-item">
            Home
          </Link>
          <a onClick={handleClick} href="#" className="nav__link-item">
            Models
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
