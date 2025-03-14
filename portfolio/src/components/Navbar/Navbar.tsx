import { Link } from "react-router-dom";
import "./Navbar.scss";

const navLinks = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/projects", label: "Projects" },
  { path: "/skills", label: "Skills" },
  { path: "/experience", label: "Experience" },
  { path: "/contact", label: "Contact" }
];

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">My Portfolio</Link>
      </div>
      <div className="nav-links">
        {navLinks.map((link) => (
          <Link key={link.path} to={link.path}>
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
