import { useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import Footer from "../components/Footer";

const Layout = () => {
  const [isOpen, setIsOpen] = useState(false); // Initial state: closed
  const colors = [
    "valentine",
    "cyberpunk",
    "light",
    "lemonade",
    "aqua",
    "retro",
  ]; // Add your themes here

  // Initialize state with local storage value or default to 0
  const [currentColorIndex, setCurrentColorIndex] = useState(() => {
    const storedColorIndex = localStorage.getItem("colorIndex");
    return storedColorIndex !== null ? Number(storedColorIndex) : 0; // Default to 0 if not found
  });

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleColorClick = () => {
    setCurrentColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
  };

  // Effect to change the data-theme attribute and store it in local storage
  useEffect(() => {
    // Set the data-theme attribute
    document.documentElement.setAttribute(
      "data-theme",
      colors[currentColorIndex],
    );

    // Store the current color index in local storage
    localStorage.setItem("colorIndex", currentColorIndex);
  }, [currentColorIndex]); // Run effect when currentColorIndex changes

  return (
    <>
      <nav className="border-b border-primary text-base-content fixed w-full">
        <div className="navbar bg-base-100">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
                onClick={toggleDropdown}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              {isOpen && (
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                >
                  <li>
                    <Link to="/newTask">New Task</Link>
                  </li>
                  <li>
                    <Link to="/taskList">Task List</Link>
                  </li>
                  <li>
                    <Link to="/dashboard">Dashboard</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>
                </ul>
              )}
            </div>
            <Link to="/" className="btn btn-ghost text-xl font-bold">
              {" "}
              VIZ LIFE
            </Link>
          </div>

          <div className="navbar-end hidden lg:flex font-semibold">
            <ul className="menu menu-horizontal px-1 text-lg">
              <li>
                <Link to="/newTask">New Task</Link>
              </li>
              <li>
                <Link to="/taskList">Task List</Link>
              </li>
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="navbar-end togglecolorbutton">
            <a className="btn" onClick={handleColorClick}>
              Change Color
            </a>
          </div>
        </div>
      </nav>
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
