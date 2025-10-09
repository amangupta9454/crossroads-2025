import React, { useState,  useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, MapPin, Trophy, Users, X, Sparkles, ChevronRight } from 'lucide-react';
import event1 from '../assets/coding.jpg';
import event2 from '../assets/project.jpg';
import event3 from '../assets/robo.jpg';
import event4 from '../assets/cultural.jpg';
import event5 from '../assets/rangoli.jpeg';
import event6 from '../assets/food.jpg';
import event7 from '../assets/drama.jpg';
import event8 from '../assets/song.jpg';
import event9 from '../assets/poster.jpg';
import event10 from '../assets/rock.jpg';
import event11 from '../assets/dance.jpg';
import w1 from '../assets/w1.jpg';
import w2 from '../assets/w2.jpg';
import w3 from '../assets/w3.jpg';
import w4 from '../assets/w4.jpg';
import w5 from '../assets/w5.jpg';
import w6 from '../assets/w6.jpg';
import w7 from '../assets/w7.jpg';
import w8 from '../assets/w8.jpg';
import w9 from '../assets/w9.jpg';
import w10 from '../assets/w10.jpg';
import w11 from '../assets/w11.jpg';
import w12 from '../assets/w12.jpg';
import w13 from '../assets/w13.jpg';
import w14 from '../assets/w14.jpg';

