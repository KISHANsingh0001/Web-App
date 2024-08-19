// // // // import React, { useState, useEffect } from 'react';
// // // // import 'tailwindcss/tailwind.css';

// // // // const AdminDashboard = () => {
// // // //   const [activeTab, setActiveTab] = useState('users');
// // // //   const [data, setData] = useState({ users: [], therapists: [] });
// // // //   const [name, setName] = useState('');
// // // //   const [email, setEmail] = useState('');
// // // //   const [password, setPassword] = useState('');
// // // //   const [selectedUser, setSelectedUser] = useState(null);

// // // //   useEffect(() => {
// // // //     fetchData();
// // // //   }, []);

// // // //   const fetchData = async () => {
// // // //     try {
// // // //       const response = await fetch('http://localhost:3000/api/admin/findThese');
// // // //       const result = await response.json();
// // // //       if (response.ok) {
// // // //         setData({
// // // //           users: result.userData || [],
// // // //           therapists: result.therapistsData || [],
// // // //         });
// // // //       } else {
// // // //         alert('Failed to fetch data: ' + result.message);
// // // //       }
// // // //     } catch (error) {
// // // //       console.error('Error fetching data:', error);
// // // //     }
// // // //   };

// // // //   const handleAddAdmin = async (e) => {
// // // //     e.preventDefault();
// // // //     try {
// // // //       const response = await fetch('http://localhost:3000/api/admin/addAdmin', {
// // // //         method: 'POST',
// // // //         headers: {
// // // //           'Content-Type': 'application/json',
// // // //         },
// // // //         body: JSON.stringify({ name, email, password }),
// // // //       });

// // // //       const data = await response.json();

// // // //       if (response.ok) {
// // // //         alert('Admin added successfully: ' + data.message);
// // // //         setName('');
// // // //         setEmail('');
// // // //         setPassword('');
// // // //       } else {
// // // //         alert('Adding admin failed: ' + data.message);
// // // //       }
// // // //     } catch (error) {
// // // //       console.error('Error adding admin:', error);
// // // //     }
// // // //   };

// // // //   const handleViewDetails = async (id) => {
// // // //     try {
// // // //       const response = await fetch(`http://localhost:3000/api/admin/user/${id}`);
// // // //       const result = await response.json();
// // // //       if (response.ok) {
// // // //         setSelectedUser(result.user);
// // // //       } else {
// // // //         alert('Failed to fetch user details: ' + result.message);
// // // //       }
// // // //     } catch (error) {
// // // //       console.error('Error fetching user details:', error);
// // // //     }
// // // //   };
// // // //   const renderTable = () => {
// // // //     let displayData = [];
// // // //     if (activeTab === 'users') {
// // // //       displayData = data.users;
// // // //     } else if (activeTab === 'therapists') {
// // // //       displayData = data.therapists;
// // // //     }

// // // //     return displayData.map((item) => (
// // // //       <div key={item._id} className="grid grid-cols-5 py-2 px-4 border-b">
// // // //         <span className="col-span-1">{item.name}</span>
// // // //         {activeTab === 'users' && <span className="col-span-1">{item.email}</span>}
// // // //         {activeTab === 'users' && <span className="col-span-1">{item.age || 'N/A'}</span>}
// // // //         <span className="col-span-1">{item.phone}</span>
// // // //         {activeTab === 'users' && <span className="col-span-1">{item.testsTaken || 0}</span>}
// // // //       </div>
// // // //     ));
// // // //   };

// // // //   return (
// // // //     <div className="container mx-auto p-4">
// // // //       <h2 className="text-2xl font-bold mb-4">Admin Dashboard</h2>
// // // //       <form onSubmit={handleAddAdmin} className="mb-4 flex flex-col gap-4">
// // // //         <input
// // // //           type="text"
// // // //           value={name}
// // // //           onChange={(e) => setName(e.target.value)}
// // // //           placeholder="Name"
// // // //           className="border p-2 rounded"
// // // //           required
// // // //         />
// // // //         <input
// // // //           type="email"
// // // //           value={email}
// // // //           onChange={(e) => setEmail(e.target.value)}
// // // //           placeholder="Email"
// // // //           className="border p-2 rounded"
// // // //           required
// // // //         />
// // // //         <input
// // // //           type="password"
// // // //           value={password}
// // // //           onChange={(e) => setPassword(e.target.value)}
// // // //           placeholder="Password"
// // // //           className="border p-2 rounded"
// // // //           required
// // // //         />
// // // //         <button type="submit" className="bg-blue-500 text-white p-2 rounded">Add Admin</button>
// // // //       </form>

