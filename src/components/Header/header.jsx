import HeaderImg from "../../assets/images/header.svg";
import "./header.scss";

function Header() {
  return (
    <header className="header">
      <img className="header__image" src={HeaderImg} alt="header" />
    </header>
  );
}

export default Header;
