import { useState } from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  const [menu, setMenu] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogout = () => {
    // Add logic to handle user logout
    setIsAuthenticated(false);
    // Additional logout logic, e.g., clearing user data from state or local storage
  };

  return (
    <div>
      <div>
        <ul className="flex bg-[#E3EFF6] justify-end gap-6 pr-3 mt-3">
          <li
            onClick={() => {
              setMenu("home");
            }}
          >
            <Link to="/" style={{ textDecoration: "none" }}>
              Home
            </Link>
            {menu === "home" ? (
              <hr className="border-none w-full h-1 rounded-lg bg-[#09618E]" />
            ) : (
              <></>
            )}
          </li>
          <li
            onClick={() => {
              setMenu("sell");
            }}
          >
            <Link to="/sellers" style={{ textDecoration: "none" }}>
              Sell
            </Link>
            {menu === "sell" ? (
              <hr className="border-none w-full h-1 rounded-lg bg-[#09618E]" />
            ) : (
              <></>
            )}
          </li>
          <li
            onClick={() => {
              setMenu("language");
            }}
          >
            <Link to="/language" style={{ textDecoration: "none" }}>
              English/US
            </Link>
            {menu === "language" ? (
              <hr className="border-none w-full h-1 rounded-lg bg-[#09618E]" />
            ) : (
              <></>
            )}
          </li>
          <li
            onClick={() => {
              setMenu("help");
            }}
          >
            <Link to="/help" style={{ textDecoration: "none" }}>
              Help
            </Link>
            {menu === "help" ? (
              <hr className="border-none w-full h-1 rounded-lg bg-[#09618E]" />
            ) : (
              <></>
            )}
          </li>
          <li>
            <div style={{ position: "relative", display: "flex" }}>
              <button className="dropbtn">
                {isAuthenticated ? "Account" : ""}
              </button>
              <div className="dropdown-content">
                {isAuthenticated && (
                  <>
                    <Link to="/settings">Settings</Link>
                    <Link to="/info">Info</Link>
                    <Link to="/orders">Orders</Link>
                    <button onClick={handleLogout}>Logout</button>
                    {/* Add other menu items as needed */}
                  </>
                )}
                {!isAuthenticated && <Link to="/login">Login</Link>}
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