// // // //       <div className="mb-4 flex justify-center">
// // // //         <button
// // // //           onClick={() => setActiveTab('users')}
// // // //           className={`py-2 px-4 ${activeTab === 'users' ? 'bg-blue-500 text-white' : 'bg-gray-200'} rounded-l`}
// // // //         >
// // // //           Users
// // // //         </button>
// // // //         <button
// // // //           onClick={() => setActiveTab('therapists')}
// // // //           className={`py-2 px-4 ${activeTab === 'therapists' ? 'bg-blue-500 text-white' : 'bg-gray-200'} rounded-r`}
// // // //         >
// // // //           Therapists
// // // //         </button>
// // // //       </div>

// // // //       <div>
// // // //         <h3 className="text-xl font-semibold mb-2">
// // // //           {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
// // // //         </h3>
// // // //         <div className="bg-gray-100 rounded-lg shadow-md overflow-hidden">
// // // //           <div className="grid grid-cols-5 bg-gray-200 py-2 px-4 font-bold">
// // // //             <span className="col-span-1">Name</span>
// // // //             {activeTab === 'users' && <span className="col-span-1">Email</span>}
// // // //             {activeTab === 'users' && <span className="col-span-1">Age</span>}
// // // //             <span className="col-span-1">Phone</span>
// // // //             {activeTab === 'users' && <span className="col-span-1">Tests Taken</span>}
// // // //           </div>
// // // //           {renderTable()}
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default AdminDashboard;
// // // import React, { useState, useEffect } from 'react';
// // // import 'tailwindcss/tailwind.css';
// // // import UserDetails from './UserDetails'; // Create this component to display user details

// // // const AdminDashboard = () => {
// // //   const [activeTab, setActiveTab] = useState('users');
// // //   const [data, setData] = useState({ users: [], therapists: [] });
// // //   const [name, setName] = useState('');
// // //   const [email, setEmail] = useState('');
// // //   const [password, setPassword] = useState('');
// // //   const [selectedUser, setSelectedUser] = useState(null);

// // //   useEffect(() => {
// // //     fetchData();
// // //   }, []);

// // //   const fetchData = async () => {
// // //     try {
// // //       const response = await fetch('http://localhost:3000/api/admin/findThese');
// // //       const result = await response.json();
// // //       if (response.ok) {
// // //         setData({
// // //           users: result.userData || [],
// // //           therapists: result.therapistsData || [],
// // //         });
// // //       } else {
// // //         alert('Failed to fetch data: ' + result.message);
// // //       }
// // //     } catch (error) {
// // //       console.error('Error fetching data:', error);
// // //     }
// // //   };

// // //   const handleAddAdmin = async (e) => {
// // //     e.preventDefault();
// // //     try {
// // //       const response = await fetch('http://localhost:3000/api/admin/addAdmin', {
// // //         method: 'POST',
// // //         headers: {
// // //           'Content-Type': 'application/json',
// // //         },
// // //         body: JSON.stringify({ name, email, password }),
// // //       });

// // //       const data = await response.json();

// // //       if (response.ok) {
// // //         alert('Admin added successfully: ' + data.message);
// // //         setName('');
// // //         setEmail('');
// // //         setPassword('');
// // //       } else {
// // //         alert('Adding admin failed: ' + data.message);
// // //       }
// // //     } catch (error) {
// // //       console.error('Error adding admin:', error);
// // //     }
// // //   };

// // //   const handleViewDetails = async (id) => {
// // //     try {
// // //       const response = await fetch(`http://localhost:3000/api/consultationdata/${id}`);
// // //       const result = await response.json();
// // //       if (response.ok) {
// // //         setSelectedUser(result.user);
// // //       } else {
// // //         alert('Failed to fetch user details: ' + result.message);
// // //       }
// // //     } catch (error) {
// // //       console.error('Error fetching user details:', error);
// // //     }
// // //   };

// // //   const renderTable = () => {
// // //     let displayData = [];
// // //     if (activeTab === 'users') {
// // //       displayData = data.users;
// // //     } else if (activeTab === 'therapists') {
// // //       displayData = data.therapists;
// // //     }

