import  { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  // Check login status on mount and listen for changes
  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    setIsLoggedIn(!!userInfo);

    // Listen for storage changes (e.g., login/logout in another tab)
    const handleStorageChange = () => {
      const updatedUserInfo = JSON.parse(localStorage.getItem('userInfo'));
      setIsLoggedIn(!!updatedUserInfo);
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('userInfo');
    setIsLoggedIn(false);
    navigate('/login');
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-2xl font-bold text-white tracking-tight hover:text-yellow-300 transition duration-300">
              Crossroads 2025
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="/"
              className="text-white hover:bg-blue-800 hover:text-yellow-300 px-3 py-2 rounded-md text-sm font-medium transition duration-300"
            >
              Home
            </Link>
            <Link
              to="/events"
              className="text-white hover:bg-blue-800 hover:text-yellow-300 px-3 py-2 rounded-md text-sm font-medium transition duration-300"
            >
              Events
            </Link>
            <Link
              to="/schedule"
              className="text-white hover:bg-blue-800 hover:text-yellow-300 px-3 py-2 rounded-md text-sm font-medium transition duration-300"
            >
              Schedule
            </Link>
            <Link
              to="/event-registration"
              className="text-white hover:bg-blue-800 hover:text-yellow-300 px-3 py-2 rounded-md text-sm font-medium transition duration-300"
            >
              Event Registration
            </Link>
            <Link
              to="/contact"
              className="text-white hover:bg-blue-800 hover:text-yellow-300 px-3 py-2 rounded-md text-sm font-medium transition duration-300"
            >
              Contact
            </Link>
            {isLoggedIn ? (
              <>
                <Link
                  to="/dashboard"
                  className="text-white hover:bg-blue-800 hover:text-yellow-300 px-3 py-2 rounded-md text-sm font-medium transition duration-300"
                >
                  Dashboard
                </Link>
                <button
                  onClick={handleLogout}
                  className="text-white bg-red-600 hover:bg-red-700 px-3 py-2 rounded-md text-sm font-medium transition duration-300"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link
                to="/login"
                className="text-white bg-green-600 hover:bg-green-700 px-3 py-2 rounded-md text-sm font-medium transition duration-300"
              >
                Login
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
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
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-blue-700">
          <Link
            to="/"
            className="text-white hover:bg-blue-800 hover:text-yellow-300 block px-3 py-2 rounded-md text-base font-medium transition duration-300"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            to="/events"
            className="text-white hover:bg-blue-800 hover:text-yellow-300 block px-3 py-2 rounded-md text-base font-medium transition duration-300"
            onClick={toggleMenu}
          >
            Events
          </Link>
          <Link
            to="/schedule"
            className="text-white hover:bg-blue-800 hover:text-yellow-300 block px-3 py-2 rounded-md text-base font-medium transition duration-300"
            onClick={toggleMenu}
          >
            Schedule
          </Link>
          <Link
            to="/event-registration"
            className="text-white hover:bg-blue-800 hover:text-yellow-300 block px-3 py-2 rounded-md text-base font-medium transition duration-300"
            onClick={toggleMenu}
          >
            Event Registration
          </Link>
          <Link
            to="/contact"
            className="text-white hover:bg-blue-800 hover:text-yellow-300 block px-3 py-2 rounded-md text-base font-medium transition duration-300"
            onClick={toggleMenu}
          >
            Contact
          </Link>
          {isLoggedIn ? (
            <>
              <Link
                to="/dashboard"
                className="text-white hover:bg-blue-800 hover:text-yellow-300 block px-3 py-2 rounded-md text-base font-medium transition duration-300"
                onClick={toggleMenu}
              >
                Dashboard
              </Link>
              <button
                onClick={() => {
                  handleLogout();
                  toggleMenu();
                }}
                className="text-white bg-red-600 hover:bg-red-700 w-full text-left px-3 py-2 rounded-md text-base font-medium transition duration-300"
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              to="/login"
              className="text-white bg-green-600 hover:bg-green-700 block px-3 py-2 rounded-md text-base font-medium transition duration-300"
              onClick={toggleMenu}
            >
              Login
            </Link>
          )}
        </div>
      </div>

      <style jsx>{`
        nav {
          position: sticky;
          top: 0;
          z-index: 1000;
        }
        .transition-all {
          transition-property: max-height, opacity;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;