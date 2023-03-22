import logo from "../assets/images/logo.svg";
import { pageLinks, navIcons } from "../data.js";

export function NavLink({ text, href }) {
  return (
    <li>
      <a href={href} className="nav-link">
        {text}
      </a>
    </li>
  );
}

export function NavIcon({ href, iconClass }) {
  return (
    <li>
      <a href={href} target="_blank" rel="noreferrer" className="nav-icon">
        <i className={iconClass}></i>
      </a>
    </li>
  );
}

function NavHeader() {
  return (
    <div className="nav-header">
      <img src={logo} className="nav-logo" alt="backroads" />
      <button type="button" className="nav-toggle" id="nav-toggle">
        <i className="fas fa-bars"></i>
      </button>
    </div>
  );
}

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="nav-center">
          {/* NavHeader  */}
          <NavHeader />

          {/* List of Links */}
          <ul className="nav-links" id="nav-links">
            {pageLinks.map((link) => (
              <NavLink key={link.id} {...link} />
            ))}
          </ul>

          {/* List of icons */}
          <ul className="nav-icons">
            {navIcons.map((icon) => (
              <NavIcon key={icon.id} {...icon} />
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