// // //     return displayData.map((item) => (
// // //       <div key={item._id} className="grid grid-cols-6 py-2 px-4 border-b">
// // //         <span className="col-span-1">{item.name}</span>
// // //         {activeTab === 'users' && <span className="col-span-1">{item.email}</span>}
// // //         {activeTab === 'users' && <span className="col-span-1">{item.age || 'N/A'}</span>}
// // //         <span className="col-span-1">{item.phone}</span>
// // //         {activeTab === 'users' && <span className="col-span-1">{item.testsTaken || 0}</span>}
// // //         <button onClick={() => handleViewDetails(item._id)} className="col-span-1 bg-blue-500 text-white py-1 px-2 rounded">
// // //           View
// // //         </button>
// // //       </div>
// // //     ));
// // //   };

// // //   return (
// // //     <div className="container mx-auto p-4">
// // //       <h2 className="text-2xl font-bold mb-4">Admin Dashboard</h2>
// // //       <form onSubmit={handleAddAdmin} className="mb-4 flex flex-col gap-4">
// // //         <input
// // //           type="text"
// // //           value={name}
// // //           onChange={(e) => setName(e.target.value)}
// // //           placeholder="Name"
// // //           className="border p-2 rounded"
// // //           required
// // //         />
// // //         <input
// // //           type="email"
// // //           value={email}
// // //           onChange={(e) => setEmail(e.target.value)}
// // //           placeholder="Email"
// // //           className="border p-2 rounded"
// // //           required
// // //         />
// // //         <input
// // //           type="password"
// // //           value={password}
// // //           onChange={(e) => setPassword(e.target.value)}
// // //           placeholder="Password"
// // //           className="border p-2 rounded"
// // //           required
// // //         />
// // //         <button type="submit" className="bg-blue-500 text-white p-2 rounded">Add Admin</button>
// // //       </form>

// // //       <div className="mb-4 flex justify-center">
// // //         <button
// // //           onClick={() => setActiveTab('users')}
// // //           className={`py-2 px-4 ${activeTab === 'users' ? 'bg-blue-500 text-white' : 'bg-gray-200'} rounded-l`}
// // //         >
// // //           Users
// // //         </button>
// // //         <button
// // //           onClick={() => setActiveTab('therapists')}
// // //           className={`py-2 px-4 ${activeTab === 'therapists' ? 'bg-blue-500 text-white' : 'bg-gray-200'} rounded-r`}
// // //         >
// // //           Therapists
// // //         </button>
// // //       </div>

// // //       <div>
// // //         <h3 className="text-xl font-semibold mb-2">
// // //           {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
// // //         </h3>
// // //         <div className="bg-gray-100 rounded-lg shadow-md overflow-hidden">
// // //           <div className="grid grid-cols-6 bg-gray-200 py-2 px-4 font-bold">
// // //             <span className="col-span-1">Name</span>
// // //             {activeTab === 'users' && <span className="col-span-1">Email</span>}
// // //             {activeTab === 'users' && <span className="col-span-1">Age</span>}
// // //             <span className="col-span-1">Phone</span>
// // //             {activeTab === 'users' && <span className="col-span-1">Tests Taken</span>}
// // //             <span className="col-span-1">Actions</span>
// // //           </div>
// // //           {renderTable()}
// // //         </div>
// // //       </div>

// // //       {selectedUser && (
// // //         <UserDetails user={selectedUser} onClose={() => setSelectedUser(null)} />
// // //       )}
// // //     </div>
// // //   );
// // // };

// // // export default AdminDashboard;
// // import React, { useState, useEffect } from 'react';
// // import 'tailwindcss/tailwind.css';
// // import UserDetails from './UserDetails';
// // import toast from 'react-hot-toast';
// // import { FaEye } from 'react-icons/fa';

// // const AdminDashboard = () => {
// //   const [activeTab, setActiveTab] = useState('users');
// //   const [data, setData] = useState({ users: [], therapists: [] });
// //   const [selectedUser, setSelectedUser] = useState(null);
// //   const [name, setName] = useState('');
// //   const [email, setEmail] = useState('');
// //   const [password, setPassword] = useState('');

// //   useEffect(() => {
// //     fetchData();
// //   }, []);

