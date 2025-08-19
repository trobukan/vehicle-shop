import type { ReactNode } from "react";
import headerBackground from "../assets/header__background.png"

interface Props {
  className?: string;
  children?: ReactNode;
}

const Header = ({ className }: Props) => {
  return <header className={className}>
    <img className="header__image" src={headerBackground} alt="" />
  </header>;
};

export default Header;
