import { pageLinks, navIcons } from "../data.js";

function FooterLink({ href, text }) {
  return (
    <li>
      <a href={href} className="footer-link">
        {text}
      </a>
    </li>
  );
}

function FooterIcon({ href, iconClass }) {
  return (
    <li>
      <a href={href} target="_blank" rel="noreferrer" className="footer-icon">
        <i className={iconClass}></i>
      </a>
    </li>
  );
}

function Footer() {
  return (
    <>
      <footer className="section footer">
        {/* list of links */}
        <ul className="footer-links">
          {pageLinks.map((link) => (
            <FooterLink key={link.id} {...link} />
          ))}
        </ul>

        {/* list of icons */}
        <ul className="footer-icons">
          {navIcons.map((icon) => (
            <FooterIcon key={icon.id} {...icon} />
          ))}
        </ul>

        <p className="copyright">
          copyright &copy; Backroads travel tours company
          <span id="date">{new Date().getFullYear()}</span> all rights reserved
        </p>
      </footer>
    </>
  );
}

export default Footer;