// //   const fetchData = async () => {
// //     try {
// //       const response = await fetch('http://localhost:3000/api/admin/findThese');
// //       const result = await response.json();
// //       if (response.ok) {
// //         setData({
// //           users: result.userData || [],
// //           therapists: result.therapistsData || [],
// //         });
// //       } else {
// //         alert('Failed to fetch data: ' + result.message);
// //       }
// //     } catch (error) {
// //       console.error('Error fetching data:', error);
// //     }
// //   };

// //   const fetchUserDetails = async (email) => {
// //     try {
// //       const response = await fetch(`http://localhost:3000/api/consultationdata?email=${encodeURIComponent(email)}`);
// //       if (response.ok) {
// //         const result = await response.json();
// //         setSelectedUser({
// //           email: result.email,
// //           date: result.date,
// //           timeSlot: result.timeSlot,
// //           mode: result.mode,
// //           result: result.result
// //         });
// //         console.log(result);
// //       } else {
// //         const errorResult = await response.json();
// //         console.log('Failed to fetch user details: ' + errorResult.message);
// //         toast.error("Failed to fetch user details");
// //       }
// //     } catch (error) {
// //       console.error('Error fetching user details:', error);
// //     }
// //   };

// //   const handleAddAdmin = async (e) => {
// //     e.preventDefault();
// //     try {
// //       const response = await fetch('http://localhost:3000/api/admin/addAdmin', {
// //         method: 'POST',
// //         headers: {
// //           'Content-Type': 'application/json',
// //         },
// //         body: JSON.stringify({ name, email, password }),
// //       });

// //       const data = await response.json();

// //       if (response.ok) {
// //         alert('Admin added successfully: ' + data.message);
// //         setName('');
// //         setEmail('');
// //         setPassword('');
// //       } else {
// //         alert('Adding admin failed: ' + data.message);
// //       }
// //     } catch (error) {
// //       console.error('Error adding admin:', error);
// //     }
// //   };

// //   const renderTable = () => {
// //     let displayData = [];
// //     if (activeTab === 'users') {
// //       displayData = data.users;
// //     } else if (activeTab === 'therapists') {
// //       displayData = data.therapists;
// //     }

// //     return displayData.map((item) => (
// //       <div key={item._id} className="grid grid-cols-6 py-2 px-4 border-b">
// //         <span className="col-span-1">{item.name}</span>
// //         {activeTab === 'users' && <span className="col-span-1">{item.email}</span>}
// //         {activeTab === 'users' && <span className="col-span-1">{item.age || 'N/A'}</span>}
// //         <span className="col-span-1">{item.phone}</span>
// //         {activeTab === 'users' && <span className="col-span-1">{item.testsTaken || 0}</span>}
// //         <div className="col-span-1 flex justify-center items-center">
// //           <button
// //             onClick={() => fetchUserDetails(item.email)}
// //             className="text-black  py-1 px-3 rounded flex items-center space-x-2"
// //           >
// //             <FaEye />
            
// //           </button>
// //         </div>
// //       </div>
// //     ));
// //   };

// //   return (
// //     <div className="container mx-auto p-4">
// //       <h2 className="text-2xl font-bold mb-4">Admin Dashboard</h2>
// //       <form onSubmit={handleAddAdmin} className="mb-4 flex flex-col gap-4">
// //         <input
// //           type="text"
// //           value={name}
// //           onChange={(e) => setName(e.target.value)}
// //           placeholder="Name"
// //           className="border p-2 rounded"
// //           required
// //         />
// //         <input
// //           type="email"
// //           value={email}
// //           onChange={(e) => setEmail(e.target.value)}
// //           placeholder="Email"
// //           className="border p-2 rounded"
// //           required
// //         />
// //         <input
// //           type="password"
// //           value={password}
// //           onChange={(e) => setPassword(e.target.value)}
// //           placeholder="Password"
// //           className="border p-2 rounded"
// //           required
// //         />
// //         <button type="submit" className="bg-blue-500 text-white p-2 rounded">Add Admin</button>
// //       </form>

