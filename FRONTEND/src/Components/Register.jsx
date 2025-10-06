// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const Register = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [mobile, setMobile] = useState('');
//   const [password, setPassword] = useState('');
//   const [showPassword, setShowPassword] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError('');

//     try {
//       await axios.post('https://crossroads-2025.onrender.com/api/auth/register', { name, email, mobile, password });
//       navigate('/login');
//     } catch (err) {
//       setError(err.response.data.message || 'Registration failed');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div>
//       <h2>Register</h2>
//       <form onSubmit={handleSubmit}>
//         <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
//         <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
//         <input type="tel" placeholder="Mobile (10 digits)" value={mobile} onChange={(e) => setMobile(e.target.value)} pattern="[6-9]{1}[0-9]{9}" required />
//         <div style={{ position: 'relative' }}>
//           <input
//             type={showPassword ? 'text' : 'password'}
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//           <span onClick={() => setShowPassword(!showPassword)} style={{ position: 'absolute', right: 10, top: 10 }}>
//             {showPassword ? '🙈' : '👁️'}
//           </span>
//         </div>
//         <button type="submit" disabled={loading}>
//           {loading ? <div className="spinner"></div> : 'Register'}
//         </button>
//         {error && <p>{error}</p>}
//       </form>
//     </div>
//   );
// };

