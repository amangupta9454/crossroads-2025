import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Sparkles, Ghost, Users, Briefcase, Activity, Star, Trophy, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const [openFAQ, setOpenFAQ] = useState(null);

  const titleRef = useRef(null);
  const dateRef = useRef(null);
  const timerBoxRef = useRef(null);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const eventDate = new Date('2025-11-28T00:00:00').getTime();
      const now = new Date().getTime();
      const difference = eventDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  const stats = [
    {
      icon: Users,
      value: '100+',
      label: 'Participants',
      gradient: 'from-orange-600 to-orange-500',
      bgGradient: 'from-orange-600/20 to-orange-500/10'
    },
    {
      icon: Briefcase,
      value: '10+',
      label: 'Colleges',
      gradient: 'from-purple-600 to-purple-500',
      bgGradient: 'from-purple-600/20 to-purple-500/10'
    },
    {
      icon: Activity,
      value: '2+',
      label: 'Workshops',
      gradient: 'from-orange-600 to-orange-500',
      bgGradient: 'from-orange-600/20 to-orange-500/10'
    },
    {
      icon: Star,
      value: '10+',
      label: 'Mentors',
      gradient: 'from-purple-600 to-purple-500',
      bgGradient: 'from-purple-600/20 to-purple-500/10'
    }
  ];

  const prizes = [
    {
      place: '2nd Place',
      title: 'Silver Spell',
      amount: '₹5,000',
      color: 'purple',
      gradient: 'from-purple-600 to-purple-500',
      bgGradient: 'rgba(139, 92, 246, 0.05)',
      borderColor: 'rgba(139, 92, 246, 0.3)',
      rewards: [
        'Cash prize',
        'Certificates and Trophy',
        'Exclusive Mentorship Sessions',
        'Goodies'
      ]
    },
    {
      place: '1st Place',
      title: 'Grand Sorcerer',
      amount: '₹7,000',
      color: 'orange',
      gradient: 'from-orange-600 to-orange-500',
      bgGradient: 'rgba(249, 115, 22, 0.05)',
      borderColor: 'rgba(249, 115, 22, 0.4)',
      isWinner: true,
      rewards: [
        'Cash prize',
        'Certificates and Trophy',
        'Exclusive Mentorship Sessions',
        'Goodies'
      ]
    },
    {
      place: '3rd Place',
      title: 'Bronze Witch',
      amount: '₹3,000',
      color: 'purple',
      gradient: 'from-purple-600 to-purple-500',
      bgGradient: 'rgba(139, 92, 246, 0.05)',
      borderColor: 'rgba(139, 92, 246, 0.3)',
      rewards: [
        'Cash prize',
        'Certificates and Trophy',
        'Exclusive Mentorship Sessions',
        'Goodies'
      ]
    }
  ];

 const faqs = [
  {
    question: 'What is CROSSROADS 2025?',
    answer: 'CROSSROADS 2025 is our college’s annual technical and cultural fest featuring a blend of innovation, creativity, and talent. It includes exciting technical events like Project Exhibition, Robo Race, and Poster Presentation, along with cultural competitions such as Dance, Singing, Short Film, and many more.'
  },
  {
    question: 'Who can participate in the fest?',
    answer: 'Students from all colleges across India can participate in CROSSROADS 2025. Whether you are passionate about coding, robotics, arts, or performing, there’s an event for everyone!'
  },
  {
    question: 'Is there any registration fee?',
    answer: 'Most events are free to register. However, a few competitions may have a minimal entry fee to cover materials or logistics. Details about each event’s fee (if any) are mentioned in their respective registration sections.'
  },
  {
    question: 'Can I participate in multiple events?',
    answer: 'Yes, participants are allowed to register for multiple events as long as the event timings do not overlap. Make sure to check the event schedule before registering for multiple competitions.'
  },
  {
    question: 'How can I register for the events?',
    answer: 'You can register online through the official CROSSROADS 2025 website. Visit the event page, select your desired event, and fill out the registration form. Confirmation details will be shared via email.'
  },
  {
    question: 'When and where will CROSSROADS 2025 be held?',
    answer: 'CROSSROADS 2025 will take place on November 28–29, 2025, at our college campus. Detailed venue information and event schedules will be shared closer to the date.'
  },
  {
    question: 'Are there any prizes for winners?',
    answer: 'Yes! Attractive prizes, certificates, and trophies will be awarded to winners and outstanding participants across all technical and cultural events.'
  },
  {
    question: 'Do participants need to bring anything?',
    answer: 'Participants should bring their college ID cards, laptops or project materials (if applicable), and any specific items required for their event. All general arrangements such as WiFi, workspace, and refreshments will be provided.'
  },
  {
    question: 'Will food and accommodation be provided?',
    answer: 'Food and refreshments will be available at the venue. Limited accommodation facilities may be provided for outstation participants — please contact the organizing team in advance for arrangements.'
  },
  {
    question: 'How can I stay updated about the fest?',
    answer: 'All updates, schedules, and announcements will be shared on the official website and social media handles of CROSSROADS 2025. Make sure to follow us for the latest news!'
  }
];


  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-orange-900/20 via-transparent to-transparent"></div>

      <div className="absolute inset-0 opacity-10">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8 sm:py-12 flex flex-col items-center justify-center">
        <motion.div
          ref={dateRef}
          className="mb-6 sm:mb-8 flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-orange-600 to-orange-500 px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-lg shadow-orange-600/50"
          whileHover={{ scale: 1.05 }}
        >
          <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
          <span className="font-semibold text-sm sm:text-base md:text-lg">November 28, 2025</span>
          <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
        </motion.div>

        <div ref={titleRef} className="text-center mb-8 md:mb-12 px-2">
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-tight whitespace-nowrap">
            <span className="inline-block text-orange-500">C</span>
            <span className="inline-block text-orange-500">R</span>
            <span className="inline-block text-orange-500">O</span>
            <span className="inline-block text-orange-500">S</span>
            <span className="inline-block text-orange-500">S</span>
            <span className="inline-block text-orange-500">R</span>
            <span className="inline-block text-orange-500">O</span>
            <span className="inline-block text-orange-500">A</span>
            <span className="inline-block text-orange-500">D</span>
            <span className="inline-block text-orange-500">S</span>
            <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 ml-2 sm:ml-3 md:ml-4">2</span>
            <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">0</span>
            <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">2</span>
            <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">5</span>
          </h1>
        </div>

        <div
          ref={timerBoxRef}
          className="relative w-full max-w-2xl mx-auto"
          style={{
            background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(236, 72, 153, 0.1) 100%)',
            borderRadius: '24px',
            padding: '2px',
          }}
        >
          <div
            className="bg-gray-900/90 backdrop-blur-xl rounded-[22px] p-4 sm:p-6 md:p-8 lg:p-12"
            style={{
              boxShadow: '0 0 60px rgba(139, 92, 246, 0.3), inset 0 0 30px rgba(0, 0, 0, 0.5)',
            }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-orange-500 text-center mb-6 md:mb-8">
              Registration Open
            </h2>

            <div className="grid grid-cols-4 gap-2 sm:gap-3 md:gap-4 lg:gap-6 mb-6 md:mb-8">
              {[
                { value: timeLeft.days, label: 'Days' },
                { value: timeLeft.hours, label: 'Hours' },
                { value: timeLeft.minutes, label: 'Minutes' },
                { value: timeLeft.seconds, label: 'Seconds' }
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  className="relative group"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <div
                    className="relative overflow-hidden rounded-lg sm:rounded-xl md:rounded-2xl p-2 sm:p-3 md:p-4 lg:p-6"
                    style={{
                      background: 'linear-gradient(135deg, rgba(249, 115, 22, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%)',
                      border: '2px solid rgba(139, 92, 246, 0.3)',
                      boxShadow: '0 0 20px rgba(139, 92, 246, 0.2)',
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    <div className="relative z-10">
                      <motion.div
                        key={item.value}
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-orange-500 mb-1 sm:mb-2 text-center"
                      >
                        {String(item.value).padStart(2, '0')}
                      </motion.div>
                      <div className="text-xs sm:text-sm md:text-base text-orange-400 font-medium text-center">
                        {item.label}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

           
          </div>
        </div>

        <div className="mt-8 md:mt-12 flex justify-center w-full max-w-md mx-auto px-4">
          <motion.button
            className="w-full px-8 py-4 rounded-xl font-semibold text-base sm:text-lg relative overflow-hidden group"
            style={{
              background: 'linear-gradient(135deg, rgba(139, 92, 246, 1) 0%, rgba(236, 72, 153, 1) 100%)',
              border: '2px solid rgba(139, 92, 246, 0.5)',
              boxShadow: '0 0 30px rgba(139, 92, 246, 0.4)',
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/event-registration" className="relative z-10">Registration Open</Link>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </motion.button>
        </div>
      </div>

      <section className="relative z-10 py-16 sm:py-20 md:py-24 px-4">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 md:mb-16"
          >
            <span className="inline-block px-6 py-2 rounded-full text-sm sm:text-base font-semibold mb-6"
              style={{
                background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.2) 0%, rgba(236, 72, 153, 0.2) 100%)',
                border: '2px solid rgba(139, 92, 246, 0.3)',
              }}
            >
              About The Event
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4">
              <span className="text-white">The Innovative </span>
              <span className="text-orange-500">Festival</span>
              <span className="text-white"> of the Year</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-10">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative group"
            >
              <div
                className="h-full p-6 sm:p-8 md:p-10 rounded-2xl backdrop-blur-xl"
                style={{
                  background: 'linear-gradient(135deg, rgba(249, 115, 22, 0.05) 0%, rgba(139, 92, 246, 0.05) 100%)',
                  border: '2px solid rgba(249, 115, 22, 0.2)',
                  boxShadow: '0 0 40px rgba(249, 115, 22, 0.1)',
                }}
              >
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-orange-500 mb-6">
                  What is CROSSROADS?
                </h3>
                <div className="space-y-4 text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed">
                  <p>
                    CROSSROADS 2025 is our college’s annual technical and cultural fest that celebrates innovation, creativity, and talent. It brings together students from diverse fields to showcase their skills through exciting events, competitions, and performances.
                  </p>
                  <p>
                    From project exhibitions and robotics challenges to dance, music, and art — the fest offers a vibrant platform for young minds to connect, collaborate, and create unforgettable memories.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative group"
            >
              <div
                className="h-full p-6 sm:p-8 md:p-10 rounded-2xl backdrop-blur-xl"
                style={{
                  background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.05) 0%, rgba(236, 72, 153, 0.05) 100%)',
                  border: '2px solid rgba(139, 92, 246, 0.2)',
                  boxShadow: '0 0 40px rgba(139, 92, 246, 0.1)',
                }}
              >
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 mb-6">
                  Why Participate?
                </h3>
                <div className="space-y-4">
                  {[
                   { text: 'Showcase your talent in technical and cultural events' },
                   { text: 'Gain hands-on experience and learn from experts' },
                   { text: 'Win exciting prizes, certificates, and recognition' },
                   { text: 'Network with students, innovators, and industry mentors' },
                   { text: 'Be part of an unforgettable two-day college fest experience' }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-start gap-3 group/item"
                    >
                      <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center"
                        style={{
                          background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.2) 0%, rgba(236, 72, 153, 0.2) 100%)',
                        }}
                      >
                        <Ghost className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400" />
                      </div>
                      <p className="text-gray-300 text-sm sm:text-base md:text-lg flex-1 pt-1">
                        {item.text}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative z-10 py-12 sm:py-16 md:py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative w-full max-w-5xl mx-auto"
            style={{
              background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(236, 72, 153, 0.1) 100%)',
              borderRadius: '24px',
              padding: '2px',
            }}
          >
            <div
              className="bg-gray-900/90 backdrop-blur-xl rounded-[22px] p-6 sm:p-8 md:p-12 lg:p-16"
              style={{
                boxShadow: '0 0 60px rgba(139, 92, 246, 0.3), inset 0 0 30px rgba(0, 0, 0, 0.5)',
              }}
            >
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex flex-col items-center text-center group"
                    whileHover={{ scale: 1.05 }}
                  >
                    <motion.div
                      className={`w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full flex items-center justify-center mb-4 sm:mb-6 relative overflow-hidden`}
                      style={{
                        background: `linear-gradient(135deg, ${stat.bgGradient})`,
                        border: '2px solid rgba(139, 92, 246, 0.3)',
                        boxShadow: '0 0 30px rgba(139, 92, 246, 0.2)',
                      }}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <stat.icon className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-${stat.gradient.includes('orange') ? 'orange' : 'purple'}-400`} />
                    </motion.div>

                    <motion.div
                      className="text-2xl sm:text-5xl md:text-4xl font-black mb-2 sm:mb-3"
                      style={{
                        background: `linear-gradient(135deg, ${stat.gradient})`,
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'white',
                        backgroundClip: 'text',
                      }}
                    >
                      {stat.value}
                    </motion.div>

                    <div className="text-base sm:text-lg md:text-xl text-gray-400 font-medium">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative z-10 py-12 sm:py-16 md:py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 md:mb-16"
          >
            <span className="inline-block px-6 py-3 rounded-full text-sm sm:text-base font-semibold mb-6 bg-gradient-to-r from-orange-600 to-orange-500">
              Win Big
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4">
              <span className="text-white">Scary Good </span>
              <span className="text-orange-500">Prizes</span>
            </h2>
            <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-3xl mx-auto mt-4">
              Compete for a treasure trove of epic rewards, including cash prizes, cutting-edge gadgets, and career-boosting opportunities that will level up your coding journey!
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-6 lg:gap-8 max-w-6xl mx-auto">
            {prizes.map((prize, index) => (
              <motion.div
                key={prize.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className={`relative ${prize.isWinner ? 'md:-mt-6' : ''}`}
                whileHover={{ scale: 1.03 }}
              >
                <div
                  className="relative rounded-2xl p-6 sm:p-8 h-full backdrop-blur-xl"
                  style={{
                    background: prize.bgGradient,
                    border: `2px solid ${prize.borderColor}`,
                    boxShadow: `0 0 40px ${prize.borderColor.replace('0.3', '0.2')}`,
                  }}
                >
                  <div className="flex flex-col items-center text-center">
                    <motion.div
                      className={`w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mb-4 sm:mb-6`}
                      style={{
                        background: `linear-gradient(135deg, ${prize.gradient})`,
                        boxShadow: `0 0 30px ${prize.borderColor.replace('0.3', '0.3')}`,
                      }}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Trophy className={`w-8 h-8 sm:w-10 sm:h-10 text-white`} />
                    </motion.div>

                    <div className="text-sm sm:text-base text-gray-400 font-medium mb-2">
                      {prize.place}
                    </div>

                    <h3
                      className="text-xl sm:text-2xl md:text-3xl font-bold mb-4"
                      style={{
                        background: `linear-gradient(135deg, ${prize.gradient})`,
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                      }}
                    >
                      {prize.title}
                    </h3>

                    <div className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-6">
                      {prize.amount}
                    </div>

                    <div className="w-full space-y-3">
                      {prize.rewards.map((reward, idx) => (
                        <div
                          key={idx}
                          className="text-gray-400 text-sm sm:text-base py-2"
                        >
                          {reward}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 py-12 sm:py-16 md:py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 md:mb-16"
          >
            <span className="inline-block px-6 py-2 rounded-full text-sm sm:text-base font-semibold mb-6"
              style={{
                background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.2) 0%, rgba(236, 72, 153, 0.2) 100%)',
                border: '2px solid rgba(139, 92, 246, 0.3)',
              }}
            >
              FAQ
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4">
              <span className="text-white">Frequently Asked </span>
              <span className="text-orange-500">Questions</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative w-full"
            style={{
              background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(236, 72, 153, 0.1) 100%)',
              borderRadius: '24px',
              padding: '2px',
            }}
          >
            <div
              className="bg-gray-900/90 backdrop-blur-xl rounded-[22px] p-4 sm:p-6 md:p-8"
              style={{
                boxShadow: '0 0 60px rgba(139, 92, 246, 0.3), inset 0 0 30px rgba(0, 0, 0, 0.5)',
              }}
            >
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                  >
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="w-full text-left p-4 sm:p-6 rounded-xl transition-all duration-300"
                      style={{
                        background: openFAQ === index
                          ? 'linear-gradient(135deg, rgba(249, 115, 22, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%)'
                          : 'rgba(255, 255, 255, 0.02)',
                        border: `2px solid ${openFAQ === index ? 'rgba(249, 115, 22, 0.3)' : 'rgba(139, 92, 246, 0.2)'}`,
                      }}
                    >
                      <div className="flex items-center justify-between gap-4">
                        <h3 className="text-base sm:text-lg md:text-xl font-semibold text-white">
                          {faq.question}
                        </h3>
                        <motion.div
                          animate={{ rotate: openFAQ === index ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                          className="flex-shrink-0"
                        >
                          <ChevronDown className={`w-5 h-5 sm:w-6 sm:h-6 ${openFAQ === index ? 'text-orange-500' : 'text-gray-400'}`} />
                        </motion.div>
                      </div>
                      <motion.div
                        initial={false}
                        animate={{
                          height: openFAQ === index ? 'auto' : 0,
                          opacity: openFAQ === index ? 1 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="mt-4 text-sm sm:text-base text-gray-300 leading-relaxed">
                          {faq.answer}
                        </p>
                      </motion.div>
                    </button>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
