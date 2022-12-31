import logo from "../images/logo.svg";
import sprite from "../images/sprite.svg";

export default function Footer2() {
  return (
    <>
      <footer className="footer">
        <div className="footer__topbar">
          <div className="footer__topbar--logo">
            <img src={logo} alt="Insure" className="footer__topbar--logo-img" />
          </div>
          <div className="footer__topbar--social">
            <svg className="footer__topbar--social-icon">
              <use href={`${sprite}#icon-facebook`} />
            </svg>
            <svg className="footer__topbar--social-icon">
              <use href={`${sprite}#icon-twitter`} />
            </svg>
            <svg className="footer__topbar--social-icon">
              <use href={`${sprite}#icon-pinterest`} />
            </svg>
            <svg className="footer__topbar--social-icon">
              <use href={`${sprite}#icon-instagram`} />
            </svg>
          </div>
        </div>
        <nav className="footer__nav">
          <div className="footer__nav--row">
            <p className="footer__nav--headline">OUR COMPANY</p>
            <ul className="footer__nav--row-list">
              <li className="footer__nav--row--list-item">
                <a href="0#">HOW WE WORK</a>
              </li>
              <li className="footer__nav--row--list-item">
                <a href="0#">WHY INSURE?</a>
              </li>
              <li className="footer__nav--row--list-item">
                <a href="0#">VIEW PLANS</a>
              </li>
              <li className="footer__nav--row--list-item">
                <a href="0#">REVIEWS</a>
              </li>
            </ul>
          </div>
          <div className="footer__nav--row">
            <p className="footer__nav--headline">HELP ME</p>
            <ul className="footer__nav--row-list">
              <li className="footer__nav--row--list-item">
                <a href="0#">FAQ</a>
              </li>
              <li className="footer__nav--row--list-item">
                <a href="0#">TERMS OF USE</a>
              </li>
              <li className="footer__nav--row--list-item">
                <a href="0#">PRIVACY POLICY</a>
              </li>
              <li className="footer__nav--row--list-item">
                <a href="0#">COOKIES</a>
              </li>
            </ul>
          </div>
          <div className="footer__nav--row">
            <p className="footer__nav--headline">CONTACT</p>
            <ul className="footer__nav--row-list">
              <li className="footer__nav--row--list-item">
                <a href="0#">SALES</a>
              </li>
              <li className="footer__nav--row--list-item">
                <a href="0#">SUPPORT</a>
              </li>
              <li className="footer__nav--row--list-item">
                <a href="0#">LIVE CHAT</a>
              </li>
            </ul>
          </div>
          <div className="footer__nav--row">
            <p className="footer__nav--headline">OTHERS</p>
            <ul className="footer__nav--row-list">
              <li className="footer__nav--row--list-item">
                <a href="0#">CAREERS</a>
              </li>
              <li className="footer__nav--row--list-item">
                <a href="0#">PRESS</a>
              </li>
              <li className="footer__nav--row--list-item">
                <a href="0#">LICENSES</a>
              </li>
            </ul>
          </div>
        </nav>
      </footer>
    </>
  );
}
