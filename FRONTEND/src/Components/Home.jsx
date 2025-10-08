import { useEffect, useState, useRef } from "react";
import logo from "/logo.jpeg";

import { FaYoutube, FaWhatsapp, FaLinkedin, FaInstagram, FaEnvelope, FaArrowUp } from 'react-icons/fa';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import harishImage from "../assets/sumit.jpg";
import shauryaImage from "../assets/shauryasingh.jpg";
import hod from "../assets/hod.png";
import aadeshImage from "../assets/riddhi.jpg";
import sahilKumarImage from "../assets/priya.jpg";
import sahilVermaImage from "../assets/sahilverma.jpg";
import swati from "../assets/swati.jpg";
import { Link } from 'react-router-dom';

const Home = () => {
  const [text, setText] = useState("");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollProgress, setScrollProgress] = useState(0);
  const [countdown, setCountdown] = useState(""); // State for countdown timer
  const title = "Crossroad 2025";
  const aboutSectionRef = useRef(null);

  // Countdown timer effect
  useEffect(() => {
    const eventDate = new Date('2025-11-12T09:00:00+05:30'); // Event start: Nov 12, 2025, 9:00 AM IST
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = eventDate.getTime() - now;
      if (distance < 0) {
        setCountdown('Event Started!');
        clearInterval(interval);
        return;
      }
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      setCountdown(`${days}d ${hours}h ${minutes}m ${seconds}s`);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Scroll progress effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollProgress(scrollPercent);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Mouse movement effect
  const handleMouseMove = (e) => {
    setMousePosition({
      x: (e.clientX / window.innerWidth) * 10 - 5,
      y: (e.clientY / window.innerHeight) * 10 - 5,
    });
  };

  // Text animation effect
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(title.slice(0, i));
      i++;
      if (i > title.length) clearInterval(interval);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  // Team member details
  const teamMembers = [
    { 
      id: 1, 
      name: "Sumit Prajapati", 
      designation: "Robo Race", 
      image: harishImage, 
      linkedin: "https://www.linkedin.com/in/hareesh-jaiveer-singh-317aa4328/" 
    },
    { 
      id: 2, 
      name: "XYZ-UNKNOWN", 
      designation: "Ad mad Show", 
      image: shauryaImage, 
      linkedin: "https://www.linkedin.com/in/shaurya-singh-9a13b9277" 
    },
    { 
      id: 3, 
      name: "Tripati Chaudhary", 
      designation: "Technical Poster", 
      image: hod, 
      linkedin: "https://www.linkedin.com/in/alish-sirohi-5a591b299" 
    },
    { 
      id: 4, 
      name: "Riddhi Chauhan", 
      designation: "Dance", 
      image: aadeshImage, 
      linkedin: "https://www.linkedin.com/in/aadesh-kumar-60a311304" 
    },
    { 
      id: 5, 
      name: "Priya", 
      designation: "Code Puzzel ", 
      image: sahilKumarImage, 
      linkedin: "https://www.linkedin.com/in/sahil-kumar-a93439301" 
    },
    { 
      id: 6, 
      name: "Kapil Sharma", 
      designation: "Project Exhibition", 
      image: sahilVermaImage, 
      linkedin: "https://www.linkedin.com/in/sahil-verma-957528310" 
    },
    { 
      id: 7, 
      name: "Swati Chaudhary", 
      designation: "Food without Fire", 
      image: swati, 
      linkedin: "https://www.linkedin.com/in/tanu-jha-78029a347" 
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2, slidesToScroll: 1 }
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1, slidesToScroll: 1 }
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden">
      <div className="fixed top-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-pink-500 z-50" style={{ width: `${scrollProgress}%` }} />
      
      <section className="relative flex items-center justify-center h-auto min-h-[40vh] w-full overflow-hidden px-6 py-20 md:py-28">
        <div className="absolute w-72 h-72 bg-blue-500 rounded-full opacity-20 blur-[140px] top-10 left-5 md:w-[28rem] md:h-[28rem] animate-pulse"></div>
        <div className="absolute w-72 h-72 bg-pink-500 rounded-full opacity-20 blur-[140px] bottom-10 right-5 md:w-[28rem] md:h-[28rem] animate-pulse"></div>
        <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl flex-1 space-y-12 md:space-y-0">
          <div className="text-center md:text-left space-y-8 max-w-lg">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-wide bg-gradient-to-r from-blue-400 to-pink-400 text-transparent bg-clip-text pt-14 transition-transform duration-300 hover:scale-105 animate-float">
              {text}
            </h1>
            <div className="text-2xl font-bold text-cyan-400 animate-pulse">
              Event Starts In: {countdown}
            </div>
            <div className="w-28 h-1 bg-gradient-to-r from-blue-500 to-pink-500 mx-auto md:mx-0 rounded-full"></div>
            <p className="text-lg text-gray-300 leading-relaxed max-w-md md:max-w-xl text-justify">
              Unleash your potential at the biggest <span className="text-blue-400 font-semibold">Tech Fest</span> of the year.  
              <span className="text-pink-400 font-semibold"> Innovation, creativity, and excitement</span> — all in one place!
            </p>
          </div>
          <div className="relative mt-8 md:mt-0 flex justify-center items-center">
            <div className="absolute w-40 h-40 md:w-48 md:h-48 bg-white/10 backdrop-blur-xl rounded-full shadow-lg animate-pulse"></div>
            <img src={logo} alt="Crossroad Logo" className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-52 md:h-52 object-cover rounded-full shadow-lg transition-transform duration-500 hover:scale-110 hover:rotate-6" />
          </div>
        </div>
      </section>

      <div className="w-full bg-gradient-to-r from-[#1a1a2e] via-[#16213e] to-[#0f3460] py-3 mt-[-20px]">
        <marquee behavior="scroll" direction="left" scrollamount="8" className="text-white text-2xl font-bold tracking-wide uppercase hover:text-cyan-400 transition-colors duration-300">
          🌟 Welcome to The Crossroad 2025! 🚀
          Get ready for an electrifying experience! HIET Ghaziabad is thrilled to host the most exciting technical fest of the year from <span className="text-blue-400 font-bold">12th November to 15th November.</span> Mark your calendars, gather your squad, and dive into a world of innovation, creativity, and endless possibilities!
          👉 Don't miss out —  <Link to="/registration" className="text-blue-500 hover:text-purple-600 underline ml-2">Register Now</Link>
        </marquee>
      </div>

      <section ref={aboutSectionRef} className="relative py-16 px-6 sm:px-12 lg:px-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-black to-gray-900 animate-pulse"></div>
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="absolute w-3 h-3 bg-blue-400 rounded-full opacity-75 animate-bounce" style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}></div>
          ))}
        </div>
        <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center py-10 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-black">
  <div className="space-y-6 sm:space-y-8 text-white relative z-0">
    <h2 className="crossroad-heading">
      About The Crossroad <br /> 2025
    </h2>
    <p className="crossroad-paragraph">
      <span className="font-bold text-yellow-400">Crossroad 2025</span> is a groundbreaking tech fest that redefines innovation and creativity. 
      Uniting global visionaries, it offers an electrifying platform to unveil revolutionary ideas, compete in high-stakes challenges, and forge connections with industry pioneers. 
      With state-of-the-art workshops, pulse-racing hackathons, and immersive experiences, Crossroad 2025 ignites inspiration and empowers the next generation of innovators to shape the future.
    </p>
    <div className="crossroad-glow-effect"></div>
  </div>
  <div className="relative">
    <div className="crossroad-circle">
      <div className="crossroad-circle-overlay"></div>
      <div className="text-center space-y-4 z-0">
        <h3 className="crossroad-circle-title">Crossroad</h3>
        <p className="crossroad-circle-year">2025</p>
        <p className="crossroad-circle-subtitle">Innovate & Ignite</p>
      </div>
      <div className="crossroad-circle-border"></div>
      <div className="crossroad-circle-particles"></div>
    </div>
  </div>
