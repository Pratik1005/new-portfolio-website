import {NavLink} from "react-router-dom";

const getActiveStyle = ({isActive}) =>
  isActive ? {backgroundColor: "#2D3748"} : null;

export const NavMenu = () => {
  return (
    <nav className="nav-menu">
      <NavLink to="/" style={getActiveStyle} className="nav-link">
        Home
      </NavLink>

      <NavLink to="/about" style={getActiveStyle} className="nav-link">
        About
      </NavLink>

      <NavLink to="/projects" style={getActiveStyle} className="nav-link">
        Projects
      </NavLink>

      <a href="#contact" className="nav-link">
        Contact
      </a>
    </nav>
  );
};
