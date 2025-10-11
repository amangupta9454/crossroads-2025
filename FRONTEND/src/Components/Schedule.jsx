
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Clock, Trophy, Users, Code, Gamepad2, Palette, Brain, Bug, Rocket, ChevronDown, Sparkles, MapPin, Star } from "lucide-react";

const schedule = {
  "Day 1": [
    { 
      time: "9:00 AM", 
      title: "Inauguration Ceremony", 
      description: "Grand opening with distinguished guests and welcome address.",
      category: "ceremony",
      icon: Trophy,
      duration: "1.5 hrs"
    },
    { 
      time: "10:30 AM", 
      title: "Startup Idea Pitch", 
      description: "Teams present innovative startup concepts to expert judges.",
      category: "competition",
      icon: Users,
      duration: "1.5 hrs"
    },
    { 
      time: "12:00 PM", 
      title: "Code Clash Championship", 
      description: "Intense coding competition with algorithmic challenges.",
      category: "technical",
      icon: Code,
      duration: "2 hrs"
    },
    { 
      time: "2:00 PM", 
      title: "Gaming Arena", 
      description: "Competitive LAN gaming tournament featuring CS and Valorant.",
      category: "gaming",
      icon: Gamepad2,
      duration: "2 hrs"
    },
    { 
      time: "4:00 PM", 
      title: "Talent Showcase", 
      description: "Platform for students to display creative talents.",
      category: "entertainment",
      icon: Palette,
      duration: "2 hrs"
    }
  ],
  "Day 2": [
    { 
      time: "10:00 AM", 
      title: "Tech Knowledge Quiz", 
      description: "Mind-bending technology quiz across various domains.",
      category: "competition",
      icon: Brain,
      duration: "1.5 hrs"
    },
    { 
      time: "11:30 AM", 
      title: "Debugging Battle", 
      description: "Fast-paced competition to identify and fix code bugs.",
      category: "technical",
      icon: Bug,
      duration: "1.5 hrs"
    },
    { 
      time: "1:00 PM", 
      title: "Innovation Project Expo", 
      description: "Students demonstrate cutting-edge tech projects.",
      category: "showcase",
      icon: Rocket,
      duration: "2 hrs"
    },
    { 
      time: "3:00 PM", 
      title: "UI/UX Design Challenge", 
      description: "Creative design competition focusing on user experience.",
      category: "design",
      icon: Palette,
      duration: "2 hrs"
    },
    { 
      time: "5:00 PM", 
      title: "Grand Award Ceremony", 
      description: "Celebration with prize distribution and closing remarks.",
      category: "ceremony",
      icon: Trophy,
      duration: "1 hr"
    }
  ]
};

const categoryColors = {
  ceremony: { primary: "from-orange-400 to-orange-500", secondary: "from-orange-500/20 to-orange-500/20", text: "text-orange-400", bg: "bg-orange-500/10", border: "border-orange-500/30" },
  competition: { primary: "from-orange-400 to-purple-500", secondary: "from-orange-500/20 to-purple-500/20", text: "text-orange-400", bg: "bg-orange-500/10", border: "border-orange-500/30" },
  technical: { primary: "from-purple-400 to-purple-500", secondary: "from-purple-500/20 to-purple-500/20", text: "text-purple-400", bg: "bg-purple-500/10", border: "border-purple-500/30" },
  gaming: { primary: "from-orange-400 to-orange-500", secondary: "from-orange-500/20 to-orange-500/20", text: "text-orange-400", bg: "bg-orange-500/10", border: "border-orange-500/30" },
  entertainment: { primary: "from-purple-400 to-purple-500", secondary: "from-purple-500/20 to-purple-500/20", text: "text-purple-400", bg: "bg-purple-500/10", border: "border-purple-500/30" },
  showcase: { primary: "from-orange-400 to-purple-500", secondary: "from-orange-500/20 to-purple-500/20", text: "text-orange-400", bg: "bg-orange-500/10", border: "border-orange-500/30" },
  design: { primary: "from-purple-400 to-purple-500", secondary: "from-purple-500/20 to-purple-500/20", text: "text-purple-400", bg: "bg-purple-500/10", border: "border-purple-500/30" }
};

