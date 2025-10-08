

// new
// import React, { useState, useEffect } from 'react';
// import { useNavigate, Link } from 'react-router-dom';
// import axios from 'axios';

// const Dashboard = () => {
//   const [user, setUser] = useState(null);
//   const [registrations, setRegistrations] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchProfileAndRegistrations = async () => {
//       const userInfo = JSON.parse(localStorage.getItem('userInfo'));
//       if (!userInfo) {
//         navigate('/login');
//         return;
//       }

//       try {
//         const config = {
//           headers: {
//             Authorization: `Bearer ${userInfo.token}`,
//           },
//         };
//         // Fetch user profile
//         const profileRes = await axios.get('https://crossroads-2025.onrender.com/api/auth/profile', config);
//         setUser(profileRes.data);

//         // Fetch user registrations
//         const registrationsRes = await axios.get('https://crossroads-2025.onrender.com/api/events/my-registrations', config);
//         setRegistrations(registrationsRes.data);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//         localStorage.removeItem('userInfo');
//         navigate('/login');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProfileAndRegistrations();
//   }, [navigate]);

//   const handleLogout = () => {
//     localStorage.removeItem('userInfo');
//     navigate('/login');
//   };

//   const getNiceEventName = (slug) => {
//     return slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
//   };

//   if (loading) return <div>Loading...</div>;

//   return (
//     <div style={{ padding: '20px', maxWidth: '800px', margin: 'auto' }}>
//       <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
//         <button onClick={handleLogout} style={{ padding: '8px 16px', background: '#dc3545', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
//           Logout
//         </button>
//       </div>
//       <h2>Dashboard</h2>
//       {user && (
//         <div style={{ marginBottom: '20px' }}>
//           <h3>User Profile</h3>
//           <p><strong>Name:</strong> {user.name}</p>
//           <p><strong>Email:</strong> {user.email}</p>
//           <p><strong>Mobile:</strong> {user.mobile}</p>
//         </div>
//       )}
//       <h3>Registered Events</h3>
//       {registrations.length > 0 ? (
//         <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '10px' }}>
//           <thead>
//             <tr style={{ background: '#f2f2f2' }}>
//               <th style={{ border: '1px solid #ddd', padding: '8px' }}>Event Name</th>
//               <th style={{ border: '1px solid #ddd', padding: '8px' }}>Team Name</th>
//               <th style={{ border: '1px solid #ddd', padding: '8px' }}>Team Size</th>
//               <th style={{ border: '1px solid #ddd', padding: '8px' }}>Institution</th>
//             </tr>
//           </thead>
//           <tbody>
//             {registrations.map((reg) => (
//               <tr key={reg._id}>
//                 <td style={{ border: '1px solid #ddd', padding: '8px' }}>{getNiceEventName(reg.eventName)}</td>
//                 <td style={{ border: '1px solid #ddd', padding: '8px' }}>{reg.teamName}</td>
//                 <td style={{ border: '1px solid #ddd', padding: '8px' }}>{reg.teamSize}</td>
//                 <td style={{ border: '1px solid #ddd', padding: '8px' }}>{reg.institution}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       ) : (
//         <div>
//           <p>No events registered yet.</p>
//           <Link to="/event-registration" style={{ color: '#007bff', textDecoration: 'none' }}>
//             Register for an event
//           </Link>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Dashboard;


