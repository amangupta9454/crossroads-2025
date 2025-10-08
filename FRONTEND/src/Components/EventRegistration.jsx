// // // Frontend: src/components/EventRegistration.jsx
// // // Assume this is part of your React Vite app. Add it to your routes, e.g., in App.jsx: <Route path="/event-registration" element={<EventRegistration />} />
// // // Make sure to install @emailjs/browser: npm install @emailjs/browser
// // // Also, ensure axios is installed.

// // import React, { useState, useEffect } from 'react';
// // import { useNavigate } from 'react-router-dom';
// // import axios from 'axios';
// // import emailjs from '@emailjs/browser';

// // const EventRegistration = () => {
// //   const navigate = useNavigate();
// //   const [userInfo, setUserInfo] = useState(null);
// //   const [loading, setLoading] = useState(true);

// //   // Form states
// //   const [eventName, setEventName] = useState('');
// //   const [teamName, setTeamName] = useState('');
// //   const [teamLeaderName, setTeamLeaderName] = useState('');
// //   const [teamLeaderEmail, setTeamLeaderEmail] = useState('');
// //   const [teamLeaderMobile, setTeamLeaderMobile] = useState('');
// //   const [institutionType, setInstitutionType] = useState('college');
// //   const [grade, setGrade] = useState('');
// //   const [branch, setBranch] = useState('');
// //   const [institution, setInstitution] = useState('');
// //   const [teamLeaderGender, setTeamLeaderGender] = useState('');
// //   const [teamSize, setTeamSize] = useState(1);
// //   const [teamMembers, setTeamMembers] = useState([]);
// //   const [teamLeaderStudentId, setTeamLeaderStudentId] = useState('');
// //   const [error, setError] = useState('');

// //   // Constants
// //   const events = [
// //     { value: 'code-puzzle', label: 'Code Puzzle' },
// //     { value: 'project-exhibition', label: 'Project Exhibition' },
// //     { value: 'robo-race', label: 'Robo Race' },
// //     { value: 'cultural-events', label: 'Cultural Events' },
// //     { value: 'rangoli-competition', label: 'Rangoli Competition' },
// //     { value: 'food-without-fire', label: 'Food Without Fire' },
// //     { value: 'nukkad-natak', label: 'Nukkad Natak' },
// //     { value: 'singing', label: 'Singing' },
// //     { value: 'technical-poster', label: 'Technical Poster' },
// //     { value: 'dance-competition', label: 'Dance Competition' },
// //     { value: 'rock-band', label: 'Rock Band' },
// //     { value: 'short-film-maker', label: 'Short Film Maker' },
// //     { value: 'ad-mad-show', label: 'Ad Mad Show' },
// //     { value: 'tresure-hunt', label: 'Treasure Hunt' },
// //   ];

// //   const branches = [
// //     'btech', 'bpharma', 'bca', 'bba', 'bcom', 'bsc', 'polytechnic', 'mtech', 'mpharma', 'mca', 'mba', 'mcom', 'msc', 'bed'
// //   ];

// //   const institutions = [
// //     'ABESIT, Ghaziabad', 'IMS Engineering College, Ghaziabad', 'ABES Engineering College, Ghaziabad',
// //     'AKGEC, Ghaziabad', 'JSS Noida', 'RKGIT, Ghaziabad', 'GL Bajaj, Noida',
// //     'HI-TECH Institute of Engineering and Technology, Ghaziabad', 'NIET', 'GNIOT',
// //     'Galgotias University', 'Galgotias College', 'KIET', 'Bhagwati Institute of Technology',
// //     'H.R. Group of Institutions', 'INMANTEC Institutions', 'Delhi Public School (DPS), Ghaziabad',
// //     'Kendriya Vidyalaya, Ghaziabad', 'OTHER'
// //   ];

// //   const classes = [9, 10, 11, 12];
// //   const years = [1, 2, 3, 4];
// //   const genders = ['male', 'female', 'other'];

// //   const emailjsServiceId = 'service_1l04eud';
// //   const emailjsTemplateId = 'template_z5vr25f';
// //   const emailjsPublicKey = 'aISTiwHw6juUInxbl';

// //   useEffect(() => {
// //     const storedUserInfo = JSON.parse(localStorage.getItem('userInfo'));
// //     if (!storedUserInfo) {
// //       navigate('/login');
// //       return;
// //     }
// //     setUserInfo(storedUserInfo);
// //     setTeamLeaderName(storedUserInfo.name);
// //     setTeamLeaderEmail(storedUserInfo.email);
// //     setTeamLeaderMobile(storedUserInfo.mobile);
// //     setLoading(false);
// //   }, [navigate]);

// //   useEffect(() => {
// //     // Adjust team members array based on teamSize (excluding leader)
// //     const numMembers = teamSize - 1;
// //     let newMembers = [...teamMembers];
// //     if (numMembers > newMembers.length) {
// //       for (let i = newMembers.length; i < numMembers; i++) {
// //         newMembers.push({ name: '', email: '', mobile: '', grade: '', branch: '' });
// //       }
// //     } else {
// //       newMembers = newMembers.slice(0, numMembers);
// //     }
// //     setTeamMembers(newMembers);
// //   }, [teamSize]);

// //   const handleMemberChange = (index, field, value) => {
// //     const newMembers = [...teamMembers];
// //     newMembers[index][field] = value;
// //     setTeamMembers(newMembers);
// //   };

// //   const getNiceEventName = (slug) => {
// //     return slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     setError('');

// //     // Basic validation
// //     if (!eventName || !teamName || !teamLeaderName || !teamLeaderEmail || !teamLeaderMobile || !institutionType || !grade || !institution || !teamLeaderGender || !teamLeaderStudentId || teamSize < 1) {
// //       setError('Please fill all required fields.');
// //       return;
// //     }
// //     if (institutionType === 'college' && !branch) {
// //       setError('Branch is required for college.');
// //       return;
// //     }
// //     for (let member of teamMembers) {
// //       if (!member.name || !member.email || !member.mobile || !member.grade || (institutionType === 'college' && !member.branch)) {
// //         setError('Please fill all team member details.');
// //         return;
// //       }
// //     }

// //     const data = {
// //       eventName,
// //       teamName,
// //       teamLeaderName,
// //       teamLeaderEmail,
// //       teamLeaderMobile,
// //       institutionType,
// //       grade,
// //       branch: institutionType === 'college' ? branch : null,
// //       institution,
// //       teamLeaderGender,
// //       teamSize,
// //       teamMembers: teamMembers.map(member => ({
// //         ...member,
// //         branch: institutionType === 'college' ? member.branch : null,
// //       })),
// //       teamLeaderStudentId,
// //     };

// //     try {
// //       const config = {
// //         headers: {
// //           Authorization: `Bearer ${userInfo.token}`,
// //         },
// //       };
// //       await axios.post('https://crossroads-2025.onrender.com/api/events/register', data, config);

// //       // Send email
// //       const emailParams = {
// //         to_email: teamLeaderEmail,
// //         teamLeaderName,
// //         teamName,
// //         teamSize,
// //         eventName: getNiceEventName(eventName),
// //       };
// //       await emailjs.send(emailjsServiceId, emailjsTemplateId, emailParams, emailjsPublicKey);

// //       alert('Registration successful! Confirmation email sent.');
// //       // Optionally navigate to dashboard
// //       navigate('/dashboard');
// //     } catch (err) {
// //       setError(err.response?.data?.message || 'Registration failed.');
// //     }
// //   };

