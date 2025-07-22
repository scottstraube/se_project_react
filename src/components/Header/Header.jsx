import "./Header.css";

import logo from "../../assets/logo.svg";

import avatar from "../../assets/avatar.png";

function Header({ handleAddClick }) {
  return (
    <header className="header">
      <img className="header__logo" src={logo} />
      <p className="header__date-and-location">Date, Location</p>
      <button
        onClick={handleAddClick}
        type="button"
        className="header__add-clothes-btn"
      >
        + Add Clothes
      </button>
      <div className="header__user-container">
        <p className="head__username">Terrence Tegegne</p>
        <img src={avatar} alt="" className="header__avatar" />
      </div>
    </header>
  );
}

export default Header;