// new styled
import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { LogOut, User, Mail, Phone, Calendar, Users, Building2 } from 'lucide-react';

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [registrations, setRegistrations] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfileAndRegistrations = async () => {
      const userInfo = JSON.parse(localStorage.getItem('userInfo'));
      if (!userInfo) {
        navigate('/login');
        return;
      }

      try {
        const config = {
          headers: {
            Authorization: `Bearer ${userInfo.token}`,
          },
        };
        // Fetch user profile
        const profileRes = await axios.get('https://crossroads-2025.onrender.com/api/auth/profile', config);
        setUser(profileRes.data);

        // Fetch user registrations
        const registrationsRes = await axios.get('https://crossroads-2025.onrender.com/api/events/my-registrations', config);
        setRegistrations(registrationsRes.data);
      } catch (error) {
        console.error('Error fetching data:', error);
        localStorage.removeItem('userInfo');
        navigate('/login');
      } finally {
        setLoading(false);
      }
    };

    fetchProfileAndRegistrations();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('userInfo');
    navigate('/login');
  };

  const getNiceEventName = (slug) => {
    return slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-blue-600 border-r-transparent"></div>
          <p className="mt-4 text-slate-600 font-medium">Loading your dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-slate-800">Dashboard</h1>
            <p className="text-slate-600 mt-1">Welcome back! Here's your event overview</p>
          </div>
          <button 
            onClick={handleLogout}
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white font-medium rounded-lg hover:from-red-600 hover:to-red-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            <LogOut size={18} />
            Logout
          </button>
        </div>

        {/* User Profile Card */}
        {user && (
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border border-slate-200 hover:shadow-2xl transition-shadow duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl">
                <User size={24} className="text-white" />
              </div>
              <h2 className="text-2xl font-bold text-slate-800">User Profile</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl border border-slate-200 hover:border-blue-300 transition-colors duration-200">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <User size={20} className="text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-medium">Name</p>
                  <p className="text-slate-800 font-semibold mt-1">{user.name}</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl border border-slate-200 hover:border-blue-300 transition-colors duration-200">
                <div className="p-2 bg-green-100 rounded-lg">
                  <Mail size={20} className="text-green-600" />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-medium">Email</p>
                  <p className="text-slate-800 font-semibold mt-1 break-all">{user.email}</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl border border-slate-200 hover:border-blue-300 transition-colors duration-200">
                <div className="p-2 bg-orange-100 rounded-lg">
                  <Phone size={20} className="text-orange-600" />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-medium">Mobile</p>
                  <p className="text-slate-800 font-semibold mt-1">{user.mobile}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Registered Events Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-slate-200">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-gradient-to-br from-green-500 to-green-600 rounded-xl">
              <Calendar size={24} className="text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-800">Registered Events</h2>
              <p className="text-slate-600 text-sm mt-1">
                {registrations.length > 0 ? `You're registered for ${registrations.length} event${registrations.length > 1 ? 's' : ''}` : 'No registrations yet'}
              </p>
            </div>
          </div>

          {registrations.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-slate-200">
                    <th className="text-left py-4 px-4 text-sm font-semibold text-slate-700 uppercase tracking-wider">
                      <div className="flex items-center gap-2">
                        <Calendar size={16} className="text-slate-500" />
                        Event Name
                      </div>
                    </th>
                    <th className="text-left py-4 px-4 text-sm font-semibold text-slate-700 uppercase tracking-wider">
                      <div className="flex items-center gap-2">
                        <Users size={16} className="text-slate-500" />
                        Team Name
                      </div>
                    </th>
                    <th className="text-left py-4 px-4 text-sm font-semibold text-slate-700 uppercase tracking-wider">Team Size</th>
                    <th className="text-left py-4 px-4 text-sm font-semibold text-slate-700 uppercase tracking-wider">
                      <div className="flex items-center gap-2">
                        <Building2 size={16} className="text-slate-500" />
                        Institution
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {registrations.map((reg, index) => (
                    <tr 
                      key={reg._id}
                      className="border-b border-slate-100 hover:bg-slate-50 transition-colors duration-150"
                    >
                      <td className="py-4 px-4">
                        <span className="font-semibold text-slate-800">{getNiceEventName(reg.eventName)}</span>
                      </td>
                      <td className="py-4 px-4">
                        <span className="text-slate-700">{reg.teamName}</span>
                      </td>
                      <td className="py-4 px-4">
                        <span className="inline-flex items-center justify-center px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                          {reg.teamSize}
                        </span>
                      </td>
                      <td className="py-4 px-4">
                        <span className="text-slate-700">{reg.institution}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="inline-flex p-4 bg-slate-100 rounded-full mb-4">
                <Calendar size={48} className="text-slate-400" />
              </div>
              <p className="text-slate-600 text-lg mb-4">No events registered yet.</p>
              <Link 
                to="/event-registration"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                <Calendar size={18} />
                Register for an event
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
