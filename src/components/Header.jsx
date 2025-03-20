import { useState, useEffect } from "react";
import Navigation from "./Navigation";

function Header() {
  // Check local storage for theme preference
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  // Toggle Dark Mode
  const toggleTheme = () => {
    const newTheme = darkMode ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    setDarkMode(!darkMode);
  };

  // Set initial theme on mount
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") || "light";
    document.documentElement.setAttribute("data-theme", storedTheme);
    setDarkMode(storedTheme === "dark");
  }, []);

  return (
    <header className="header">
      <h1>My Portfolio</h1>
      <Navigation />
      <button onClick={toggleTheme} className="theme-toggle">
        {darkMode ? "🌞 Light Mode" : "🌙 Dark Mode"}
      </button>
    </header>
  );
}

export default Header;