// //       <div className="mb-4 flex justify-center">
// //         <button
// //           onClick={() => setActiveTab('users')}
// //           className={`py-2 px-4 ${activeTab === 'users' ? 'bg-blue-500 text-white' : 'bg-gray-200'} rounded-l`}
// //         >
// //           Users
// //         </button>
// //         <button
// //           onClick={() => setActiveTab('therapists')}
// //           className={`py-2 px-4 ${activeTab === 'therapists' ? 'bg-blue-500 text-white' : 'bg-gray-200'} rounded-r`}
// //         >
// //           Therapists
// //         </button>
// //       </div>

// //       <div>
// //         <h3 className="text-xl font-semibold mb-2">
// //           {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
// //         </h3>
// //         <div className="bg-gray-100 rounded-lg shadow-md overflow-hidden">
// //           <div className="grid grid-cols-6 bg-gray-200 py-2 px-4 font-bold">
// //             <span className="col-span-1">Name</span>
// //             {activeTab === 'users' && <span className="col-span-1">Email</span>}
// //             {activeTab === 'users' && <span className="col-span-1">Age</span>}
// //             <span className="col-span-1">Phone</span>
// //             {activeTab === 'users' && <span className="col-span-1">Tests Taken</span>}
// //             <span className="col-span-1"></span>
// //           </div>
// //           {renderTable()}
// //         </div>
// //       </div>

// //       {selectedUser && <UserDetails user={selectedUser} onClose={() => setSelectedUser(null)} />}
// //     </div>
// //   );
// // };

// // export default AdminDashboard;
// import React, { useState, useEffect } from 'react';
// import 'tailwindcss/tailwind.css';
// import UserDetails from './UserDetails';
// import toast from 'react-hot-toast';
// import { FaEye, FaCheck } from 'react-icons/fa';

