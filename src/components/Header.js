import logo from "../images/logo.svg";
import hamburger from "../images/icon-hamburger.svg";
import close from "../images/icon-close.svg";

export default function Header({ menuClicked, setMenuClicked }) {
  return (
    <>
      <header className="header">
        <div className="header__topbar">
          <div className="header__topbar--logo">
            <img src={logo} alt="Insure" className="header__topbar--logo-img" />
          </div>
          <div
            className="header__topbar--menu"
            onClick={() => setMenuClicked((prev) => !prev)}
          >
            <img
              src={menuClicked ? close : hamburger}
              alt="Menu"
              className="header__topbar--menu-img"
            />
          </div>
        </div>
        <nav className="header__nav">
          <ul className={`header__nav--items ${menuClicked ? "menuOpen" : ""}`}>
            <li className="header__nav--items-item">
              <a href="#0">HOW WE WORK</a>
            </li>
            <li className="header__nav--items-item">
              <a href="#0">BLOG</a>
            </li>
            <li className="header__nav--items-item">
              <a href="#0">ACCOUNT</a>
            </li>
            <li className="header__nav--items-item">
              <button>VIEW PLANS</button>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
