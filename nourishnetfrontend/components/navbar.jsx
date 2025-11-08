import { useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom'; 
import { APP_NAME } from "../constants";
import { LogOut, ShoppingCart } from 'lucide-react';

function Navbar() {
  const [username, setUserName] = useState("");
  const nav = useNavigate(); 
  
  useEffect(() => {
    try {
      const n = localStorage.getItem('userName') || '';
      setUserName(n);
    } catch (e) {
      setUserName('');
    }
  }, []);

  function handleLogout() {
    try {
      localStorage.removeItem('userName');
      localStorage.removeItem('userId');
    } catch (e) {}
    setUserName('');
    nav('/');
  }

  return (
    <nav className="bg-base-100 relative">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between relative">
        {/* Left: Logo */}
        <div
          className="flex items-center space-x-2 cursor-pointer"
          onClick={() => nav('/')}
        >
          <span className="text-2xl font-bold text-primary">{APP_NAME}</span>
        </div>

        {/* Center: Main Menu (Truly Centered) */}
        <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex space-x-12 font-medium text-lg">
          {["Marketplace", "Vlogs", "Diet Plan"].map((item) => (
            <Link
              key={item}
              to={`/${item.toLowerCase().replace(" ", "-")}`}
              className="text-important hover:text-accent transition-colors duration-300"
            >
              {item}
            </Link>
          ))}
        </div>

        {/* Right: User Section */}
        <div className="flex items-center space-x-4 ml-auto">
          {username ? (
            <div className="flex items-center gap-5">
              <ShoppingCart className="text-primary cursor-pointer" />
              <span className="text-primary font-semibold">{username}</span>
              <LogOut
                onClick={handleLogout}
                className="h-5 w-5 cursor-pointer text-red-600 hover:text-red-700"
              />
            </div>
          ) : (
            <>
              <Link
                to="/login"
                className="text-primary hover:text-accent transition-colors duration-300"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="bg-primary text-white hover:bg-accent px-4 py-1 rounded-xl transition"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden ml-4">
          <button className="text-text focus:outline-none focus:ring-2 focus:ring-primary rounded-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