// //   if (loading) return <div>Loading...</div>;

// //   return (
// //     <div>
// //       <h2>Event Registration</h2>
// //       {error && <p style={{ color: 'red' }}>{error}</p>}
// //       <form onSubmit={handleSubmit}>
// //         <div>
// //           <label>Event:</label>
// //           <select value={eventName} onChange={(e) => setEventName(e.target.value)}>
// //             <option value="">Select Event</option>
// //             {events.map((event) => (
// //               <option key={event.value} value={event.value}>{event.label}</option>
// //             ))}
// //           </select>
// //         </div>
// //         <div>
// //           <label>Team Name:</label>
// //           <input type="text" value={teamName} onChange={(e) => setTeamName(e.target.value)} />
// //         </div>
// //         <div>
// //           <label>Team Leader Name:</label>
// //           <input type="text" value={teamLeaderName} onChange={(e) => setTeamLeaderName(e.target.value)} />
// //         </div>
// //         <div>
// //           <label>Team Leader Email:</label>
// //           <input type="email" value={teamLeaderEmail} readOnly />
// //         </div>
// //         <div>
// //           <label>Team Leader Mobile:</label>
// //           <input type="text" value={teamLeaderMobile} readOnly />
// //         </div>
// //         <div>
// //           <label>Institution Type:</label>
// //           <select value={institutionType} onChange={(e) => setInstitutionType(e.target.value)}>
// //             <option value="college">College</option>
// //             <option value="school">School</option>
// //           </select>
// //         </div>
// //         {institutionType === 'school' ? (
// //           <div>
// //             <label>Class:</label>
// //             <select value={grade} onChange={(e) => setGrade(e.target.value)}>
// //               <option value="">Select Class</option>
// //               {classes.map((cls) => (
// //                 <option key={cls} value={cls}>{cls}</option>
// //               ))}
// //             </select>
// //           </div>
// //         ) : (
// //           <>
// //             <div>
// //               <label>Branch:</label>
// //               <select value={branch} onChange={(e) => setBranch(e.target.value)}>
// //                 <option value="">Select Branch</option>
// //                 {branches.map((br) => (
// //                   <option key={br} value={br}>{br.toUpperCase()}</option>
// //                 ))}
// //               </select>
// //             </div>
// //             <div>
// //               <label>Year:</label>
// //               <select value={grade} onChange={(e) => setGrade(e.target.value)}>
// //                 <option value="">Select Year</option>
// //                 {years.map((yr) => (
// //                   <option key={yr} value={yr}>{yr}</option>
// //                 ))}
// //               </select>
// //             </div>
// //           </>
// //         )}
// //         <div>
// //           <label>Institution:</label>
// //           <select value={institution} onChange={(e) => setInstitution(e.target.value)}>
// //             <option value="">Select Institution</option>
// //             {institutions.map((inst) => (
// //               <option key={inst} value={inst}>{inst}</option>
// //             ))}
// //           </select>
// //         </div>
// //         <div>
// //           <label>Team Leader Gender:</label>
// //           <select value={teamLeaderGender} onChange={(e) => setTeamLeaderGender(e.target.value)}>
// //             <option value="">Select Gender</option>
// //             {genders.map((gen) => (
// //               <option key={gen} value={gen}>{gen.charAt(0).toUpperCase() + gen.slice(1)}</option>
// //             ))}
// //           </select>
// //         </div>
// //         <div>
// //           <label>Team Size:</label>
// //           <input type="number" min="1" value={teamSize} onChange={(e) => setTeamSize(parseInt(e.target.value) || 1)} />
// //         </div>
// //         {teamMembers.map((member, index) => (
// //           <div key={index} style={{ border: '1px solid #ccc', padding: '10px', margin: '10px 0' }}>
// //             <h4>Team Member {index + 1}</h4>
// //             <div>
// //               <label>Name:</label>
// //               <input type="text" value={member.name} onChange={(e) => handleMemberChange(index, 'name', e.target.value)} />
// //             </div>
// //             <div>
// //               <label>Email:</label>
// //               <input type="email" value={member.email} onChange={(e) => handleMemberChange(index, 'email', e.target.value)} />
// //             </div>
// //             <div>
// //               <label>Mobile:</label>
// //               <input type="text" value={member.mobile} onChange={(e) => handleMemberChange(index, 'mobile', e.target.value)} />
// //             </div>
// //             {institutionType === 'school' ? (
// //               <div>
// //                 <label>Class:</label>
// //                 <select value={member.grade} onChange={(e) => handleMemberChange(index, 'grade', e.target.value)}>
// //                   <option value="">Select Class</option>
// //                   {classes.map((cls) => (
// //                     <option key={cls} value={cls}>{cls}</option>
// //                   ))}
// //                 </select>
// //               </div>
// //             ) : (
// //               <>
// //                 <div>
// //                   <label>Branch:</label>
// //                   <select value={member.branch} onChange={(e) => handleMemberChange(index, 'branch', e.target.value)}>
// //                     <option value="">Select Branch</option>
// //                     {branches.map((br) => (
// //                       <option key={br} value={br}>{br.toUpperCase()}</option>
// //                     ))}
// //                   </select>
// //                 </div>
// //                 <div>
// //                   <label>Year:</label>
// //                   <select value={member.grade} onChange={(e) => handleMemberChange(index, 'grade', e.target.value)}>
// //                     <option value="">Select Year</option>
// //                     {years.map((yr) => (
// //                       <option key={yr} value={yr}>{yr}</option>
// //                     ))}
// //                   </select>
// //                 </div>
// //               </>
// //             )}
// //           </div>
// //         ))}
// //         <div>
// //           <label>Team Leader Student ID / Roll No:</label>
// //           <input type="text" value={teamLeaderStudentId} onChange={(e) => setTeamLeaderStudentId(e.target.value)} />
// //         </div>
// //         <button type="submit">Register</button>
// //       </form>
// //     </div>
// //   );
// // };

// // export default EventRegistration;


// // new
// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import emailjs from '@emailjs/browser';
// import { Users, Mail, Phone, GraduationCap, Building2, UserCircle, Hash, Sparkles, CheckCircle2, AlertCircle } from 'lucide-react';

// const EventRegistration = () => {
//   const navigate = useNavigate();
//   const [userInfo, setUserInfo] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [submitting, setSubmitting] = useState(false);

//   const [eventName, setEventName] = useState('');
//   const [teamName, setTeamName] = useState('');
//   const [teamLeaderName, setTeamLeaderName] = useState('');
//   const [teamLeaderEmail, setTeamLeaderEmail] = useState('');
//   const [teamLeaderMobile, setTeamLeaderMobile] = useState('');
//   const [institutionType, setInstitutionType] = useState('college');
//   const [grade, setGrade] = useState('');
//   const [branch, setBranch] = useState('');
//   const [institution, setInstitution] = useState('');
//   const [teamLeaderGender, setTeamLeaderGender] = useState('');
//   const [teamSize, setTeamSize] = useState(1);
//   const [teamMembers, setTeamMembers] = useState([]);
//   const [teamLeaderStudentId, setTeamLeaderStudentId] = useState('');
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState(false);

