import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  // Function to check login status
  const checkLoginStatus = () => {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    setIsLoggedIn(!!userInfo);
  };

  // Check login status on mount and listen for auth events
  useEffect(() => {
    checkLoginStatus();

    const handleAuthChange = () => {
      checkLoginStatus();
    };

    window.addEventListener('authChange', handleAuthChange);
    window.addEventListener('storage', handleAuthChange);

    return () => {
      window.removeEventListener('authChange', handleAuthChange);
      window.removeEventListener('storage', handleAuthChange);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('userInfo');
    setIsLoggedIn(false);
    window.dispatchEvent(new Event('authChange'));
    navigate('/login');
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-indigo-900 via-purple-800 to-blue-700 shadow-xl sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-3xl font-extrabold text-yellow-300 tracking-wide transform hover:scale-105 transition duration-300 relative group">
              Crossroads 2025
              <span className="absolute bottom-0 left-0 w-0 h-1 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {['Home', 'Events', 'Schedule', 'Event Registration', 'Contact'].map((item) => (
              <Link
                key={item}
                to={item === 'Event Registration' ? '/event-registration' : `/${item.toLowerCase().replace(' ', '-')}`}
                className="relative text-white text-lg font-medium px-4 py-2 rounded-lg hover:bg-purple-600 hover:text-yellow-300 transition duration-300 group"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-1 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
            {isLoggedIn ? (
              <>
                <Link
                  to="/dashboard"
                  className="relative text-white text-lg font-medium px-4 py-2 rounded-lg hover:bg-purple-600 hover:text-yellow-300 transition duration-300 group"
                >
                  Dashboard
                  <span className="absolute bottom-0 left-0 w-0 h-1 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <button
                  onClick={handleLogout}
                  className="text-white bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg text-lg font-medium transition duration-300 transform hover:scale-105 shadow-md"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link
                to="/login"
                className="text-white bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg text-lg font-medium transition duration-300 transform hover:scale-105 shadow-md"
              >
                Login
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none transform hover:scale-110 transition duration-300"
              aria-label="Toggle menu"
            >
              <svg
                className="h-8 w-8 animate-pulse"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-500 ease-in-out transform ${
          isMenuOpen ? 'translate-x-0 opacity-100 max-h-screen' : 'translate-x-full opacity-0 max-h-0 overflow-hidden'
        }`}
      >
        <div className="px-4 pt-4 pb-6 space-y-3 bg-gradient-to-b from-blue-800 to-indigo-900">
          {['Home', 'Events', 'Schedule', 'Event Registration', 'Contact'].map((item) => (
            <Link
              key={item}
              to={item === 'Event Registration' ? '/event-registration' : `/${item.toLowerCase().replace(' ', '-')}`}
              className="relative text-white text-lg font-medium block px-4 py-3 rounded-lg hover:bg-purple-600 hover:text-yellow-300 transition duration-300 group"
              onClick={toggleMenu}
            >
              {item}
              <span className="absolute bottom-0 left-0 w-0 h-1 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
          {isLoggedIn ? (
            <>
              <Link
                to="/dashboard"
                className="relative text-white text-lg font-medium block px-4 py-3 rounded-lg hover:bg-purple-600 hover:text-yellow-300 transition duration-300 group"
                onClick={toggleMenu}
              >
                Dashboard
                <span className="absolute bottom-0 left-0 w-0 h-1 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <button
                onClick={() => {
                  handleLogout();
                  toggleMenu();
                }}
                className="text-white bg-red-600 hover:bg-red-700 w-full text-left px-4 py-3 rounded-lg text-lg font-medium transition duration-300 transform hover:scale-105"
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              to="/login"
              className="text-white bg-green-600 hover:bg-green-700 block px-4 py-3 rounded-lg text-lg font-medium transition duration-300 transform hover:scale-105"
              onClick={toggleMenu}
            >
              Login
            </Link>
          )}
        </div>
      </div>

      <style>{`
        nav {
          position: sticky;
          top: 0;
          z-index: 1000;
          backdrop-filter: blur(10px);
        }
        .transition-all {
          transition-property: max-height, opacity, transform;
        }
        .group:hover .h-1 {
          width: 100%;
        }
        button:hover {
          box-shadow: 0 0 15px rgba(255, 255, 255, 0.5);
        }
        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.7;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;