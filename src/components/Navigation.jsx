import { Link, useLocation } from "react-router-dom";

function Navigation() {
  const location = useLocation();

  const navItems = [
    { name: "About", path: "/" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Contact", path: "/contact" },
    { name: "Resume", path: "/resume" },
  ];

  return (
    <nav className="nav-container">
      <ul className="nav-list">
        {navItems.map((item) => (
          <li key={item.name}>
            <Link
              to={item.path}
              className={location.pathname === item.path ? "active" : ""}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;