//   const events = [
//     { value: 'code-puzzle', label: 'Code Puzzle', icon: '💻' },
//     { value: 'project-exhibition', label: 'Project Exhibition', icon: '🔬' },
//     { value: 'robo-race', label: 'Robo Race', icon: '🤖' },
//     { value: 'cultural-events', label: 'Cultural Events', icon: '🎭' },
//     { value: 'rangoli-competition', label: 'Rangoli Competition', icon: '🎨' },
//     { value: 'food-without-fire', label: 'Food Without Fire', icon: '🍳' },
//     { value: 'nukkad-natak', label: 'Nukkad Natak', icon: '🎪' },
//     { value: 'singing', label: 'Singing', icon: '🎤' },
//     { value: 'technical-poster', label: 'Technical Poster', icon: '📊' },
//     { value: 'dance-competition', label: 'Dance Competition', icon: '💃' },
//     { value: 'rock-band', label: 'Rock Band', icon: '🎸' },
//     { value: 'short-film-maker', label: 'Short Film Maker', icon: '🎬' },
//     { value: 'ad-mad-show', label: 'Ad Mad Show', icon: '📺' },
//     { value: 'tresure-hunt', label: 'Treasure Hunt', icon: '🗺️' },
//   ];

//   const branches = [
//     'btech', 'bpharma', 'bca', 'bba', 'bcom', 'bsc', 'polytechnic', 'mtech', 'mpharma', 'mca', 'mba', 'mcom', 'msc', 'bed'
//   ];

//   const institutions = [
//     'ABESIT, Ghaziabad', 'IMS Engineering College, Ghaziabad', 'ABES Engineering College, Ghaziabad',
//     'AKGEC, Ghaziabad', 'JSS Noida', 'RKGIT, Ghaziabad', 'GL Bajaj, Noida',
//     'HI-TECH Institute of Engineering and Technology, Ghaziabad', 'NIET', 'GNIOT',
//     'Galgotias University', 'Galgotias College', 'KIET', 'Bhagwati Institute of Technology',
//     'H.R. Group of Institutions', 'INMANTEC Institutions', 'Delhi Public School (DPS), Ghaziabad',
//     'Kendriya Vidyalaya, Ghaziabad', 'OTHER'
//   ];

//   const classes = [9, 10, 11, 12];
//   const years = [1, 2, 3, 4];
//   const genders = ['male', 'female', 'other'];

//   const emailjsServiceId = 'service_1l04eud';
//   const emailjsTemplateId = 'template_z5vr25f';
//   const emailjsPublicKey = 'aISTiwHw6juUInxbl';

//   useEffect(() => {
//     const storedUserInfo = JSON.parse(localStorage.getItem('userInfo'));
//     if (!storedUserInfo) {
//       navigate('/login');
//       return;
//     }
//     setUserInfo(storedUserInfo);
//     setTeamLeaderName(storedUserInfo.name);
//     setTeamLeaderEmail(storedUserInfo.email);
//     setTeamLeaderMobile(storedUserInfo.mobile);
//     setLoading(false);
//   }, [navigate]);

//   useEffect(() => {
//     const numMembers = teamSize - 1;
//     let newMembers = [...teamMembers];
//     if (numMembers > newMembers.length) {
//       for (let i = newMembers.length; i < numMembers; i++) {
//         newMembers.push({ name: '', email: '', mobile: '', grade: '', branch: '' });
//       }
//     } else {
//       newMembers = newMembers.slice(0, numMembers);
//     }
//     setTeamMembers(newMembers);
//   }, [teamSize]);

//   const handleMemberChange = (index, field, value) => {
//     const newMembers = [...teamMembers];
//     newMembers[index][field] = value;
//     setTeamMembers(newMembers);
//   };

//   const getNiceEventName = (slug) => {
//     return slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError('');
//     setSubmitting(true);

//     if (!eventName || !teamName || !teamLeaderName || !teamLeaderEmail || !teamLeaderMobile || !institutionType || !grade || !institution || !teamLeaderGender || !teamLeaderStudentId || teamSize < 1) {
//       setError('Please fill all required fields.');
//       setSubmitting(false);
//       return;
//     }
//     if (institutionType === 'college' && !branch) {
//       setError('Branch is required for college.');
//       setSubmitting(false);
//       return;
//     }
//     for (let member of teamMembers) {
//       if (!member.name || !member.email || !member.mobile || !member.grade || (institutionType === 'college' && !member.branch)) {
//         setError('Please fill all team member details.');
//         setSubmitting(false);
//         return;
//       }
//     }

//     const data = {
//       eventName,
//       teamName,
//       teamLeaderName,
//       teamLeaderEmail,
//       teamLeaderMobile,
//       institutionType,
//       grade,
//       branch: institutionType === 'college' ? branch : null,
//       institution,
//       teamLeaderGender,
//       teamSize,
//       teamMembers: teamMembers.map(member => ({
//         ...member,
//         branch: institutionType === 'college' ? member.branch : null,
//       })),
//       teamLeaderStudentId,
//     };

//     try {
//       const config = {
//         headers: {
//           Authorization: `Bearer ${userInfo.token}`,
//         },
//       };
//       await axios.post('https://crossroads-2025.onrender.com/api/events/register', data, config);

//       const emailParams = {
//         to_email: teamLeaderEmail,
//         teamLeaderName,
//         teamName,
//         teamSize,
//         eventName: getNiceEventName(eventName),
//       };
//       await emailjs.send(emailjsServiceId, emailjsTemplateId, emailParams, emailjsPublicKey);

//       setSuccess(true);
//       setTimeout(() => {
//         navigate('/dashboard');
//       }, 3000);
//     } catch (err) {
//       setError(err.response?.data?.message || 'Registration failed. Please try again.');
//       setSubmitting(false);
//     }
//   };

//   if (loading) {
//     return (
//       <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
//         <div className="flex flex-col items-center space-y-4">
//           <div className="w-16 h-16 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin"></div>
//           <p className="text-cyan-400 text-lg font-medium">Loading...</p>
//         </div>
//       </div>
//     );
//   }

//   if (success) {
//     return (
//       <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4">
//         <div className="bg-slate-800/50 backdrop-blur-xl border border-green-500/20 rounded-2xl p-8 max-w-md w-full text-center transform animate-scale-in">
//           <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
//             <CheckCircle2 className="w-12 h-12 text-green-400" />
//           </div>
//           <h2 className="text-3xl font-bold text-white mb-4">Registration Successful!</h2>
//           <p className="text-slate-300 mb-6">
//             Confirmation email has been sent to <span className="text-cyan-400 font-medium">{teamLeaderEmail}</span>
//           </p>
//           <p className="text-slate-400 text-sm">Redirecting to dashboard...</p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-12 px-4 sm:px-6 lg:px-8">
//       <style>{`
//         @keyframes gradient-x {
//           0%, 100% { background-position: 0% 50%; }
//           50% { background-position: 100% 50%; }
//         }
//         @keyframes scale-in {
//           from { transform: scale(0.9); opacity: 0; }
//           to { transform: scale(1); opacity: 1; }
//         }
//         @keyframes slide-up {
//           from { transform: translateY(20px); opacity: 0; }
//           to { transform: translateY(0); opacity: 1; }
//         }
//         .animate-gradient-x { animation: gradient-x 3s ease infinite; }
//         .animate-scale-in { animation: scale-in 0.5s ease-out; }
//         .animate-slide-up { animation: slide-up 0.6s ease-out; }
//         .glass-effect {
//           background: rgba(30, 41, 59, 0.4);
//           backdrop-filter: blur(20px);
//           border: 1px solid rgba(148, 163, 184, 0.1);
//         }
//         input:focus, select:focus, textarea:focus {
//           outline: none;
//           border-color: rgb(34, 211, 238);
//           box-shadow: 0 0 0 3px rgba(34, 211, 238, 0.1);
//         }
//       `}</style>

