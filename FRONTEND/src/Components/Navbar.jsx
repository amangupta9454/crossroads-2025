// import React, { useState, useEffect } from 'react';
// import { Link, useNavigate } from 'react-router-dom';

// const Navbar = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const navigate = useNavigate();

//   // Function to check login status
//   const checkLoginStatus = () => {
//     const userInfo = JSON.parse(localStorage.getItem('userInfo'));
//     setIsLoggedIn(!!userInfo);
//   };

//   // Check login status on mount and listen for auth events
//   useEffect(() => {
//     checkLoginStatus();

//     const handleAuthChange = () => {
//       checkLoginStatus();
//     };

//     window.addEventListener('authChange', handleAuthChange);
//     window.addEventListener('storage', handleAuthChange);

//     return () => {
//       window.removeEventListener('authChange', handleAuthChange);
//       window.removeEventListener('storage', handleAuthChange);
//     };
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem('userInfo');
//     setIsLoggedIn(false);
//     window.dispatchEvent(new Event('authChange'));
//     navigate('/login');
//   };

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <nav className="bg-gradient-to-r from-indigo-900 via-purple-800 to-blue-700 shadow-xl sticky top-0 z-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16">
//           {/* Logo */}
//           <div className="flex-shrink-0 flex items-center">
//             <Link to="/" className="text-3xl font-extrabold text-yellow-300 tracking-wide transform hover:scale-105 transition duration-300 relative group">
//               Crossroads 2025
//               <span className="absolute bottom-0 left-0 w-0 h-1 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
//             </Link>
//           </div>

//           {/* Desktop Menu */}
//           <div className="hidden md:flex items-center space-x-6">
//             {['Home', 'Events', 'Schedule', 'Event Registration', 'Contact'].map((item) => (
//               <Link
//                 key={item}
//                 to={item === 'Event Registration' ? '/event-registration' : `/${item.toLowerCase().replace(' ', '-')}`}
//                 className="relative text-white text-lg font-medium px-4 py-2 rounded-lg hover:bg-purple-600 hover:text-yellow-300 transition duration-300 group"
//               >
//                 {item}
//                 <span className="absolute bottom-0 left-0 w-0 h-1 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
//               </Link>
//             ))}
//             {isLoggedIn ? (
//               <>
//                 <Link
//                   to="/dashboard"
//                   className="relative text-white text-lg font-medium px-4 py-2 rounded-lg hover:bg-purple-600 hover:text-yellow-300 transition duration-300 group"
//                 >
//                   Dashboard
//                   <span className="absolute bottom-0 left-0 w-0 h-1 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
//                 </Link>
//                 <button
//                   onClick={handleLogout}
//                   className="text-white bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg text-lg font-medium transition duration-300 transform hover:scale-105 shadow-md"
//                 >
//                   Logout
//                 </button>
//               </>
//             ) : (
//               <Link
//                 to="/login"
//                 className="text-white bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg text-lg font-medium transition duration-300 transform hover:scale-105 shadow-md"
//               >
//                 Login
//               </Link>
//             )}
//           </div>

//           {/* Mobile Menu Button */}
//           <div className="md:hidden flex items-center">
//             <button
//               onClick={toggleMenu}
//               className="text-white focus:outline-none transform hover:scale-110 transition duration-300"
//               aria-label="Toggle menu"
//             >
//               <svg
//                 className="h-8 w-8 animate-pulse"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
//                 />
//               </svg>
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       <div
//         className={`md:hidden transition-all duration-500 ease-in-out transform ${
//           isMenuOpen ? 'translate-x-0 opacity-100 max-h-screen' : 'translate-x-full opacity-0 max-h-0 overflow-hidden'
//         }`}
//       >
//         <div className="px-4 pt-4 pb-6 space-y-3 bg-gradient-to-b from-blue-800 to-indigo-900">
//           {['Home', 'Events', 'Schedule', 'Event Registration', 'Contact'].map((item) => (
//             <Link
//               key={item}
//               to={item === 'Event Registration' ? '/event-registration' : `/${item.toLowerCase().replace(' ', '-')}`}
//               className="relative text-white text-lg font-medium block px-4 py-3 rounded-lg hover:bg-purple-600 hover:text-yellow-300 transition duration-300 group"
//               onClick={toggleMenu}
//             >
//               {item}
//               <span className="absolute bottom-0 left-0 w-0 h-1 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
//             </Link>
//           ))}
//           {isLoggedIn ? (
//             <>
//               <Link
//                 to="/dashboard"
//                 className="relative text-white text-lg font-medium block px-4 py-3 rounded-lg hover:bg-purple-600 hover:text-yellow-300 transition duration-300 group"
//                 onClick={toggleMenu}
//               >
//                 Dashboard
//                 <span className="absolute bottom-0 left-0 w-0 h-1 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
//               </Link>
//               <button
//                 onClick={() => {
//                   handleLogout();
//                   toggleMenu();
//                 }}
//                 className="text-white bg-red-600 hover:bg-red-700 w-full text-left px-4 py-3 rounded-lg text-lg font-medium transition duration-300 transform hover:scale-105"
//               >
//                 Logout
//               </button>
//             </>
//           ) : (
//             <Link
//               to="/login"
//               className="text-white bg-green-600 hover:bg-green-700 block px-4 py-3 rounded-lg text-lg font-medium transition duration-300 transform hover:scale-105"
//               onClick={toggleMenu}
//             >
//               Login
//             </Link>
//           )}
//         </div>
//       </div>