</div>
        <div className="relative flex flex-col md:flex-row justify-between items-center py-10 px-8 bg-gray-800 rounded-3xl mx-auto mt-12 max-w-4xl shadow-lg transition-all duration-300 hover:scale-105 hover:ring-4 hover:ring-purple-500 ring-cyan-500 ring-2">
          <div className="text-center md:text-left flex-1">
            <h2 className="text-3xl font-extrabold text-blue-400 hover:text-cyan-400 transition duration-300">
              Ready to Join?
            </h2>
            <p className="text-gray-300 text-lg">Experience innovation like never before!</p>
          </div>
          <button className="mt-6 md:mt-0 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl hover:scale-110 transition cursor-pointer">
            <a href="tel:+919876543210">Connect With Us</a>
          </button>
        </div>
      </section>

      <section
  className="relative w-full py-24 bg-gradient-to-br from-[#0a0015] via-[#1a0b3a] to-[#0f0025] overflow-hidden"
  onMouseMove={handleMouseMove}
>
  <div className="absolute inset-0 pointer-events-none">
    {Array.from({ length: 50 }).map((_, index) => (
      <div
        key={index}
        className="absolute text-cyan-300 opacity-40 text-sm animate-neon-twinkle"
        style={{
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          transform: `translate(${mousePosition.x * 0.05}px, ${mousePosition.y * 0.05}px) scale(${0.6 + Math.random() * 0.4})`,
        }}
      >
        ✦
      </div>
    ))}
  </div>
{/* 
  <div className="absolute inset-0 bg-gradient-radial from-cyan-500/10 via-transparent to-transparent animate-pulse-slow"></div> */}

  <h2 className="text-5xl md:text-7xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-500 mb-20 relative z-0  tracking-tighter">
    Meet Our Tech Titans
    {/* <span className="block h-1 w-32 mx-auto mt-3 bg-gradient-to-r from-cyan-700 to-purple-700 rounded-full shadow-[0_0_15px_rgba(34,211,238,0.7)]"></span> */}
  </h2>

  <div className="relative w-full max-w-7xl mx-auto px-6 z-0">
    <Slider {...sliderSettings}>
      {teamMembers.map((member) => (
        <div key={member.id} className="p-6">
          <div className="relative group bg-gradient-to-br from-[#1a1a2e]/70 via-[#2a2a4e]/50 to-[#3a3a6e]/30 rounded-2xl p-8 text-center backdrop-blur-xl border border-cyan-400/20 transition-all duration-500 hover:scale-105 hover:shadow-[0_0_40px_rgba(34,211,238,0.6)] hover:-rotate-2">
            {/* <div className="absolute inset-0 bg-gradient-radial from-cyan-400/20 to-transparent blur-3xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div> */}

            <div className="relative w-44 h-44 mx-auto rounded-full border-4 border-cyan-300/50 overflow-hidden transition-all duration-700 group-hover:-translate-y-3 group-hover:scale-110 ">
              <img src={member.image} alt={member.name} className="object-cover w-full h-full" />
            </div>

            <h3 className="mt-6 text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 to-blue-300 tracking-wide transition-colors duration-300 group-hover:from-cyan-300 group-hover:to-blue-400">
              {member.name}
            </h3>
            <p className="mt-3 text-lg text-gray-100 font-medium italic opacity-85 transition-opacity duration-300 group-hover:opacity-100">
              {member.designation}
            </p>

            <a
              href={member.linkedin}
              className="relative inline-block mt-6 px-10 py-3 rounded-full font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 transition-all duration-300 hover:scale-110 overflow-hidden"
            >
              <span className="relative z-0">WhatsApp</span>
              <span className="absolute inset-0 bg-cyan-300/30 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center rounded-full"></span>
            </a>
          </div>
        </div>
      ))}
    </Slider>
  </div>

  <style>{`
    @keyframes neon-twinkle {
      0%, 100% { opacity: 0.2; transform: scale(0.6); }
      50% { opacity: 0.7; transform: scale(1.1); }
    }
    @keyframes neon-glow {
      0%, 100% { text-shadow: 0 0 15px rgba(34, 211, 238, 0.6), 0 0 30px rgba(34, 211, 238, 0.4); }
      50% { text-shadow: 0 0 25px rgba(34, 211, 238, 0.9), 0 0 50px rgba(34, 211, 238, 0.6); }
    }
    @keyframes pulse-slow {
      0%, 100% { opacity: 0.3; }
      50% { opacity: 0.5; }
    }
    .animate-neon-twinkle {
      animation: neon-twinkle ${1.5 + Math.random() * 2}s ease-in-out infinite;
    }
    .animate-neon-glow {
      animation: neon-glow 4s ease-in-out infinite;
    }
    .animate-pulse-slow {
      animation: pulse-slow 8s ease-in-out infinite;
    }
  `}</style>