//       <div className="max-w-5xl mx-auto animate-slide-up">
//         <div className="text-center mb-12">
//           <div className="inline-flex items-center justify-center space-x-2 mb-4">
//             <Sparkles className="w-8 h-8 text-cyan-400" />
//             <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
//               Event Registration
//             </h1>
//             <Sparkles className="w-8 h-8 text-purple-400" />
//           </div>
//           <p className="text-slate-300 text-lg">Join the ultimate technical fest experience</p>
//         </div>

//         {error && (
//           <div className="mb-6 glass-effect rounded-xl p-4 border-l-4 border-red-500 flex items-center space-x-3 animate-scale-in">
//             <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
//             <p className="text-red-300">{error}</p>
//           </div>
//         )}

//         <form onSubmit={handleSubmit} className="space-y-8">
//           <div className="glass-effect rounded-2xl p-8 shadow-2xl">
//             <h2 className="text-2xl font-bold text-white mb-6 flex items-center space-x-2">
//               <Sparkles className="w-6 h-6 text-cyan-400" />
//               <span>Event Details</span>
//             </h2>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <div>
//                 <label className="block text-sm font-medium text-slate-300 mb-2">Select Event *</label>
//                 <select
//                   value={eventName}
//                   onChange={(e) => setEventName(e.target.value)}
//                   className="w-full bg-slate-700/50 border border-slate-600 rounded-xl px-4 py-3 text-white transition-all duration-200 hover:border-cyan-500/50"
//                   required
//                 >
//                   <option value="">Choose your event</option>
//                   {events.map((event) => (
//                     <option key={event.value} value={event.value}>
//                       {event.icon} {event.label}
//                     </option>
//                   ))}
//                 </select>
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-slate-300 mb-2">Team Name *</label>
//                 <div className="relative">
//                   <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
//                   <input
//                     type="text"
//                     value={teamName}
//                     onChange={(e) => setTeamName(e.target.value)}
//                     placeholder="Enter your team name"
//                     className="w-full bg-slate-700/50 border border-slate-600 rounded-xl pl-11 pr-4 py-3 text-white placeholder-slate-400 transition-all duration-200"
//                     required
//                   />
//                 </div>
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-slate-300 mb-2">Team Size *</label>
//                 <input
//                   type="number"
//                   min="1"
//                   max="10"
//                   value={teamSize}
//                   onChange={(e) => setTeamSize(parseInt(e.target.value) || 1)}
//                   className="w-full bg-slate-700/50 border border-slate-600 rounded-xl px-4 py-3 text-white transition-all duration-200"
//                   required
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-slate-300 mb-2">Institution Type *</label>
//                 <select
//                   value={institutionType}
//                   onChange={(e) => setInstitutionType(e.target.value)}
//                   className="w-full bg-slate-700/50 border border-slate-600 rounded-xl px-4 py-3 text-white transition-all duration-200"
//                   required
//                 >
//                   <option value="college">College</option>
//                   <option value="school">School</option>
//                 </select>
//               </div>
//             </div>
//           </div>

//           <div className="glass-effect rounded-2xl p-8 shadow-2xl">
//             <h2 className="text-2xl font-bold text-white mb-6 flex items-center space-x-2">
//               <UserCircle className="w-6 h-6 text-cyan-400" />
//               <span>Team Leader Information</span>
//             </h2>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <div>
//                 <label className="block text-sm font-medium text-slate-300 mb-2">Full Name *</label>
//                 <input
//                   type="text"
//                   value={teamLeaderName}
//                   onChange={(e) => setTeamLeaderName(e.target.value)}
//                   className="w-full bg-slate-700/50 border border-slate-600 rounded-xl px-4 py-3 text-white transition-all duration-200"
//                   required
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-slate-300 mb-2">Email Address *</label>
//                 <div className="relative">
//                   <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
//                   <input
//                     type="email"
//                     value={teamLeaderEmail}
//                     readOnly
//                     className="w-full bg-slate-700/30 border border-slate-600 rounded-xl pl-11 pr-4 py-3 text-slate-400 cursor-not-allowed"
//                   />
//                 </div>
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-slate-300 mb-2">Mobile Number *</label>
//                 <div className="relative">
//                   <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
//                   <input
//                     type="text"
//                     value={teamLeaderMobile}
//                     readOnly
//                     className="w-full bg-slate-700/30 border border-slate-600 rounded-xl pl-11 pr-4 py-3 text-slate-400 cursor-not-allowed"
//                   />
//                 </div>
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-slate-300 mb-2">Gender *</label>
//                 <select
//                   value={teamLeaderGender}
//                   onChange={(e) => setTeamLeaderGender(e.target.value)}
//                   className="w-full bg-slate-700/50 border border-slate-600 rounded-xl px-4 py-3 text-white transition-all duration-200"
//                   required
//                 >
//                   <option value="">Select Gender</option>
//                   {genders.map((gen) => (
//                     <option key={gen} value={gen}>{gen.charAt(0).toUpperCase() + gen.slice(1)}</option>
//                   ))}
//                 </select>
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-slate-300 mb-2">Institution *</label>
//                 <div className="relative">
//                   <Building2 className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
//                   <select
//                     value={institution}
//                     onChange={(e) => setInstitution(e.target.value)}
//                     className="w-full bg-slate-700/50 border border-slate-600 rounded-xl pl-11 pr-4 py-3 text-white transition-all duration-200"
//                     required
//                   >
//                     <option value="">Select Institution</option>
//                     {institutions.map((inst) => (
//                       <option key={inst} value={inst}>{inst}</option>
//                     ))}
//                   </select>
//                 </div>
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-slate-300 mb-2">Student ID / Roll No *</label>
//                 <div className="relative">
//                   <Hash className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
//                   <input
//                     type="text"
//                     value={teamLeaderStudentId}
//                     onChange={(e) => setTeamLeaderStudentId(e.target.value)}
//                     placeholder="Enter your ID"
//                     className="w-full bg-slate-700/50 border border-slate-600 rounded-xl pl-11 pr-4 py-3 text-white placeholder-slate-400 transition-all duration-200"
//                     required
//                   />
//                 </div>
//               </div>

//               {institutionType === 'school' ? (
//                 <div>
//                   <label className="block text-sm font-medium text-slate-300 mb-2">Class *</label>
//                   <div className="relative">
//                     <GraduationCap className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
//                     <select
//                       value={grade}
//                       onChange={(e) => setGrade(e.target.value)}
//                       className="w-full bg-slate-700/50 border border-slate-600 rounded-xl pl-11 pr-4 py-3 text-white transition-all duration-200"
//                       required
//                     >
//                       <option value="">Select Class</option>
//                       {classes.map((cls) => (
//                         <option key={cls} value={cls}>{cls}th</option>
//                       ))}
//                     </select>
//                   </div>
//                 </div>
//               ) : (
//                 <>
//                   <div>
//                     <label className="block text-sm font-medium text-slate-300 mb-2">Branch *</label>
//                     <select
//                       value={branch}
//                       onChange={(e) => setBranch(e.target.value)}
//                       className="w-full bg-slate-700/50 border border-slate-600 rounded-xl px-4 py-3 text-white transition-all duration-200"
//                       required
//                     >
//                       <option value="">Select Branch</option>
//                       {branches.map((br) => (
//                         <option key={br} value={br}>{br.toUpperCase()}</option>
//                       ))}
//                     </select>
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium text-slate-300 mb-2">Year *</label>
//                     <div className="relative">
//                       <GraduationCap className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
//                       <select
//                         value={grade}
//                         onChange={(e) => setGrade(e.target.value)}
//                         className="w-full bg-slate-700/50 border border-slate-600 rounded-xl pl-11 pr-4 py-3 text-white transition-all duration-200"
//                         required
//                       >
//                         <option value="">Select Year</option>
//                         {years.map((yr) => (
//                           <option key={yr} value={yr}>{yr}</option>
//                         ))}
//                       </select>
//                     </div>
//                   </div>
//                 </>
//               )}
//             </div>
//           </div>