// const AdminDashboard = () => {
//   const [activeTab, setActiveTab] = useState('users');
//   const [data, setData] = useState({ users: [], therapists: [] });
//   const [selectedUser, setSelectedUser] = useState(null);
//   const [savedDiagnoses, setSavedDiagnoses] = useState({});
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   useEffect(() => {
//     fetchData();
//     const savedData = JSON.parse(localStorage.getItem('savedDiagnoses')) || {};
//     setSavedDiagnoses(savedData);
//   }, []);

//   const fetchData = async () => {
//     try {
//       const response = await fetch('http://localhost:3000/api/admin/findThese');
//       const result = await response.json();
//       if (response.ok) {
//         setData({
//           users: result.userData || [],
//           therapists: result.therapistsData || [],
//         });
//       } else {
//         alert('Failed to fetch data: ' + result.message);
//       }
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

//   const fetchUserDetails = async (email) => {
//     try {
//       const response = await fetch(`http://localhost:3000/api/consultationdata?email=${encodeURIComponent(email)}`);
//       if (response.ok) {
//         const result = await response.json();
//         setSelectedUser({
//           email: result.email,
//           date: result.date,
//           timeSlot: result.timeSlot,
//           mode: result.mode,
//           result: result.result,
//         });
//         console.log(result);
//       } else {
//         const errorResult = await response.json();
//         console.log('Failed to fetch user details: ' + errorResult.message);
//         toast.error("Failed to fetch user details");
//       }
//     } catch (error) {
//       console.error('Error fetching user details:', error);
//     }
//   };

//   const handleAddAdmin = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch('http://localhost:3000/api/admin/addAdmin', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ name, email, password }),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         alert('Admin added successfully: ' + data.message);
//         setName('');
//         setEmail('');
//         setPassword('');
//       } else {
//         alert('Adding admin failed: ' + data.message);
//       }
//     } catch (error) {
//       console.error('Error adding admin:', error);
//     }
//   };

//   const saveDiagnosis = async (email, diagnosis, selectedOption) => {
//     try {
//       const response = await fetch('http://localhost:3000/api/saveDiagnosis', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ email, diagnosis, selectedOption }),
//       });
  
//       if (response.ok) {
//         const result = await response.json();
//         setSavedDiagnoses(prev => ({
//           ...prev,
//           [email]: { diagnosis, selectedOption },
//         }));
//         localStorage.setItem('savedDiagnoses', JSON.stringify({
//           ...savedDiagnoses,
//           [email]: { diagnosis, selectedOption },
//         }));
//         toast.success('Diagnosis saved successfully');
//       } else {
//         const errorResult = await response.json();
//         toast.error('Failed to save diagnosis: ' + errorResult.message);
//       }
//     } catch (error) {
//       console.error('Error saving diagnosis:', error);
//     }
//   };
  

//   const renderTable = () => {
//     let displayData = [];
//     if (activeTab === 'users') {
//       displayData = data.users;
//     } else if (activeTab === 'therapists') {
//       displayData = data.therapists;
//     }

//     return displayData.map((item) => (
//       <div key={item._id} className="grid grid-cols-6 py-2 px-4 border-b">
//         <span className="col-span-1">{item.name}</span>
//         {activeTab === 'users' && <span className="col-span-1">{item.email}</span>}
//         {activeTab === 'users' && <span className="col-span-1">{item.age || 'N/A'}</span>}
//         <span className="col-span-1">{item.phone}</span>
//         {activeTab === 'users' && <span className="col-span-1">{item.testsTaken || 0}</span>}
//         <div className="col-span-1 flex justify-center items-center">
//           <button
//             onClick={() => fetchUserDetails(item.email)}
//             className="text-black py-1 px-3 rounded flex items-center space-x-2"
//           >
//             <FaEye />
//             {savedDiagnoses[item.email] && <FaCheck className="text-green-500 ml-2" />}
//           </button>
//         </div>
//       </div>
//     ));
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <h2 className="text-2xl font-bold mb-4">Admin Dashboard</h2>
//       <form onSubmit={handleAddAdmin} className="mb-4 flex flex-col gap-4">
//         <input
//           type="text"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           placeholder="Name"
//           className="border p-2 rounded"
//           required
//         />
//         <input
//           type="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           placeholder="Email"
//           className="border p-2 rounded"
//           required
//         />
//         <input
//           type="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           placeholder="Password"
//           className="border p-2 rounded"
//           required
//         />
//         <button type="submit" className="bg-blue-500 text-white p-2 rounded">Add Admin</button>
//       </form>

//       <div className="mb-4 flex justify-center">
//         <button
//           onClick={() => setActiveTab('users')}
//           className={`py-2 px-4 ${activeTab === 'users' ? 'bg-blue-500 text-white' : 'bg-gray-200'} rounded-l`}
//         >
//           Users
//         </button>
//         <button
//           onClick={() => setActiveTab('therapists')}
//           className={`py-2 px-4 ${activeTab === 'therapists' ? 'bg-blue-500 text-white' : 'bg-gray-200'} rounded-r`}
//         >
//           Therapists
//         </button>
//       </div>

//       <div>
//         <h3 className="text-xl font-semibold mb-2">
//           {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
//         </h3>
//         <div className="bg-gray-100 rounded-lg shadow-md overflow-hidden">
//           <div className="grid grid-cols-6 bg-gray-200 py-2 px-4 font-bold">
//             <span className="col-span-1">Name</span>
//             {activeTab === 'users' && <span className="col-span-1">Email</span>}
//             {activeTab === 'users' && <span className="col-span-1">Age</span>}
//             <span className="col-span-1">Phone</span>
//             {activeTab === 'users' && <span className="col-span-1">Tests Taken</span>}
//             <span className="col-span-1"></span>
//           </div>
//           {renderTable()}
//         </div>
//       </div>

//       {selectedUser && (
//         <UserDetails
//           user={selectedUser}
//           onClose={() => setSelectedUser(null)}
//           saveDiagnosis={saveDiagnosis}
//         />
//       )}
//     </div>
//   );
// };

// export default AdminDashboard;


import React, { useState, useEffect } from 'react';
import 'tailwindcss/tailwind.css';
import UserDetails from './UserDetails';
import toast from 'react-hot-toast';
import { FaEye, FaCheck } from 'react-icons/fa';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('users');
  const [data, setData] = useState({ users: [], therapists: [] });
  const [selectedUser, setSelectedUser] = useState(null);
  const [savedDiagnoses, setSavedDiagnoses] = useState({});
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    fetchData();
    const savedData = JSON.parse(localStorage.getItem('savedDiagnoses')) || {};
    setSavedDiagnoses(savedData);
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/admin/findThese');
      const result = await response.json();
      if (response.ok) {
        setData({
          users: result.userData || [],
          therapists: result.therapistsData || [],
        });
      } else {
        alert('Failed to fetch data: ' + result.message);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const fetchUserDetails = async (email) => {
    try {
      const response = await fetch(`http://localhost:3000/api/consultationdata?email=${encodeURIComponent(email)}`);
      if (response.ok) {
        const result = await response.json();
        setSelectedUser({
          email: result.email,
          date: result.date,
          timeSlot: result.timeSlot,
          mode: result.mode,
          result: result.result,
        });
        console.log(result);
      } else {
        const errorResult = await response.json();
        console.log('Failed to fetch user details: ' + errorResult.message);
        toast.error("Failed to fetch user details");
      }
    } catch (error) {
      console.error('Error fetching user details:', error);
    }
  };

  const handleAddAdmin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/api/admin/addAdmin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        alert('Admin added successfully: ' + data.message);
        setName('');
        setEmail('');
        setPassword('');
      } else {
        alert('Adding admin failed: ' + data.message);
      }
    } catch (error) {
      console.error('Error adding admin:', error);
    }
  };

  const saveDiagnosis = async (email, diagnosis, selectedOption) => {
    try {
      const response = await fetch('http://localhost:3000/api/saveDiagnosis', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, diagnosis, selectedOption }),
      });

      if (response.ok) {
        const result = await response.json();
        setSavedDiagnoses(prev => ({
          ...prev,
          [email]: { diagnosis, selectedOption },
        }));
        localStorage.setItem('savedDiagnoses', JSON.stringify({
          ...savedDiagnoses,
          [email]: { diagnosis, selectedOption },
        }));
        toast.success('Diagnosis saved successfully');
      } else {
        const errorResult = await response.json();
        toast.error('Failed to save diagnosis: ' + errorResult.message);
      }
    } catch (error) {
      console.error('Error saving diagnosis:', error);
    }
  };

  const renderTable = () => {
    let displayData = [];
    if (activeTab === 'users') {
      displayData = data.users;
    } else if (activeTab === 'therapists') {
      displayData = data.therapists;
    }

    return displayData.map((item) => (
      <div key={item._id} className="grid grid-cols-6 py-2 px-4 border-b">
        <span className="col-span-1">{item.name}</span>
        {activeTab === 'users' && <span className="col-span-1">{item.email}</span>}
        {activeTab === 'users' && <span className="col-span-1">{item.age || 'N/A'}</span>}
        <span className="col-span-1">{item.phone}</span>
        {activeTab === 'users' && <span className="col-span-1">{item.testsTaken || 0}</span>}
        <div className="col-span-1 flex justify-center items-center">
          <button
            onClick={() => fetchUserDetails(item.email)}
            className="text-black py-1 px-3 rounded flex items-center space-x-2"
          >
            <FaEye />
            {savedDiagnoses[item.email] && <FaCheck className="text-green-500 ml-2" />}
          </button>
        </div>
      </div>
    ));
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Admin Dashboard</h2>
      <form onSubmit={handleAddAdmin} className="mb-4 flex flex-col gap-4">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          className="border p-2 rounded"
          required
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="border p-2 rounded"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="border p-2 rounded"
          required
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">Add Admin</button>
      </form>

      <div className="mb-4 flex justify-center">
        <button
          onClick={() => setActiveTab('users')}
          className={`py-2 px-4 ${activeTab === 'users' ? 'bg-blue-500 text-white' : 'bg-gray-200'} rounded-l`}
        >
          Users
        </button>
        <button
          onClick={() => setActiveTab('therapists')}
          className={`py-2 px-4 ${activeTab === 'therapists' ? 'bg-blue-500 text-white' : 'bg-gray-200'} rounded-r`}
        >
          Therapists
        </button>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-2">
          {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
        </h3>
        <div className="bg-gray-100 rounded-lg shadow-md overflow-hidden">
          <div className="grid grid-cols-6 bg-gray-200 py-2 px-4 font-bold">
            <span className="col-span-1">Name</span>
            {activeTab === 'users' && <span className="col-span-1">Email</span>}
            {activeTab === 'users' && <span className="col-span-1">Age</span>}
            <span className="col-span-1">Phone</span>
            {activeTab === 'users' && <span className="col-span-1">Tests Taken</span>}
            <span className="col-span-1"></span>
          </div>
          {renderTable()}
        </div>
      </div>

      {selectedUser && (
        <UserDetails
          user={selectedUser}
          onClose={() => setSelectedUser(null)}
          saveDiagnosis={saveDiagnosis}
        />
      )}
    </div>
  );
};

export default AdminDashboard;