</section>

      {/* <footer className="relative bg-gray-900 text-white py-12 px-6 sm:px-10 lg:px-20 border-t-[5px] border-cyan-500 shadow-2xl">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 text-center sm:text-left">
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-cyan-400 border-b-2 border-cyan-600 pb-2 uppercase tracking-wider animate-fadeIn">
              Institutional Queries?
            </h2>
            <div className="space-y-3">
              {[
                { name: 'AMAN GUPTA', phone: '9560472926' },
                { name: 'HARISH JAYVEER SINGH', phone: '1234567890' },
                { name: 'CHESHTA SHARMA', phone: '1234567890' },
              ].map(({ name, phone }) => (
                <p key={name} className="text-sm sm:text-base font-light">
                  <span className="text-violet-400 font-medium">{name}:</span>
                  <a href={`tel:+91${phone}`} className="hover:text-green-400 ml-1 transition-all duration-300 ease-in-out">
                    {phone}
                  </a>
                </p>
              ))}
            </div>
          </div>
          <div className="flex flex-col items-center sm:items-start gap-4">
            <h2 className="text-lg font-semibold text-cyan-400 border-b-2 border-cyan-600 pb-2 uppercase tracking-wider animate-fadeIn">
              Quick Links
            </h2>
           <div className="flex flex-col items-center sm:items-start gap-2">
            <Link to="/" className="text-gray-400 text-sm sm:text-base transition-all duration-300 ease-in-out hover:translate-x-1 hover:underline hover:text-cyan-600">
              Home
            </Link>
            <Link to="/event" className="text-gray-400 text-sm sm:text-base transition-all duration-300 ease-in-out hover:translate-x-1 hover:underline hover:text-cyan-600">
              Event
            </Link>
            <Link to="/schedule" className="text-gray-400 text-sm sm:text-base transition-all duration-300 ease-in-out hover:translate-x-1 hover:underline hover:text-cyan-600">
              Schedule
            </Link>
            <Link to="/registration" className="text-gray-400 text-sm sm:text-base transition-all duration-300 ease-in-out hover:translate-x-1 hover:underline hover:text-cyan-600">
              Registration
            </Link>
            <Link to="/contact" className="text-gray-400 text-sm sm:text-base transition-all duration-300 ease-in-out hover:translate-x-1 hover:underline hover:text-cyan-600">
              Contact
            </Link>
            <Link to="/login" className="text-gray-400 text-sm sm:text-base transition-all duration-300 ease-in-out hover:translate-x-1 hover:underline hover:text-cyan-600">
              Login
            </Link>
            </div>
            <h2
              className="text-3xl font-extrabold text-amber-400 cursor-pointer tracking-wide transition-transform hover:scale-110 animate-glow border-b-2 border-cyan-400"
              onClick={() => setIsModalOpen(true)}
            >
              CROSSROADS
            </h2>
            <a href="https://www.hiet.org">
              <img src={hietlogo} className="w-28 h-28 object-contain rounded-lg bg-white shadow-lg hover:scale-110 transition-transform" alt="HI-TECH Logo" />
            </a>
          </div>
          <div className="text-center">
            <h2 className="text-lg font-semibold text-cyan-400 border-b-2 border-amber-600 pb-2 uppercase tracking-wider animate-fadeIn">
              Follow Us
            </h2>
            <div className="flex justify-center gap-5 sm:gap-6 mt-4">
              <a href="https://www.youtube.com/@HiTechCollege" className="text-red-500 hover:text-white transition-transform hover:scale-125" target="_blank" rel="noopener noreferrer">
                <FaYoutube size={30} />
              </a>
              <a href="https://wa.me/9651585712" className="text-green-400 hover:text-white transition-transform hover:scale-125" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp size={30} />
              </a>
              <a href="https://www.linkedin.com/amangupta9454" className="text-blue-400 hover:text-white transition-transform hover:scale-125" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={30} />
              </a>
              <a href="https://www.instagram.com/gupta_aman_9161" className="text-pink-500 hover:text-white transition-transform hover:scale-125" target="_blank" rel="noopener noreferrer">
                <FaInstagram size={30} />
              </a>
              <a href="mailto:ag0567688@gmail.com" className="text-yellow-400 hover:text-white transition-transform hover:scale-125" target="_blank" rel="noopener noreferrer">
                <FaEnvelope size={30} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 text-center pt-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400 animate-fadeIn border-b-2 border-amber-600">
            CROSSROADS<span className="text-amber-400 animate-pulse">@2025</span>
          </h2>
          <p className="mt-2 text-sm sm:text-base text-white font-light animate-slideIn border-b-2 border-amber-500">
            Crossroad is the technical fest of HI-TECH Institute of Engineering and Technology where creativity and innovation meet energy and excitement. With over 20+ years of excellence, this event promises inspiration and growth.
          </p>
          <div className="mt-4 text-xs sm:text-sm text-white animate-pulse">
            © {new Date().getFullYear()} Crossroad Technical Fest. All rights reserved.
          </div>
          <div className="mt-2 text-xs sm:text-sm text-white animate-pulse">
            This website is created by{' '}
            <a href="https://www.linkedin.com/in/amangupta9454/" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-300">
              Code Veda
            </a>.
          </div>
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="mt-6 bg-cyan-500 text-white p-3 rounded-full hover:bg-cyan-600 transition-transform hover:scale-110 shadow-lg animate-bounce cursor-pointer">
            <FaArrowUp size={24} />
          </button>
        </div>
        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black/80 z-50">
            <div className="bg-gray-900 p-6 rounded-xl max-w-sm w-full mx-4 shadow-xl">
              <h3 className="text-lg sm:text-xl font-semibold text-cyan-400 mb-3 animate-fadeIn">About CROSSROADS</h3>
              <p className="text-sm sm:text-base text-gray-200 animate-slideIn">
                Crossroad 2025 is the flagship technical fest of HI-TECH Institute of Engineering and Technology.
                It is a platform where students showcase their talent in innovation, technology, and creativity.
              </p>
              <button className="mt-4 px-4 py-2 bg-violet-600 text-white rounded-lg hover:bg-violet-700 cursor-pointer" onClick={() => setIsModalOpen(false)}>
                Close
              </button>
            </div>
          </div>
        )}
      </footer> */}
    </div>
  );
};

export default Home;