// export default Register;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Eye, EyeOff, User, Mail, Phone, Lock, UserPlus, CheckCircle, X, Sparkles } from 'lucide-react';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      await axios.post('https://crossroads-2025.onrender.com/api/auth/register', { name, email, mobile, password });
      setShowSuccess(true);
      setTimeout(() => {
        navigate('/login');
      }, 2000);
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a1628] via-[#1a2f4f] to-[#0f1e35] flex items-center justify-center p-4 md:p-8 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600/10 via-cyan-500/5 to-transparent"></div>
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      </div>

      {/* Success Alert */}
      {showSuccess && (
        <div className="fixed top-4 md:top-8 right-4 md:right-8 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 md:px-6 py-3 md:py-4 rounded-lg shadow-2xl flex items-center gap-3 z-50 animate-slide-in max-w-sm">
          <CheckCircle className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0" />
          <div>
            <p className="font-semibold text-sm md:text-base">Registration Successful!</p>
            <p className="text-xs md:text-sm opacity-90">You can login now. Redirecting...</p>
          </div>
        </div>
      )}

      {/* Main Container */}
      <div className="relative z-10 w-full max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-0 bg-[#1a2f4f]/40 backdrop-blur-xl rounded-2xl shadow-2xl border border-blue-700/30 overflow-hidden">
          
          {/* Left Section - Welcome Content */}
          <div className="hidden lg:flex flex-col justify-between p-8 xl:p-12 bg-gradient-to-br from-[#0f2847]/80 to-[#1a3a5f]/60 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0" style={{
                backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                backgroundSize: '40px 40px'
              }}></div>
            </div>

            <div className="relative z-10">
              {/* Logo/Brand */}
              <div className="flex items-center gap-2 mb-12">
                <Sparkles className="w-6 h-6 text-cyan-400" />
                <span className="text-cyan-400 font-bold text-lg tracking-wide">CROSSROADS 2025</span>
              </div>

              {/* Main Heading */}
              <div className="mb-8">
                <h1 className="text-4xl xl:text-5xl font-bold text-white mb-4 leading-tight">
                  Welcome to the<br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                    Future of Tech
                  </span>
                </h1>
                <p className="text-blue-200 text-base xl:text-lg leading-relaxed">
                  Join thousands of innovators, creators, and tech enthusiasts in the most anticipated technical festival of the year. Create your account and be part of something extraordinary.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="bg-blue-800/30 backdrop-blur-sm rounded-xl p-4 border border-blue-600/30">
                  <div className="text-2xl xl:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 mb-1">
                    10+
                  </div>
                  <div className="text-blue-300 text-sm">Events</div>
                </div>
                <div className="bg-blue-800/30 backdrop-blur-sm rounded-xl p-4 border border-blue-600/30">
                  <div className="text-2xl xl:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 mb-1">
                    1K+
                  </div>
                  <div className="text-blue-300 text-sm">Participants</div>
                </div>
                <div className="bg-blue-800/30 backdrop-blur-sm rounded-xl p-4 border border-blue-600/30">
                  <div className="text-2xl xl:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 mb-1">
                    10+
                  </div>
                  <div className="text-blue-300 text-sm">Prizes</div>
                </div>
              </div>
            </div>

            {/* Bottom Quote */}
            <div className="relative z-10">
              <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border-l-4 border-cyan-400 p-4 rounded-lg">
                <p className="text-blue-100 italic text-sm">
                  "Innovation distinguishes between a leader and a follower. Join us to lead the future."
                </p>
              </div>
            </div>
          </div>

          {/* Right Section - Registration Form */}
          <div className="flex flex-col justify-center p-6 md:p-8 xl:p-12 bg-gradient-to-br from-[#1e3a5f]/50 to-[#0f2847]/30">
            {/* Mobile Logo */}
            <div className="lg:hidden flex items-center justify-center gap-2 mb-6">
              <Sparkles className="w-5 h-5 text-cyan-400" />
              <span className="text-cyan-400 font-bold text-base tracking-wide">CROSSROADS 2025</span>
            </div>

            {/* Header */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full mb-4 shadow-lg">
                <UserPlus className="w-7 h-7 md:w-8 md:h-8 text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Register With Us!</h2>
              <p className="text-blue-300 text-sm md:text-base">Join the innovation revolution</p>
              <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mt-3 rounded-full"></div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-5">
              {/* Name Input */}
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-3 md:pl-4 flex items-center pointer-events-none">
                  <User className="w-4 h-4 md:w-5 md:h-5 text-blue-400 group-focus-within:text-cyan-400 transition-colors" />
                </div>
                <input
                  type="text"
                  placeholder="Full Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full bg-blue-800/30 border border-blue-700/50 text-white placeholder-blue-400 rounded-lg pl-10 md:pl-12 pr-3 md:pr-4 py-3 md:py-3.5 text-sm md:text-base focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all"
                />
              </div>

              {/* Email Input */}
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-3 md:pl-4 flex items-center pointer-events-none">
                  <Mail className="w-4 h-4 md:w-5 md:h-5 text-blue-400 group-focus-within:text-cyan-400 transition-colors" />
                </div>
                <input
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full bg-blue-800/30 border border-blue-700/50 text-white placeholder-blue-400 rounded-lg pl-10 md:pl-12 pr-3 md:pr-4 py-3 md:py-3.5 text-sm md:text-base focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all"
                />
              </div>

              {/* Mobile Input */}
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-3 md:pl-4 flex items-center pointer-events-none">
                  <Phone className="w-4 h-4 md:w-5 md:h-5 text-blue-400 group-focus-within:text-cyan-400 transition-colors" />
                </div>
                <input
                  type="tel"
                  placeholder="Mobile Number"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  pattern="[6-9]{1}[0-9]{9}"
                  required
                  className="w-full bg-blue-800/30 border border-blue-700/50 text-white placeholder-blue-400 rounded-lg pl-10 md:pl-12 pr-3 md:pr-4 py-3 md:py-3.5 text-sm md:text-base focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all"
                />
              </div>

              {/* Password Input */}
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-3 md:pl-4 flex items-center pointer-events-none">
                  <Lock className="w-4 h-4 md:w-5 md:h-5 text-blue-400 group-focus-within:text-cyan-400 transition-colors" />
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full bg-blue-800/30 border border-blue-700/50 text-white placeholder-blue-400 rounded-lg pl-10 md:pl-12 pr-10 md:pr-12 py-3 md:py-3.5 text-sm md:text-base focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 md:pr-4 flex items-center text-blue-400 hover:text-cyan-400 transition-colors"
                >
                  {showPassword ? <EyeOff className="w-4 h-4 md:w-5 md:h-5" /> : <Eye className="w-4 h-4 md:w-5 md:h-5" />}
                </button>
              </div>

              {/* Error Message */}
              {error && (
                <div className="bg-red-500/20 border border-red-500/50 text-red-200 px-3 md:px-4 py-2.5 md:py-3 rounded-lg flex items-start gap-2 md:gap-3 animate-shake">
                  <X className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0 mt-0.5" />
                  <p className="text-xs md:text-sm">{error}</p>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-3 md:py-3.5 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-[1.02] active:scale-[0.98] text-sm md:text-base"
              >
                {loading ? (
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-4 h-4 md:w-5 md:h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    <span>Creating Account...</span>
                  </div>
                ) : (
                  'Create Account'
                )}
              </button>
            </form>

            {/* Login Link */}
            <div className="mt-5 md:mt-6 text-center">
              <p className="text-blue-300 text-xs md:text-sm">
                Already have an account?{' '}
                <button
                  onClick={() => navigate('/login')}
                  className="text-cyan-400 hover:text-cyan-300 font-semibold transition-colors"
                >
                  Login Now
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slide-in {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-5px); }
          75% { transform: translateX(5px); }
        }
        
        .animate-slide-in {
          animation: slide-in 0.3s ease-out;
        }
        
        .animate-shake {
          animation: shake 0.3s ease-in-out;
        }

        @keyframes pulse {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.3; }
        }
      `}</style>
    </div>
  );
};

export default Register;
