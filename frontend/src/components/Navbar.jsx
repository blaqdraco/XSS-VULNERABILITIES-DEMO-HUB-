import React from "react";
import { Link, useLocation } from "react-router-dom";

const links = [
  { to: "/", label: "Home" },
  { to: "/reflected", label: "Reflected" },
  { to: "/dom", label: "DOM" },
  { to: "/stored", label: "Stored" },
  { to: "/admin", label: "Blind/Admin" },
];

const Navbar = () => {
  const { pathname } = useLocation();

  return (
    <nav className="navbar">
      {links.map((link) => (
        <Link
          key={link.to}
          to={link.to}
          className="nav-link"
          style={pathname === link.to ? { background: "rgba(39,216,243,0.18)" } : undefined}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;
