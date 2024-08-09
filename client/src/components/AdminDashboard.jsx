import React, { useState, useEffect } from 'react';
import 'tailwindcss/tailwind.css';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('users');
  const [data, setData] = useState({ users: [], therapists: [] });
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    fetchData();
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

  const renderTable = () => {
    let displayData = [];
    if (activeTab === 'users') {
      displayData = data.users;
    } else if (activeTab === 'therapists') {
      displayData = data.therapists;
    }

    return displayData.map((item) => (
      <div key={item._id} className="grid grid-cols-5 py-2 px-4 border-b">
        <span className="col-span-1">{item.name}</span>
        {activeTab === 'users' && <span className="col-span-1">{item.email}</span>}
        {activeTab === 'users' && <span className="col-span-1">{item.age || 'N/A'}</span>}
        <span className="col-span-1">{item.phone}</span>
        {activeTab === 'users' && <span className="col-span-1">{item.testsTaken || 0}</span>}
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
          <div className="grid grid-cols-5 bg-gray-200 py-2 px-4 font-bold">
            <span className="col-span-1">Name</span>
            {activeTab === 'users' && <span className="col-span-1">Email</span>}
            {activeTab === 'users' && <span className="col-span-1">Age</span>}
            <span className="col-span-1">Phone</span>
            {activeTab === 'users' && <span className="col-span-1">Tests Taken</span>}
          </div>
          {renderTable()}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