//           {teamMembers.length > 0 && (
//             <div className="glass-effect rounded-2xl p-8 shadow-2xl">
//               <h2 className="text-2xl font-bold text-white mb-6 flex items-center space-x-2">
//                 <Users className="w-6 h-6 text-cyan-400" />
//                 <span>Team Members</span>
//               </h2>

//               <div className="space-y-6">
//                 {teamMembers.map((member, index) => (
//                   <div key={index} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-cyan-500/30 transition-all duration-200">
//                     <h3 className="text-lg font-semibold text-cyan-400 mb-4">Member {index + 1}</h3>
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                       <div>
//                         <label className="block text-sm font-medium text-slate-300 mb-2">Name *</label>
//                         <input
//                           type="text"
//                           value={member.name}
//                           onChange={(e) => handleMemberChange(index, 'name', e.target.value)}
//                           placeholder="Full name"
//                           className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-2.5 text-white placeholder-slate-400 transition-all duration-200"
//                           required
//                         />
//                       </div>
//                       <div>
//                         <label className="block text-sm font-medium text-slate-300 mb-2">Email *</label>
//                         <input
//                           type="email"
//                           value={member.email}
//                           onChange={(e) => handleMemberChange(index, 'email', e.target.value)}
//                           placeholder="email@example.com"
//                           className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-2.5 text-white placeholder-slate-400 transition-all duration-200"
//                           required
//                         />
//                       </div>
//                       <div>
//                         <label className="block text-sm font-medium text-slate-300 mb-2">Mobile *</label>
//                         <input
//                           type="text"
//                           value={member.mobile}
//                           onChange={(e) => handleMemberChange(index, 'mobile', e.target.value)}
//                           placeholder="Mobile number"
//                           className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-2.5 text-white placeholder-slate-400 transition-all duration-200"
//                           required
//                         />
//                       </div>
//                       {institutionType === 'school' ? (
//                         <div>
//                           <label className="block text-sm font-medium text-slate-300 mb-2">Class *</label>
//                           <select
//                             value={member.grade}
//                             onChange={(e) => handleMemberChange(index, 'grade', e.target.value)}
//                             className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-2.5 text-white transition-all duration-200"
//                             required
//                           >
//                             <option value="">Select Class</option>
//                             {classes.map((cls) => (
//                               <option key={cls} value={cls}>{cls}th</option>
//                             ))}
//                           </select>
//                         </div>
//                       ) : (
//                         <>
//                           <div>
//                             <label className="block text-sm font-medium text-slate-300 mb-2">Branch *</label>
//                             <select
//                               value={member.branch}
//                               onChange={(e) => handleMemberChange(index, 'branch', e.target.value)}
//                               className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-2.5 text-white transition-all duration-200"
//                               required
//                             >
//                               <option value="">Select Branch</option>
//                               {branches.map((br) => (
//                                 <option key={br} value={br}>{br.toUpperCase()}</option>
//                               ))}
//                             </select>
//                           </div>
//                           <div>
//                             <label className="block text-sm font-medium text-slate-300 mb-2">Year *</label>
//                             <select
//                               value={member.grade}
//                               onChange={(e) => handleMemberChange(index, 'grade', e.target.value)}
//                               className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-2.5 text-white transition-all duration-200"
//                               required
//                             >
//                               <option value="">Select Year</option>
//                               {years.map((yr) => (
//                                 <option key={yr} value={yr}>{yr}</option>
//                               ))}
//                             </select>
//                           </div>
//                         </>
//                       )}
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           )}

//           <div className="flex justify-center pt-4">
//             <button
//               type="submit"
//               disabled={submitting}
//               className="group relative px-12 py-4 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 text-white font-bold text-lg rounded-xl shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none overflow-hidden"
//             >
//               <span className="relative z-10 flex items-center space-x-2">
//                 {submitting ? (
//                   <>
//                     <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
//                     <span>Registering...</span>
//                   </>
//                 ) : (
//                   <>
//                     <CheckCircle2 className="w-5 h-5" />
//                     <span>Complete Registration</span>
//                   </>
//                 )}
//               </span>
//               <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default EventRegistration;

// new styled
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import emailjs from '@emailjs/browser';
import { Users, Mail, Phone, GraduationCap, Building2, UserCircle, Hash, Sparkles, CheckCircle2, AlertCircle, Zap, Award, Calendar, MapPin } from 'lucide-react';