const events = [
  {
    id: 1,
    imageSrc: event1,
    name: 'Code Puzzle',
    category: 'Technical',
    details: {
      description: 'A coding quiz to challenge logical and programming skills.',
      timing: 'April 20, 2025, 9:00 AM - April 21, 2025, 9:00 AM',
      location: 'Block 1 Lab F',
      judgingCriteria: 'Innovation, Functionality, Design, Presentation',
      organizer: 'Tech Fusion',
    },
  },
  {
    id: 2,
    imageSrc: event2,
    name: 'Project Exhibition',
    category: 'Technical',
    details: {
      description: 'Display and present innovative student projects across domains.',
      timing: 'April 22, 2025, 10:00 AM - 2:00 PM',
      location: 'AI Research Center',
      judgingCriteria: 'Originality, Impact, Technical Execution',
      organizer: 'Tech Fusion',
    },
  },
  {
    id: 3,
    imageSrc: event3,
    name: 'Robo Race',
    category: 'Technical',
    details: {
      description: 'Compete with your robots in high-speed challenges.',
      timing: 'April 23, 2025, 1:00 PM - 5:00 PM',
      location: 'Innovation Arena',
      judgingCriteria: 'Speed, Control, Design, Navigation',
      organizer: 'Tech Fusion',
    },
  },
  {
    id: 4,
    imageSrc: event4,
    name: 'Cultural Events',
    category: 'Cultural',
    details: {
      description: 'Showcase of traditional and contemporary performances.',
      timing: 'April 24, 2025, 9:00 AM - 3:00 PM',
      location: 'Auditorium',
      judgingCriteria: 'Creativity, Presentation, Crowd Engagement',
      organizer: 'Tech Fusion',
    },
  },
  {
    id: 5,
    imageSrc: event5,
    name: 'Rangoli Competition',
    category: 'Cultural',
    details: {
      description: 'Create beautiful rangoli designs using vibrant colors.',
      timing: 'April 25, 2025, 10:00 AM - 4:00 PM',
      location: 'Cultural Hall',
      judgingCriteria: 'Creativity, Neatness, Color Usage, Theme Representation',
      organizer: 'Tech Fusion',
    },
  },
  {
    id: 6,
    imageSrc: event6,
    name: 'Food Without Fire',
    category: 'Cultural',
    details: {
      description: 'Prepare delicious dishes without using fire or heat.',
      timing: 'April 26, 2025, 9:00 AM - 5:00 PM',
      location: 'Cafeteria Hall',
      judgingCriteria: 'Taste, Presentation, Innovation, Hygiene',
      organizer: 'Tech Fusion',
    },
  },
  {
    id: 7,
    imageSrc: event7,
    name: 'Nukkad Natak',
    category: 'Cultural',
    details: {
      description: 'Perform impactful street plays on social issues.',
      timing: 'April 27-28, 2025, 10:00 AM',
      location: 'Open Stage',
      judgingCriteria: 'Message Clarity, Acting, Engagement, Theme Relevance',
      organizer: 'Tech Fusion',
    },
  },
  {
    id: 8,
    imageSrc: event8,
    name: 'Singing',
    category: 'Cultural',
    details: {
      description: 'Showcase your vocal talent across genres and languages.',
      timing: 'April 29, 2025, 11:00 AM - 3:00 PM',
      location: 'Auditorium',
      judgingCriteria: 'Vocal Quality, Pitch, Expression, Stage Presence',
      organizer: 'Tech Fusion',
    },
  },
  {
    id: 9,
    imageSrc: event9,
    name: 'Technical Poster',
    category: 'Technical',
    details: {
      description: 'Present technical concepts and innovations through posters.',
      timing: 'April 30, 2025, 9:00 AM - 1:00 PM',
      location: 'Exhibition Hall',
      judgingCriteria: 'Content Clarity, Design, Innovation, Presentation',
      organizer: 'Tech Fusion',
    },
  },
  {
    id: 10,
    imageSrc: event11,
    name: 'Inter College Dance Competition',
    category: 'Cultural',
    details: {
      description: 'Dance teams from various colleges compete with style and energy.',
      timing: 'April 30, 2025, 2:00 PM - 6:00 PM',
      location: 'Main Auditorium',
      judgingCriteria: 'Choreography, Synchronization, Expression, Costume',
      organizer: 'Tech Fusion',
    },
  },
  {
    id: 11,
    imageSrc: event10,
    name: 'Rock Band',
    category: 'Cultural',
    details: {
      description: 'Bands compete by performing electrifying live music sets.',
      timing: 'April 30, 2025, 6:30 PM - 9:30 PM',
      location: 'Main Stage',
      judgingCriteria: 'Music Quality, Stage Presence, Originality, Coordination',
      organizer: 'Tech Fusion',
    },
  },
  {
    id: 12,
    imageSrc: event11,
    name: 'Short Film Making',
    category: 'Technical',
    details: {
      description: 'Create a short film showcasing storytelling, direction, and editing skills.',
      timing: 'May 1, 2025, 10:00 AM - 4:00 PM',
      location: 'Media Lab',
      judgingCriteria: 'Storytelling, Creativity, Technical Execution, Impact',
      organizer: 'Tech Fusion',
    },
  },
  {
    id: 13,
    imageSrc: event11,
    name: 'Ad Mad Show',
    category: 'Cultural',
    details: {
      description: 'Create fun and creative advertisements for fictional products.',
      timing: 'May 2, 2025, 11:00 AM - 3:00 PM',
      location: 'Seminar Hall',
      judgingCriteria: 'Creativity, Humor, Messaging, Presentation',
      organizer: 'Tech Fusion',
    },
  },
  {
    id: 14,
    imageSrc: event11,
    name: 'Treasure Hunt',
    category: 'Technical',
    details: {
      description: 'Solve clues and find hidden items in a campus-wide adventure.',
      timing: 'May 3, 2025, 9:00 AM - 1:00 PM',
      location: 'College Grounds',
      judgingCriteria: 'Teamwork, Time Management, Problem-Solving',
      organizer: 'Tech Fusion',
    },
  },
];

