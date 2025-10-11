import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Eye, EyeOff, Mail, Lock, LogIn, CheckCircle, X, Sparkles, Zap, Trophy, Users } from 'lucide-react';

const Login = () => {
  const [email, setEmail] = useState('');
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
      const res = await axios.post('https://crossroads-2025.onrender.com/api/auth/login', { email, password });
      localStorage.setItem('userInfo', JSON.stringify(res.data));
      setShowSuccess(true);
      setTimeout(() => {
        navigate('/dashboard');
      }, 1500);
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a1628] via-[#1a2f4f] to-[#0f1e35] flex items-center justify-center p-4 md:p-8 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-cyan-600/10 via-blue-500/5 to-transparent"></div>
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      </div>

      {/* Success Alert */}
      {showSuccess && (
        <div className="fixed top-4 md:top-8 right-4 md:right-8 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 md:px-6 py-3 md:py-4 rounded-lg shadow-2xl flex items-center gap-3 z-50 animate-slide-in max-w-sm">
          <CheckCircle className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0" />
          <div>
            <p className="font-semibold text-sm md:text-base">Login Successful!</p>
            <p className="text-xs md:text-sm opacity-90">Welcome back! Redirecting...</p>
          </div>
        </div>
      )}

      {/* Main Container */}
      <div className="relative z-10 w-full max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-0 bg-[#1a2f4f]/40 backdrop-blur-xl rounded-2xl shadow-2xl border border-blue-700/30 overflow-hidden">
          
          {/* Left Section - Welcome Back Content */}
          <div className="hidden lg:flex flex-col justify-between p-8 xl:p-12 bg-gradient-to-br from-[#0f2847]/80 to-[#1a3a5f]/60 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0" style={{
                backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                backgroundSize: '40px 40px'
              }}></div>
            </div>

            {/* Animated gradient orbs */}
            <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-cyan-400/30 to-blue-500/30 rounded-full filter blur-2xl animate-float"></div>
            <div className="absolute bottom-20 left-20 w-40 h-40 bg-gradient-to-br from-blue-400/20 to-cyan-500/20 rounded-full filter blur-2xl animate-float-delayed"></div>

            <div className="relative z-10">
              {/* Logo/Brand */}
              <div className="flex items-center gap-2 mb-12">
                <Sparkles className="w-6 h-6 text-cyan-400" />
                <span className="text-cyan-400 font-bold text-lg tracking-wide">CROSSROADS 2025</span>
              </div>

              {/* Main Heading */}
              <div className="mb-8">
                <h1 className="text-4xl xl:text-5xl font-bold text-white mb-4 leading-tight">
                  Welcome Back,<br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                    Innovator!
                  </span>
                </h1>
                <p className="text-blue-200 text-base xl:text-lg leading-relaxed">
                  Continue your journey in the most exciting tech fest of the year. Your dashboard awaits with new challenges, events, and opportunities to showcase your skills.
                </p>
              </div>

              {/* Feature Cards */}
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4 bg-blue-800/20 backdrop-blur-sm rounded-xl p-4 border border-blue-600/20 hover:border-cyan-400/40 transition-all duration-300 group">
                  <div className="w-10 h-10 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Zap className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Exciting Competitions</h3>
                    <p className="text-blue-300 text-sm">Participate in cutting-edge tech challenges</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-blue-800/20 backdrop-blur-sm rounded-xl p-4 border border-blue-600/20 hover:border-cyan-400/40 transition-all duration-300 group">
                  <div className="w-10 h-10 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Trophy className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Win Amazing Prizes</h3>
                    <p className="text-blue-300 text-sm">Compete for incredible rewards and recognition</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-blue-800/20 backdrop-blur-sm rounded-xl p-4 border border-blue-600/20 hover:border-cyan-400/40 transition-all duration-300 group">
                  <div className="w-10 h-10 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Users className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Network & Collaborate</h3>
                    <p className="text-blue-300 text-sm">Connect with fellow tech enthusiasts</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Stats */}
            <div className="relative z-10">
              <div className="grid grid-cols-3 gap-3">
                <div className="text-center bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-sm rounded-lg p-3 border border-cyan-400/20">
                  <div className="text-2xl font-bold text-cyan-400 mb-1">10+</div>
                  <div className="text-blue-300 text-xs">Events</div>
                </div>
                <div className="text-center bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-sm rounded-lg p-3 border border-cyan-400/20">
                  <div className="text-2xl font-bold text-cyan-400 mb-1">1K+</div>
                  <div className="text-blue-300 text-xs">Participants</div>
                </div>
                <div className="text-center bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-sm rounded-lg p-3 border border-cyan-400/20">
                  <div className="text-2xl font-bold text-cyan-400 mb-1">10+</div>
                  <div className="text-blue-300 text-xs">Prizes</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Login Form */}
          <div className="flex flex-col justify-center p-6 md:p-8 xl:p-12 bg-gradient-to-br from-[#1e3a5f]/50 to-[#0f2847]/30">
            {/* Mobile Logo */}
            <div className="lg:hidden flex items-center justify-center gap-2 mb-6">
              <Sparkles className="w-5 h-5 text-cyan-400" />
              <span className="text-cyan-400 font-bold text-base tracking-wide">CROSSROADS 2025</span>
            </div>

            {/* Header */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full mb-4 shadow-lg shadow-cyan-500/50">
                <LogIn className="w-7 h-7 md:w-8 md:h-8 text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Welcome Back!</h2>
              <p className="text-blue-300 text-sm md:text-base">Login to access your dashboard</p>
              <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mt-3 rounded-full"></div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6">
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

              {/* Forgot Password Link */}
              <div className="text-right">
                <button
                  type="button"
                  className="text-cyan-400 hover:text-cyan-300 text-xs md:text-sm font-medium transition-colors"
                >
                  Forgot Password?
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
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-3 md:py-3.5 rounded-lg shadow-lg hover:shadow-xl hover:shadow-cyan-500/30 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-[1.02] active:scale-[0.98] text-sm md:text-base"
              >
                {loading ? (
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-4 h-4 md:w-5 md:h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    <span>Logging In...</span>
                  </div>
                ) : (
                  'Login to Dashboard'
                )}
              </button>
            </form>

            {/* Divider */}
            <div className="relative my-6 md:my-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-blue-700/50"></div>
              </div>
              <div className="relative flex justify-center text-xs md:text-sm">
                <span className="px-4 bg-gradient-to-br from-[#1e3a5f]/80 to-[#0f2847]/80 text-blue-300">
                  New to Crossroads?
                </span>
              </div>
            </div>

            {/* Register Link */}
            <div className="text-center">
              <p className="text-blue-300 text-xs md:text-sm mb-4">
                Don't have an account yet?
              </p>
              <button
                onClick={() => navigate('/register')}
                className="w-full bg-blue-800/30 hover:bg-blue-800/50 border border-cyan-400/50 hover:border-cyan-400 text-cyan-400 font-semibold py-3 md:py-3.5 rounded-lg transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] text-sm md:text-base"
              >
                Create New Account
              </button>
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

        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-20px) translateX(10px);
          }
        }

        @keyframes float-delayed {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(20px) translateX(-10px);
          }
        }
        
        .animate-slide-in {
          animation: slide-in 0.3s ease-out;
        }
        
        .animate-shake {
          animation: shake 0.3s ease-in-out;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.3; }
        }
      `}</style>
    </div>
  );
};

export default Login;