const EventRegistration = () => {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  const [eventName, setEventName] = useState('');
  const [teamName, setTeamName] = useState('');
  const [teamLeaderName, setTeamLeaderName] = useState('');
  const [teamLeaderEmail, setTeamLeaderEmail] = useState('');
  const [teamLeaderMobile, setTeamLeaderMobile] = useState('');
  const [institutionType, setInstitutionType] = useState('college');
  const [grade, setGrade] = useState('');
  const [branch, setBranch] = useState('');
  const [institution, setInstitution] = useState('');
  const [teamLeaderGender, setTeamLeaderGender] = useState('');
  const [teamSize, setTeamSize] = useState(1);
  const [teamMembers, setTeamMembers] = useState([]);
  const [teamLeaderStudentId, setTeamLeaderStudentId] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const events = [
    { value: 'code-puzzle', label: 'Code Puzzle', icon: '💻', category: 'technical' },
    { value: 'project-exhibition', label: 'Project Exhibition', icon: '🔬', category: 'technical' },
    { value: 'robo-race', label: 'Robo Race', icon: '🤖', category: 'technical' },
    { value: 'technical-poster', label: 'Technical Poster', icon: '📊', category: 'technical' },
    { value: 'cultural-events', label: 'Cultural Events', icon: '🎭', category: 'cultural' },
    { value: 'rangoli-competition', label: 'Rangoli Competition', icon: '🎨', category: 'cultural' },
    { value: 'food-without-fire', label: 'Food Without Fire', icon: '🍳', category: 'cultural' },
    { value: 'nukkad-natak', label: 'Nukkad Natak', icon: '🎪', category: 'cultural' },
    { value: 'singing', label: 'Singing', icon: '🎤', category: 'cultural' },
    { value: 'dance-competition', label: 'Dance Competition', icon: '💃', category: 'cultural' },
    { value: 'rock-band', label: 'Rock Band', icon: '🎸', category: 'cultural' },
    { value: 'short-film-maker', label: 'Short Film Maker', icon: '🎬', category: 'cultural' },
    { value: 'ad-mad-show', label: 'Ad Mad Show', icon: '📺', category: 'cultural' },
    { value: 'tresure-hunt', label: 'Treasure Hunt', icon: '🗺️', category: 'fun' },
  ];

  const branches = [
    'btech', 'bpharma', 'bca', 'bba', 'bcom', 'bsc', 'polytechnic', 'mtech', 'mpharma', 'mca', 'mba', 'mcom', 'msc', 'bed'
  ];

  const institutions = [
    'ABESIT, Ghaziabad', 'IMS Engineering College, Ghaziabad', 'ABES Engineering College, Ghaziabad',
    'AKGEC, Ghaziabad', 'JSS Noida', 'RKGIT, Ghaziabad', 'GL Bajaj, Noida',
    'HI-TECH Institute of Engineering and Technology, Ghaziabad', 'NIET', 'GNIOT',
    'Galgotias University', 'Galgotias College', 'KIET', 'Bhagwati Institute of Technology',
    'H.R. Group of Institutions', 'INMANTEC Institutions', 'Delhi Public School (DPS), Ghaziabad',
    'Kendriya Vidyalaya, Ghaziabad', 'OTHER'
  ];

  const classes = [9, 10, 11, 12];
  const years = [1, 2, 3, 4];
  const genders = ['male', 'female', 'other'];

  const emailjsServiceId = 'service_1l04eud';
  const emailjsTemplateId = 'template_z5vr25f';
  const emailjsPublicKey = 'aISTiwHw6juUInxbl';

  useEffect(() => {
    const storedUserInfo = JSON.parse(localStorage.getItem('userInfo'));
    if (!storedUserInfo) {
      navigate('/login');
      return;
    }
    setUserInfo(storedUserInfo);
    setTeamLeaderName(storedUserInfo.name);
    setTeamLeaderEmail(storedUserInfo.email);
    setTeamLeaderMobile(storedUserInfo.mobile);
    setLoading(false);
  }, [navigate]);

  useEffect(() => {
    const numMembers = teamSize - 1;
    let newMembers = [...teamMembers];
    if (numMembers > newMembers.length) {
      for (let i = newMembers.length; i < numMembers; i++) {
        newMembers.push({ name: '', email: '', mobile: '', grade: '', branch: '' });
      }
    } else {
      newMembers = newMembers.slice(0, numMembers);
    }
    setTeamMembers(newMembers);
  }, [teamSize]);

  const handleMemberChange = (index, field, value) => {
    const newMembers = [...teamMembers];
    newMembers[index][field] = value;
    setTeamMembers(newMembers);
  };

  const getNiceEventName = (slug) => {
    return slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSubmitting(true);

    if (!eventName || !teamName || !teamLeaderName || !teamLeaderEmail || !teamLeaderMobile || !institutionType || !grade || !institution || !teamLeaderGender || !teamLeaderStudentId || teamSize < 1) {
      setError('Please fill all required fields.');
      setSubmitting(false);
      return;
    }
    if (institutionType === 'college' && !branch) {
      setError('Branch is required for college.');
      setSubmitting(false);
      return;
    }
    for (let member of teamMembers) {
      if (!member.name || !member.email || !member.mobile || !member.grade || (institutionType === 'college' && !member.branch)) {
        setError('Please fill all team member details.');
        setSubmitting(false);
        return;
      }
    }

    const data = {
      eventName,
      teamName,
      teamLeaderName,
      teamLeaderEmail,
      teamLeaderMobile,
      institutionType,
      grade,
      branch: institutionType === 'college' ? branch : null,
      institution,
      teamLeaderGender,
      teamSize,
      teamMembers: teamMembers.map(member => ({
        ...member,
        branch: institutionType === 'college' ? member.branch : null,
      })),
      teamLeaderStudentId,
    };

    try {
      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      };
      await axios.post('https://crossroads-2025.onrender.com/api/events/register', data, config);

      const emailParams = {
        to_email: teamLeaderEmail,
        teamLeaderName,
        teamName,
        teamSize,
        eventName: getNiceEventName(eventName),
      };
      await emailjs.send(emailjsServiceId, emailjsTemplateId, emailParams, emailjsPublicKey);

      setSuccess(true);
      setTimeout(() => {
        navigate('/dashboard');
      }, 3000);
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed. Please try again.');
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-black relative overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-black to-cyan-900/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-700"></div>
        </div>
        <div className="flex flex-col items-center space-y-4 relative z-10">
          <div className="relative">
            <div className="w-20 h-20 border-4 border-cyan-500/30 rounded-full"></div>
            <div className="absolute inset-0 w-20 h-20 border-4 border-t-cyan-400 border-r-blue-400 border-b-transparent border-l-transparent rounded-full animate-spin"></div>
          </div>
          <p className="text-cyan-400 text-lg font-semibold tracking-wider">Initializing...</p>
        </div>
      </div>
    );
  }

  if (success) {
    return (
      <div className="min-h-screen bg-black relative overflow-hidden flex items-center justify-center p-4">
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 via-black to-emerald-900/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse"></div>
        </div>
        <div className="relative z-10 bg-slate-900/80 backdrop-blur-2xl border border-green-500/30 rounded-3xl p-10 max-w-md w-full text-center shadow-2xl shadow-green-500/20">
          <div className="relative inline-flex mb-8">
            <div className="absolute inset-0 bg-green-500/20 rounded-full blur-xl animate-pulse"></div>
            <div className="relative w-24 h-24 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center">
              <CheckCircle2 className="w-14 h-14 text-white" strokeWidth={2.5} />
            </div>
          </div>
          <h2 className="text-4xl font-black text-white mb-3 tracking-tight">Registration Complete!</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-green-400 to-transparent mx-auto mb-6"></div>
          <p className="text-slate-300 text-lg mb-2">
            Confirmation email sent to
          </p>
          <p className="text-cyan-400 font-semibold text-lg mb-8 break-all">{teamLeaderEmail}</p>
          <div className="flex items-center justify-center space-x-2 text-slate-400">
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
            <p className="text-sm">Redirecting to dashboard...</p>
          </div>
        </div>
      </div>
    );
  }

  const technicalEvents = events.filter(e => e.category === 'technical');
  const culturalEvents = events.filter(e => e.category === 'cultural');
  const funEvents = events.filter(e => e.category === 'fun');

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes glow-pulse {
          0%, 100% { box-shadow: 0 0 20px rgba(34, 211, 238, 0.3); }
          50% { box-shadow: 0 0 40px rgba(34, 211, 238, 0.6), 0 0 60px rgba(34, 211, 238, 0.3); }
        }
        @keyframes slide-in {
          from { transform: translateY(30px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes border-flow {
          0%, 100% { border-color: rgba(34, 211, 238, 0.5); }
          50% { border-color: rgba(59, 130, 246, 0.5); }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-glow-pulse { animation: glow-pulse 2s ease-in-out infinite; }
        .animate-slide-in { animation: slide-in 0.6s ease-out; }
        .animate-border-flow { animation: border-flow 3s ease-in-out infinite; }
        .glass-card {
          background: linear-gradient(135deg, rgba(15, 23, 42, 0.7) 0%, rgba(15, 23, 42, 0.5) 100%);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(148, 163, 184, 0.1);
        }
        .input-glow:focus {
          box-shadow: 0 0 0 3px rgba(34, 211, 238, 0.15), 0 0 20px rgba(34, 211, 238, 0.1);
        }
        .grid-pattern {
          background-image:
            linear-gradient(rgba(34, 211, 238, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34, 211, 238, 0.03) 1px, transparent 1px);
          background-size: 50px 50px;
        }
      `}</style>

      <div className="absolute inset-0 bg-gradient-to-br from-blue-950/30 via-black to-cyan-950/30"></div>
      <div className="absolute inset-0 grid-pattern"></div>

      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-40 right-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl animate-pulse delay-500"></div>

      <div className="relative z-10 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto animate-slide-in">
          <div className="text-center mb-16 relative">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>

            <div className="relative inline-flex items-center justify-center mb-6">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-cyan-500/20 blur-2xl"></div>
              <Zap className="w-12 h-12 text-cyan-400 mr-3 animate-float" strokeWidth={2.5} />
              <h1 className="text-6xl md:text-7xl font-black tracking-tighter">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400">
                  EVENT
                </span>
                <span className="text-white"> REGISTRATION</span>
              </h1>
              <Award className="w-12 h-12 text-blue-400 ml-3 animate-float" style={{ animationDelay: '1s' }} strokeWidth={2.5} />
            </div>

            <div className="w-32 h-1.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent mx-auto mb-6"></div>

            <p className="text-slate-300 text-xl font-light tracking-wide max-w-2xl mx-auto">
              Secure your spot in the most anticipated technical fest of the year
            </p>

            <div className="flex items-center justify-center space-x-8 mt-8">
              <div className="flex items-center space-x-2 text-cyan-400">
                <Calendar className="w-5 h-5" />
                <span className="text-sm font-medium">Dec 2025</span>
              </div>
              <div className="w-px h-6 bg-slate-700"></div>
              <div className="flex items-center space-x-2 text-blue-400">
                <MapPin className="w-5 h-5" />
                <span className="text-sm font-medium">Campus Arena</span>
              </div>
            </div>
          </div>

          {error && (
            <div className="mb-8 glass-card rounded-2xl p-5 border-l-4 border-red-500 flex items-center space-x-4 animate-slide-in shadow-2xl shadow-red-500/10">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-red-500/10 rounded-full flex items-center justify-center">
                  <AlertCircle className="w-5 h-5 text-red-400" />
                </div>
              </div>
              <p className="text-red-300 font-medium">{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="glass-card rounded-3xl p-8 md:p-10 shadow-2xl border-t border-cyan-500/10 animate-border-flow">
              <div className="flex items-center space-x-3 mb-8">
                <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-cyan-500/30">
                  <Sparkles className="w-6 h-6 text-white" strokeWidth={2.5} />
                </div>
                <h2 className="text-3xl font-bold text-white tracking-tight">Event Selection</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-cyan-400 mb-3 tracking-wide uppercase">Select Your Event *</label>
                  <select
                    value={eventName}
                    onChange={(e) => setEventName(e.target.value)}
                    className="w-full bg-slate-800/60 border border-slate-700 rounded-xl px-5 py-4 text-white transition-all duration-200 hover:border-cyan-500/50 focus:border-cyan-400 focus:outline-none input-glow font-medium"
                    required
                  >
                    <option value="">Choose your competition</option>
                    <optgroup label="🔧 Technical Events" className="font-semibold">
                      {technicalEvents.map((event) => (
                        <option key={event.value} value={event.value}>
                          {event.icon} {event.label}
                        </option>
                      ))}
                    </optgroup>
                    <optgroup label="🎭 Cultural Events" className="font-semibold">
                      {culturalEvents.map((event) => (
                        <option key={event.value} value={event.value}>
                          {event.icon} {event.label}
                        </option>
                      ))}
                    </optgroup>
                    <optgroup label="🎯 Fun Events" className="font-semibold">
                      {funEvents.map((event) => (
                        <option key={event.value} value={event.value}>
                          {event.icon} {event.label}
                        </option>
                      ))}
                    </optgroup>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-cyan-400 mb-3 tracking-wide uppercase">Team Name *</label>
                  <div className="relative group">
                    <Users className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400 group-hover:text-cyan-400 transition-colors" />
                    <input
                      type="text"
                      value={teamName}
                      onChange={(e) => setTeamName(e.target.value)}
                      placeholder="Enter your team name"
                      className="w-full bg-slate-800/60 border border-slate-700 rounded-xl pl-12 pr-4 py-4 text-white placeholder-slate-500 transition-all duration-200 focus:outline-none input-glow hover:border-cyan-500/50 focus:border-cyan-400"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-cyan-400 mb-3 tracking-wide uppercase">Team Size *</label>
                  <input
                    type="number"
                    min="1"
                    max="10"
                    value={teamSize}
                    onChange={(e) => setTeamSize(parseInt(e.target.value) || 1)}
                    className="w-full bg-slate-800/60 border border-slate-700 rounded-xl px-5 py-4 text-white transition-all duration-200 focus:outline-none input-glow hover:border-cyan-500/50 focus:border-cyan-400 font-medium"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-cyan-400 mb-3 tracking-wide uppercase">Institution Type *</label>
                  <select
                    value={institutionType}
                    onChange={(e) => setInstitutionType(e.target.value)}
                    className="w-full bg-slate-800/60 border border-slate-700 rounded-xl px-5 py-4 text-white transition-all duration-200 hover:border-cyan-500/50 focus:border-cyan-400 focus:outline-none input-glow font-medium"
                    required
                  >
                    <option value="college">College / University</option>
                    <option value="school">School</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="glass-card rounded-3xl p-8 md:p-10 shadow-2xl border-t border-blue-500/10">
              <div className="flex items-center space-x-3 mb-8">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/30">
                  <UserCircle className="w-6 h-6 text-white" strokeWidth={2.5} />
                </div>
                <h2 className="text-3xl font-bold text-white tracking-tight">Team Leader Details</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-blue-400 mb-3 tracking-wide uppercase">Full Name *</label>
                  <input
                    type="text"
                    value={teamLeaderName}
                    onChange={(e) => setTeamLeaderName(e.target.value)}
                    className="w-full bg-slate-800/60 border border-slate-700 rounded-xl px-5 py-4 text-white transition-all duration-200 focus:outline-none input-glow hover:border-blue-500/50 focus:border-blue-400"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-blue-400 mb-3 tracking-wide uppercase">Email Address *</label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-500" />
                    <input
                      type="email"
                      value={teamLeaderEmail}
                      readOnly
                      className="w-full bg-slate-800/30 border border-slate-700/50 rounded-xl pl-12 pr-4 py-4 text-slate-400 cursor-not-allowed"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-blue-400 mb-3 tracking-wide uppercase">Mobile Number *</label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-500" />
                    <input
                      type="text"
                      value={teamLeaderMobile}
                      readOnly
                      className="w-full bg-slate-800/30 border border-slate-700/50 rounded-xl pl-12 pr-4 py-4 text-slate-400 cursor-not-allowed"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-blue-400 mb-3 tracking-wide uppercase">Gender *</label>
                  <select
                    value={teamLeaderGender}
                    onChange={(e) => setTeamLeaderGender(e.target.value)}
                    className="w-full bg-slate-800/60 border border-slate-700 rounded-xl px-5 py-4 text-white transition-all duration-200 hover:border-blue-500/50 focus:border-blue-400 focus:outline-none input-glow font-medium"
                    required
                  >
                    <option value="">Select Gender</option>
                    {genders.map((gen) => (
                      <option key={gen} value={gen}>{gen.charAt(0).toUpperCase() + gen.slice(1)}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-blue-400 mb-3 tracking-wide uppercase">Institution *</label>
                  <div className="relative group">
                    <Building2 className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400 group-hover:text-blue-400 transition-colors" />
                    <select
                      value={institution}
                      onChange={(e) => setInstitution(e.target.value)}
                      className="w-full bg-slate-800/60 border border-slate-700 rounded-xl pl-12 pr-4 py-4 text-white transition-all duration-200 hover:border-blue-500/50 focus:border-blue-400 focus:outline-none input-glow font-medium"
                      required
                    >
                      <option value="">Select Institution</option>
                      {institutions.map((inst) => (
                        <option key={inst} value={inst}>{inst}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-blue-400 mb-3 tracking-wide uppercase">Student ID / Roll No *</label>
                  <div className="relative group">
                    <Hash className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400 group-hover:text-blue-400 transition-colors" />
                    <input
                      type="text"
                      value={teamLeaderStudentId}
                      onChange={(e) => setTeamLeaderStudentId(e.target.value)}
                      placeholder="Enter your ID"
                      className="w-full bg-slate-800/60 border border-slate-700 rounded-xl pl-12 pr-4 py-4 text-white placeholder-slate-500 transition-all duration-200 focus:outline-none input-glow hover:border-blue-500/50 focus:border-blue-400"
                      required
                    />
                  </div>
                </div>

                {institutionType === 'school' ? (
                  <div>
                    <label className="block text-sm font-semibold text-blue-400 mb-3 tracking-wide uppercase">Class *</label>
                    <div className="relative group">
                      <GraduationCap className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400 group-hover:text-blue-400 transition-colors" />
                      <select
                        value={grade}
                        onChange={(e) => setGrade(e.target.value)}
                        className="w-full bg-slate-800/60 border border-slate-700 rounded-xl pl-12 pr-4 py-4 text-white transition-all duration-200 hover:border-blue-500/50 focus:border-blue-400 focus:outline-none input-glow font-medium"
                        required
                      >
                        <option value="">Select Class</option>
                        {classes.map((cls) => (
                          <option key={cls} value={cls}>{cls}th</option>
                        ))}
                      </select>
                    </div>
                  </div>
                ) : (
                  <>
                    <div>
                      <label className="block text-sm font-semibold text-blue-400 mb-3 tracking-wide uppercase">Branch *</label>
                      <select
                        value={branch}
                        onChange={(e) => setBranch(e.target.value)}
                        className="w-full bg-slate-800/60 border border-slate-700 rounded-xl px-5 py-4 text-white transition-all duration-200 hover:border-blue-500/50 focus:border-blue-400 focus:outline-none input-glow font-medium"
                        required
                      >
                        <option value="">Select Branch</option>
                        {branches.map((br) => (
                          <option key={br} value={br}>{br.toUpperCase()}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-blue-400 mb-3 tracking-wide uppercase">Year *</label>
                      <div className="relative group">
                        <GraduationCap className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400 group-hover:text-blue-400 transition-colors" />
                        <select
                          value={grade}
                          onChange={(e) => setGrade(e.target.value)}
                          className="w-full bg-slate-800/60 border border-slate-700 rounded-xl pl-12 pr-4 py-4 text-white transition-all duration-200 hover:border-blue-500/50 focus:border-blue-400 focus:outline-none input-glow font-medium"
                          required
                        >
                          <option value="">Select Year</option>
                          {years.map((yr) => (
                            <option key={yr} value={yr}>{yr}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>

            {teamMembers.length > 0 && (
              <div className="glass-card rounded-3xl p-8 md:p-10 shadow-2xl border-t border-cyan-500/10">
                <div className="flex items-center space-x-3 mb-8">
                  <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-cyan-500/30">
                    <Users className="w-6 h-6 text-white" strokeWidth={2.5} />
                  </div>
                  <h2 className="text-3xl font-bold text-white tracking-tight">Team Members</h2>
                  <span className="ml-auto text-cyan-400 font-bold text-lg">{teamMembers.length} {teamMembers.length === 1 ? 'Member' : 'Members'}</span>
                </div>

                <div className="space-y-6">
                  {teamMembers.map((member, index) => (
                    <div key={index} className="bg-slate-800/40 rounded-2xl p-6 border border-slate-700/50 hover:border-cyan-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10">
                      <div className="flex items-center space-x-3 mb-5">
                        <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center font-bold text-white text-sm">
                          {index + 1}
                        </div>
                        <h3 className="text-lg font-bold text-cyan-400 tracking-wide">Member {index + 1}</h3>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-semibold text-slate-400 mb-2 uppercase tracking-wider">Name *</label>
                          <input
                            type="text"
                            value={member.name}
                            onChange={(e) => handleMemberChange(index, 'name', e.target.value)}
                            placeholder="Full name"
                            className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 transition-all duration-200 focus:outline-none focus:border-cyan-400 hover:border-slate-600"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-slate-400 mb-2 uppercase tracking-wider">Email *</label>
                          <input
                            type="email"
                            value={member.email}
                            onChange={(e) => handleMemberChange(index, 'email', e.target.value)}
                            placeholder="email@example.com"
                            className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 transition-all duration-200 focus:outline-none focus:border-cyan-400 hover:border-slate-600"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-slate-400 mb-2 uppercase tracking-wider">Mobile *</label>
                          <input
                            type="text"
                            value={member.mobile}
                            onChange={(e) => handleMemberChange(index, 'mobile', e.target.value)}
                            placeholder="Mobile number"
                            className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 transition-all duration-200 focus:outline-none focus:border-cyan-400 hover:border-slate-600"
                            required
                          />
                        </div>
                        {institutionType === 'school' ? (
                          <div>
                            <label className="block text-xs font-semibold text-slate-400 mb-2 uppercase tracking-wider">Class *</label>
                            <select
                              value={member.grade}
                              onChange={(e) => handleMemberChange(index, 'grade', e.target.value)}
                              className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white transition-all duration-200 focus:outline-none focus:border-cyan-400 hover:border-slate-600"
                              required
                            >
                              <option value="">Select Class</option>
                              {classes.map((cls) => (
                                <option key={cls} value={cls}>{cls}th</option>
                              ))}
                            </select>
                          </div>
                        ) : (
                          <>
                            <div>
                              <label className="block text-xs font-semibold text-slate-400 mb-2 uppercase tracking-wider">Branch *</label>
                              <select
                                value={member.branch}
                                onChange={(e) => handleMemberChange(index, 'branch', e.target.value)}
                                className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white transition-all duration-200 focus:outline-none focus:border-cyan-400 hover:border-slate-600"
                                required
                              >
                                <option value="">Select Branch</option>
                                {branches.map((br) => (
                                  <option key={br} value={br}>{br.toUpperCase()}</option>
                                ))}
                              </select>
                            </div>
                            <div>
                              <label className="block text-xs font-semibold text-slate-400 mb-2 uppercase tracking-wider">Year *</label>
                              <select
                                value={member.grade}
                                onChange={(e) => handleMemberChange(index, 'grade', e.target.value)}
                                className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white transition-all duration-200 focus:outline-none focus:border-cyan-400 hover:border-slate-600"
                                required
                              >
                                <option value="">Select Year</option>
                                {years.map((yr) => (
                                  <option key={yr} value={yr}>{yr}</option>
                                ))}
                              </select>
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="flex justify-center pt-8">
              <button
                type="submit"
                disabled={submitting}
                className="group relative px-16 py-5 bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-500 bg-size-200 text-white font-black text-xl rounded-2xl shadow-2xl transition-all duration-500 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none overflow-hidden animate-glow-pulse hover:shadow-cyan-500/50"
              >
                <span className="relative z-10 flex items-center space-x-3">
                  {submitting ? (
                    <>
                      <div className="w-6 h-6 border-3 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>PROCESSING...</span>
                    </>
                  ) : (
                    <>
                      <CheckCircle2 className="w-6 h-6" strokeWidth={3} />
                      <span>SUBMIT REGISTRATION</span>
                      <Zap className="w-6 h-6" strokeWidth={3} />
                    </>
                  )}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EventRegistration;