const winners = [
  { id: 1, imageSrc: w1, name: 'Winner 1' },
  { id: 2, imageSrc: w2, name: 'Winner 2' },
  { id: 3, imageSrc: w3, name: 'Winner 3' },
  { id: 4, imageSrc: w4, name: 'Winner 4' },
  { id: 5, imageSrc: w5, name: 'Winner 5' },
  { id: 6, imageSrc: w6, name: 'Winner 6' },
  { id: 7, imageSrc: w7, name: 'Winner 7' },
  { id: 8, imageSrc: w8, name: 'Winner 8' },
  { id: 9, imageSrc: w9, name: 'Winner 9' },
  { id: 10, imageSrc: w10, name: 'Winner 10' },
  { id: 11, imageSrc: w11, name: 'Winner 11' },
  { id: 12, imageSrc: w12, name: 'Winner 12' },
  { id: 13, imageSrc: w13, name: 'Winner 13' },
  { id: 14, imageSrc: w14, name: 'Winner 14' },
];

const EventCard = ({ event, onClick, index }) => {
  const [loaded, setLoaded] = useState(false);
  const cardRef = useRef(null);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="group relative bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-2xl overflow-hidden border border-zinc-700/50 hover:border-orange-500/50 transition-all duration-500 cursor-pointer"
      onClick={onClick}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      
      <div className="relative h-56 overflow-hidden">
        {!loaded && (
          <div className="absolute inset-0 bg-zinc-800 animate-pulse" />
        )}
        <motion.img
          className={`w-full h-full object-cover transition-opacity duration-300 ${loaded ? 'opacity-100' : 'opacity-0'}`}
          src={event.imageSrc}
          alt={event.name}
          onLoad={() => setLoaded(true)}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.6 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80" />
        
        <div className="absolute top-3 right-3">
          <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
            event.category === 'Technical' 
              ? 'bg-orange-500 text-white' 
              : 'bg-purple-500 text-white'
          }`}>
            {event.category}
          </span>
        </div>
      </div>

      <div className="p-5 relative z-10">
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors duration-300">
          {event.name}
        </h3>
        
        <p className="text-sm text-zinc-400 mb-4 line-clamp-2">
          {event.details.description}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs text-zinc-500">
            <Calendar className="w-4 h-4" />
            <span className="line-clamp-1">November 2025</span>
          </div>
          
          <motion.div
            className="flex items-center gap-1 text-orange-500 text-sm font-semibold"
            whileHover={{ x: 5 }}
          >
            <span>Details</span>
            <ChevronRight className="w-4 h-4" />
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-purple-500 to-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
    </motion.div>
  );
};

const WinnerCard = ({ winner, index }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      whileHover={{ scale: 1.05, rotate: 2 }}
      className="group relative bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-2xl overflow-hidden border border-zinc-700/50 hover:border-purple-500/50 transition-all duration-500"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      
      <div className="relative h-72 overflow-hidden">
        {!loaded && (
          <div className="absolute inset-0 bg-zinc-800 animate-pulse" />
        )}
        <motion.img
          className={`w-full h-full object-cover transition-opacity duration-300 ${loaded ? 'opacity-100' : 'opacity-0'}`}
          src={winner.imageSrc}
          alt={winner.name}
          onLoad={() => setLoaded(true)}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
        
        <div className="absolute top-3 right-3">
          <motion.div
            animate={{ rotate: [0, 15, -15, 0] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
            className="bg-gradient-to-br from-yellow-400 to-orange-500 p-2 rounded-full"
          >
            <Trophy className="w-5 h-5 text-white" />
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-orange-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />
    </motion.div>
  );
};

const Events = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [filter, setFilter] = useState('All');

  const filteredEvents = filter === 'All' 
    ? events 
    : events.filter(event => event.category === filter);

  return (
    <div className="relative min-h-screen bg-zinc-950 overflow-hidden">
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_center,_#ff6b1a15_0%,_transparent_65%)] pointer-events-none" />
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_80%_20%,_#8b5cf615_0%,_transparent_50%)] pointer-events-none" />
      
      <div className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-block mb-4"
            >
              <Sparkles className="w-12 h-12 text-orange-500 mx-auto" />
            </motion.div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-4">
              <span className="text-orange-500">CROSS</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">ROADS</span>
            </h1>
            <p className="text-xl text-zinc-400 mt-4">Tech Fest 2025 Events</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex justify-center gap-4 mb-12 flex-wrap"
          >
            {['All', 'Technical', 'Cultural'].map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setFilter(category)}
                className={`px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 ${
                  filter === category
                    ? 'bg-gradient-to-r from-orange-500 to-purple-600 text-white shadow-lg shadow-orange-500/30'
                    : 'bg-zinc-800 text-zinc-400 hover:bg-zinc-700 border border-zinc-700'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>

          <motion.div 
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-20"
          >
            <AnimatePresence mode="wait">
              {filteredEvents.map((event, index) => (
                <EventCard
                  key={event.id}
                  event={event}
                  onClick={() => setSelectedEvent(event)}
                  index={index}
                />
              ))}
            </AnimatePresence>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-24"
          >
            <div className="text-center mb-12">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="inline-block mb-4"
              >
                <Trophy className="w-12 h-12 text-purple-500 mx-auto" />
              </motion.div>
              
              <h2 className="text-4xl sm:text-5xl font-extrabold mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-purple-600">
                  Hall of Fame
                </span>
              </h2>
              <p className="text-xl text-zinc-400">Winners of Tech Fest 2024</p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
              {winners.map((winner, index) => (
                <WinnerCard key={winner.id} winner={winner} index={index} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {selectedEvent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
            onClick={() => setSelectedEvent(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-3xl p-12 sm:p-16 max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-zinc-700 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedEvent(null)}
                className="absolute top-12 right-4 p-2 rounded-full bg-zinc-800 hover:bg-red-500 text-zinc-400 hover:text-white transition-all duration-300 z-10"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative h-64 rounded-2xl overflow-hidden mb-6">
                <img
                  src={selectedEvent.imageSrc}
                  alt={selectedEvent.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                    selectedEvent.category === 'Technical' 
                      ? 'bg-orange-500 text-white' 
                      : 'bg-purple-500 text-white'
                  }`}>
                    {selectedEvent.category}
                  </span>
                </div>
              </div>

              <h3 className="text-3xl font-extrabold text-white mb-4 bg-gradient-to-r from-orange-400 to-purple-400 bg-clip-text ">
                {selectedEvent.name}
              </h3>

              <div className="space-y-4 mb-6">
                <div>
                  <p className="text-zinc-400 leading-relaxed">
                    {selectedEvent.details.description}
                  </p>
                </div>

                <div className="flex items-start gap-3 p-4 bg-zinc-800/50 rounded-xl border border-zinc-700/50">
                  <Calendar className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-xs text-zinc-500 mb-1 font-semibold uppercase tracking-wide">Timing</p>
                    <p className="text-sm text-zinc-300">{selectedEvent.details.timing}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-zinc-800/50 rounded-xl border border-zinc-700/50">
                  <MapPin className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-xs text-zinc-500 mb-1 font-semibold uppercase tracking-wide">Location</p>
                    <p className="text-sm text-zinc-300">{selectedEvent.details.location}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-zinc-800/50 rounded-xl border border-zinc-700/50">
                  <Trophy className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-xs text-zinc-500 mb-1 font-semibold uppercase tracking-wide">Judging Criteria</p>
                    <p className="text-sm text-zinc-300">{selectedEvent.details.judgingCriteria}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-zinc-800/50 rounded-xl border border-zinc-700/50">
                  <Users className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-xs text-zinc-500 mb-1 font-semibold uppercase tracking-wide">Organizer</p>
                    <p className="text-sm text-zinc-300">{selectedEvent.details.organizer}</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setSelectedEvent(null)}
                  className="flex-1 px-6 py-3 bg-zinc-800 hover:bg-zinc-700 text-white font-semibold rounded-xl transition-all duration-300 border border-zinc-700"
                >
                  Close
                </motion.button>
                <Link to="/registration" className="flex-1">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full px-6 py-3 bg-gradient-to-r from-orange-500 to-purple-600 hover:from-orange-600 hover:to-purple-700 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-orange-500/30"
                  >
                    Register Now
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        .line-clamp-1 {
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default Events;