//       <style>{`
//         nav {
//           position: sticky;
//           top: 0;
//           z-index: 1000;
//           backdrop-filter: blur(10px);
//         }
//         .transition-all {
//           transition-property: max-height, opacity, transform;
//         }
//         .group:hover .h-1 {
//           width: 100%;
//         }
//         button:hover {
//           box-shadow: 0 0 15px rgba(255, 255, 255, 0.5);
//         }
//         .animate-pulse {
//           animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
//         }
//         @keyframes pulse {
//           0%, 100% {
//             opacity: 1;
//           }
//           50% {
//             opacity: 0.7;
//           }
//         }
//       `}</style>
//     </nav>
//   );
// };

// export default Navbar;

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
    <nav className="navbar-animated sticky top-0 z-50 border-b border-gray-800/50">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#ff6b35]/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#b466ff]/10 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-[#ff66c4]/10 rounded-full blur-3xl animate-float-slow"></div>
      </div>

      {/* Gradient Mesh Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0f1729]/95 via-[#1a2642]/95 to-[#0f1729]/95 backdrop-blur-xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-3xl font-black tracking-wide transform hover:scale-105 transition-all duration-300 relative group">
              <span className="text-[#ff6b35] drop-shadow-glow-orange animate-pulse-subtle">CROSSROADS</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#b466ff] to-[#ff66c4] ml-2 drop-shadow-glow-purple animate-pulse-subtle-delayed">2025</span>
              <span className="absolute -bottom-1 left-0 w-0 h-1 bg-gradient-to-r from-[#ff6b35] to-[#ff66c4] transition-all duration-300 group-hover:w-full rounded-full shadow-lg shadow-[#ff6b35]/50"></span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-2">
            {['Home', 'Events', 'Schedule', 'Event Registration', 'Contact'].map((item, index) => (
              <Link
                key={item}
                to={item === 'Event Registration' ? '/event-registration' : `/${item.toLowerCase().replace(' ', '-')}`}
                className="relative text-gray-200 text-base font-semibold px-5 py-2.5 rounded-lg hover:bg-gradient-to-r hover:from-[#ff6b35]/20 hover:to-[#b466ff]/20 hover:text-[#ff6b35] transition-all duration-300 group overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="relative z-10">{item}</span>
                <span className="absolute inset-0 bg-gradient-to-r from-[#ff6b35]/0 via-[#ff6b35]/10 to-[#ff6b35]/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#ff6b35] to-[#ff66c4] transition-all duration-300 group-hover:w-full rounded-full shadow-lg shadow-[#ff6b35]/50"></span>
              </Link>
            ))}
            {isLoggedIn ? (
              <>
                <Link
                  to="/dashboard"
                  className="relative text-gray-200 text-base font-semibold px-5 py-2.5 rounded-lg hover:bg-gradient-to-r hover:from-[#ff6b35]/20 hover:to-[#b466ff]/20 hover:text-[#ff6b35] transition-all duration-300 group overflow-hidden"
                >
                  <span className="relative z-10">Dashboard</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-[#ff6b35]/0 via-[#ff6b35]/10 to-[#ff6b35]/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#ff6b35] to-[#ff66c4] transition-all duration-300 group-hover:w-full rounded-full shadow-lg shadow-[#ff6b35]/50"></span>
                </Link>
                <button
                  onClick={handleLogout}
                  className="ml-2 text-white bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 px-6 py-2.5 rounded-lg text-base font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-red-500/50 relative overflow-hidden group"
                >
                  <span className="relative z-10">Logout</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-red-400/0 via-red-400/30 to-red-400/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500"></span>
                </button>
              </>
            ) : (
              <Link
                to="/login"
                className="ml-2 text-white bg-gradient-to-r from-[#b466ff] to-[#ff66c4] hover:from-[#ff6b35] hover:to-[#ff8c42] px-6 py-2.5 rounded-lg text-base font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-[#ff6b35]/50 relative overflow-hidden group animate-gradient"
              >
                <span className="relative z-10">Login</span>
                <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500"></span>
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-[#ff6b35] focus:outline-none transform hover:scale-110 transition-all duration-300 hover:rotate-90"
              aria-label="Toggle menu"
            >
              <svg
                className="h-8 w-8 drop-shadow-glow-orange"
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
        className={`md:hidden transition-all duration-500 ease-in-out transform relative ${
          isMenuOpen ? 'translate-x-0 opacity-100 max-h-screen' : 'translate-x-full opacity-0 max-h-0 overflow-hidden'
        }`}
      >
        <div className="px-4 pt-4 pb-6 space-y-2 bg-gradient-to-b from-[#1a2642]/95 to-[#0f1729]/95 border-t border-gray-800/50 backdrop-blur-xl relative overflow-hidden">
          {/* Mobile Menu Background Animation */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#ff6b35]/5 rounded-full blur-2xl animate-float"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#b466ff]/5 rounded-full blur-2xl animate-float-delayed"></div>
          </div>

          {['Home', 'Events', 'Schedule', 'Event Registration', 'Contact'].map((item, index) => (
            <Link
              key={item}
              to={item === 'Event Registration' ? '/event-registration' : `/${item.toLowerCase().replace(' ', '-')}`}
              className="relative text-gray-200 text-base font-semibold block px-4 py-3 rounded-lg hover:bg-gradient-to-r hover:from-[#ff6b35]/20 hover:to-[#b466ff]/20 hover:text-[#ff6b35] transition-all duration-300 group overflow-hidden z-10"
              onClick={toggleMenu}
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <span className="relative z-10">{item}</span>
              <span className="absolute inset-0 bg-gradient-to-r from-[#ff6b35]/0 via-[#ff6b35]/10 to-[#ff6b35]/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#ff6b35] to-[#ff66c4] transition-all duration-300 group-hover:w-full rounded-full"></span>
            </Link>
          ))}
          {isLoggedIn ? (
            <>
              <Link
                to="/dashboard"
                className="relative text-gray-200 text-base font-semibold block px-4 py-3 rounded-lg hover:bg-gradient-to-r hover:from-[#ff6b35]/20 hover:to-[#b466ff]/20 hover:text-[#ff6b35] transition-all duration-300 group overflow-hidden z-10"
                onClick={toggleMenu}
              >
                <span className="relative z-10">Dashboard</span>
                <span className="absolute inset-0 bg-gradient-to-r from-[#ff6b35]/0 via-[#ff6b35]/10 to-[#ff6b35]/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#ff6b35] to-[#ff66c4] transition-all duration-300 group-hover:w-full rounded-full"></span>
              </Link>
              <button
                onClick={() => {
                  handleLogout();
                  toggleMenu();
                }}
                className="relative text-white bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 w-full text-left px-4 py-3 rounded-lg text-base font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg overflow-hidden group z-10"
              >
                <span className="relative z-10">Logout</span>
                <span className="absolute inset-0 bg-gradient-to-r from-red-400/0 via-red-400/30 to-red-400/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500"></span>
              </button>
            </>
          ) : (
            <Link
              to="/login"
              className="relative text-white bg-gradient-to-r from-[#b466ff] to-[#ff66c4] hover:from-[#ff6b35] hover:to-[#ff8c42] block px-4 py-3 rounded-lg text-base font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg overflow-hidden group z-10 animate-gradient"
              onClick={toggleMenu}
            >
              <span className="relative z-10">Login</span>
              <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500"></span>
            </Link>
          )}
        </div>
      </div>

      <style>{`
        .navbar-animated {
          position: sticky;
          top: 0;
          z-index: 1000;
          overflow: hidden;
        }
        
        .transition-all {
          transition-property: max-height, opacity, transform;
        }
        
        .drop-shadow-glow-orange {
          filter: drop-shadow(0 0 8px rgba(255, 107, 53, 0.6));
        }
        
        .drop-shadow-glow-purple {
          filter: drop-shadow(0 0 8px rgba(180, 102, 255, 0.6));
        }
        
        @keyframes float {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -30px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }
        
        @keyframes float-delayed {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(-30px, 30px) scale(0.9);
          }
          66% {
            transform: translate(20px, -20px) scale(1.1);
          }
        }
        
        @keyframes float-slow {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(40px, -40px) scale(1.05);
          }
        }
        
        @keyframes pulse-subtle {
          0%, 100% {
            opacity: 1;
            filter: drop-shadow(0 0 8px rgba(255, 107, 53, 0.6));
          }
          50% {
            opacity: 0.9;
            filter: drop-shadow(0 0 12px rgba(255, 107, 53, 0.8));
          }
        }
        
        @keyframes pulse-subtle-delayed {
          0%, 100% {
            opacity: 1;
            filter: drop-shadow(0 0 8px rgba(180, 102, 255, 0.6));
          }
          50% {
            opacity: 0.9;
            filter: drop-shadow(0 0 12px rgba(180, 102, 255, 0.8));
          }
        }
        
        @keyframes gradient-shift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 10s ease-in-out infinite;
        }
        
        .animate-float-slow {
          animation: float-slow 12s ease-in-out infinite;
        }
        
        .animate-pulse-subtle {
          animation: pulse-subtle 3s ease-in-out infinite;
        }
        
        .animate-pulse-subtle-delayed {
          animation: pulse-subtle-delayed 3s ease-in-out infinite 0.5s;
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient-shift 4s ease infinite;
        }
        
        button:hover {
          box-shadow: 0 0 20px rgba(255, 107, 53, 0.4);
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