export default function Schedule() {
  const [activeDay, setActiveDay] = useState("Day 1");
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [countdown, setCountdown] = useState("");

  useEffect(() => {
    const eventDate = new Date("2025-11-28T09:00:00");
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = eventDate.getTime() - now;
      if (distance < 0) return setCountdown("Event Started!");

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hrs = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      
      if (days > 0) {
        setCountdown(`${days} days, ${hrs} hours left`);
      } else {
        setCountdown(`${hrs}h ${mins}m left`);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-zinc-950 text-white relative overflow-hidden">
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
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-zinc-900/50 backdrop-blur-sm rounded-full border border-zinc-700/50 mb-8"
            >
              <Calendar className="w-4 h-4 text-orange-400" />
              <span className="text-sm text-zinc-300 font-medium">November 28-29, 2025</span>
            </motion.div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-6">
              <span className="text-orange-500">CROSS</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">ROADS</span>
            </h1>
            
            <p className="text-xl text-zinc-400 mb-8 max-w-2xl mx-auto">
              Event Schedule - Two Days of Innovation & Competition
            </p>
            
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-orange-500/20 to-purple-500/20 backdrop-blur-sm rounded-full border border-orange-500/30"
            >
              <Clock className="w-5 h-5 text-orange-400" />
              <span className="text-orange-400 font-semibold">{countdown}</span>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex justify-center gap-4 px-4 mb-16 flex-wrap"
          >
            {Object.keys(schedule).map((day) => (
              <motion.button
                key={day}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  setActiveDay(day);
                  setExpandedIndex(null);
                }}
                className={`px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 ${
                  activeDay === day
                    ? "bg-gradient-to-r from-orange-500 to-purple-600 text-white shadow-lg shadow-orange-500/30"
                    : "bg-zinc-800/50 text-zinc-300 hover:bg-zinc-700/50 border border-zinc-700/50"
                }`}
              >
                {day}
              </motion.button>
            ))}
          </motion.div>

          <div className="relative max-w-5xl mx-auto px-4">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-500 via-purple-500 to-orange-500 opacity-20"></div>
            
            <div className="space-y-8">
              <AnimatePresence mode="wait">
                {schedule[activeDay].map((event, index) => {
                  const IconComponent = event.icon;
                  const isExpanded = expandedIndex === index;
                  const colors = categoryColors[event.category];
                  
                  return (
                    <motion.div
                      key={`${activeDay}-${index}`}
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 50 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="relative flex items-start gap-6 sm:gap-8"
                    >
                      <div className="relative flex-shrink-0">
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${colors.primary} p-0.5 shadow-lg`}
                        >
                          <div className="w-full h-full bg-zinc-950 rounded-2xl flex items-center justify-center">
                            <IconComponent className={`w-7 h-7 ${colors.text}`} />
                          </div>
                        </motion.div>
                        <motion.div
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${colors.primary} opacity-20 blur-md`}
                        ></motion.div>
                      </div>

                      <div className="flex-1">
                        <motion.div
                          whileHover={{ scale: 1.02 }}
                          className={`bg-gradient-to-br from-zinc-900 to-zinc-800 backdrop-blur-sm rounded-2xl border ${
                            isExpanded ? 'border-orange-500/50' : 'border-zinc-700/50'
                          } hover:border-orange-500/50 transition-all duration-300 overflow-hidden`}
                        >
                          <div className="p-6 sm:p-8">
                            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                              <div>
                                <div className={`text-2xl font-bold ${colors.text} mb-1 flex items-center gap-2`}>
                                  <Clock className="w-5 h-5" />
                                  {event.time}
                                </div>
                                <div className="text-zinc-500 text-sm ml-7">{event.duration}</div>
                              </div>
                              <div className={`px-4 py-1.5 rounded-full text-xs font-semibold ${colors.bg} ${colors.text} border ${colors.border} whitespace-nowrap`}>
                                {event.category}
                              </div>
                            </div>
                            
                            <h3 className="text-2xl font-bold text-white mb-3 hover:text-transparent hover:bg-gradient-to-r hover:from-orange-400 hover:to-purple-400 hover:bg-clip-text transition-all duration-300">
                              {event.title}
                            </h3>
                            
                            <p className="text-zinc-400 leading-relaxed mb-6">
                              {event.description}
                            </p>
                            
                            <motion.button
                              whileHover={{ x: 5 }}
                              onClick={() => setExpandedIndex(isExpanded ? null : index)}
                              className={`inline-flex items-center gap-2 ${colors.text} hover:text-white text-sm font-semibold transition-colors duration-200`}
                            >
                              <span>{isExpanded ? "Show Less" : "View Details"}</span>
                              <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`} />
                            </motion.button>
                          </div>

                          <AnimatePresence>
                            {isExpanded && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="border-t border-zinc-800"
                              >
                                <div className="p-6 sm:p-8">
                                  <div className="grid sm:grid-cols-2 gap-6">
                                    <div>
                                      <h4 className="font-semibold text-white mb-3 flex items-center gap-2">
                                        <Sparkles className="w-4 h-4 text-orange-400" />
                                        Event Details
                                      </h4>
                                      <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                                        Join us for an exciting {event.category} event where participants will showcase their skills and compete for amazing prizes.
                                      </p>
                                      <div className="flex items-center gap-2 text-sm text-zinc-500">
                                        <MapPin className="w-4 h-4 text-orange-400" />
                                        <span>Main Auditorium</span>
                                      </div>
                                    </div>
                                    <div>
                                      <h4 className="font-semibold text-white mb-3 flex items-center gap-2">
                                        <Trophy className="w-4 h-4 text-purple-400" />
                                        Quick Info
                                      </h4>
                                      <div className="space-y-3">
                                        <div className="flex justify-between text-sm p-2 bg-zinc-800/50 rounded-lg">
                                          <span className="text-zinc-500">Duration:</span>
                                          <span className="text-zinc-300 font-medium">{event.duration}</span>
                                        </div>
                                        <div className="flex justify-between text-sm p-2 bg-zinc-800/50 rounded-lg">
                                          <span className="text-zinc-500">Category:</span>
                                          <span className={`capitalize ${colors.text} font-medium`}>{event.category}</span>
                                        </div>
                                        <div className="flex justify-between text-sm p-2 bg-zinc-800/50 rounded-lg">
                                          <span className="text-zinc-500">Day:</span>
                                          <span className="text-zinc-300 font-medium">{activeDay}</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-sm p-2 bg-gradient-to-r from-orange-500/10 to-purple-500/10 rounded-lg border border-orange-500/20">
                                          <Star className="w-4 h-4 text-orange-400" />
                                          <span className="text-zinc-300 font-medium">Featured Event</span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>

                          <div className={`absolute inset-0 bg-gradient-to-r ${colors.secondary} opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl`}></div>
                        </motion.div>
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-center py-16 mt-16 border-t border-zinc-800/50"
          >
            <div className="inline-flex items-center gap-3 text-zinc-400">
              <Trophy className="w-5 h-5 text-orange-400" />
              <span className="font-medium">May the best innovator win!</span>
              <Sparkles className="w-5 h-5 text-purple-400" />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
