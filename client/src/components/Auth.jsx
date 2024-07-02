// src/components/Auth.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Auth = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [phone, setPhone] = useState('');
  const [role, setRole] = useState('');
  const [childName, setChildName] = useState('');
  const [childAge, setChildAge] = useState('');
  const navigate = useNavigate();

  const toggleMode = () => {
    setIsSignUp((prevMode) => !prevMode);
    resetForm();
  };

  const resetForm = () => {
    setEmail('');
    setPassword('');
    setName('');
    setAge('');
    setPhone('');
    setRole('');
    setChildName('');
    setChildAge('');
  };

  const handleSignUp = async () => {
    try {
      const response = await fetch('/api/v1/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          age,
          isParent: role === 'parent',
          password,
        }),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        // Signup successful
        console.log('User signed up successfully:', data.message);
        alert( 'User signed up successfully:', data.message);
        // Optionally, you can handle the successful signup by navigating to another page or displaying a success message.
      } else {
        // Signup failed
        console.error('Signup failed:', data.message);
        alert('Signup failed:', data.message);
        // Handle error (e.g., display error message to the user)
      }
    } catch (error) {
      console.error('Error signing up:', error.message);
      // Handle network errors or other exceptions
    }
  };
  
  const handleLogin = async () => {
    try {
      const response = await fetch('/api/v1/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        // Login successful
        console.log('User logged in successfully:', data.message);
  
        // Save JWT token to local storage or session storage for future authenticated requests
        localStorage.setItem('token', data.token);
        
        // Optionally, you can handle the successful login by navigating to another page or updating the UI.
      } else {
        // Login failed
        console.error('Login failed:', data.message);
        // Handle error (e.g., display error message to the user)
      }
    } catch (error) {
      console.error('Error logging in:', error.message);
      // Handle network errors or other exceptions
    }
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (isSignUp) {
      handleSignUp();
    } else {
      handleLogin();
    }
  
    navigate('/home'); // Navigate after signup/login attempt
  };
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-md p-16 border border-purple-500 space-y-8 bg-white rounded-xl shadow-lg">
        <h2 className="flex justify-center items-center">{isSignUp ? 'Sign Up' : 'Login'}</h2>
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          {isSignUp && (
            <>
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                        className='p-2 w-64 bg-white border-2 rounded-xl  '
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Age"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  required
                          className='p-2 w-64 bg-white border-2 rounded-xl  '
                />
              </div>
              <div>
                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                          className='p-2 w-64 bg-white border-2 rounded-xl  '
                />
              </div>
            </>
          )}

          <div>
            <input
              type="email"
              placeholder="Anthing@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className='p-2 w-64 bg-white border-2 rounded-xl  '
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
                className='p-2 w-64 bg-white border-2 rounded-xl  '
            />
          </div>
          
          {isSignUp && (
            <div>
              <div  className="role-selector">
                <label>
                  <input
                    type="radio"
                    name="role"
                    value="adult"
                    checked={role === 'adult'}
                    
                    onChange={(e) => setRole(e.target.value)}
                 
                  />
                  <span className=' p-2 text-purple-600'>Adult</span>
                  <br />
                </label>
                <label>
                  <input
                    type="radio"
                    name="role"
                    value="parent"
                    checked={role === 'parent'}
                    onChange={(e) => setRole(e.target.value)}
                    className='bg-white'
                  />
                  <span className=' p-2 text-purple-600 '>Parent</span>
                </label>
              </div>
              {role === 'parent' && (
                <>
                  <div>
                    <input
                      type="text"
                      placeholder="Child Name"
                      value={childName}
                      onChange={(e) => setChildName(e.target.value)}
                      required
                                      className='p-2 w-64 my-4 bg-white border-2 rounded-xl  '
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Child Age"
                      value={childAge}
                      onChange={(e) => setChildAge(e.target.value)}
                      required
                                      className='p-2 w-64 bg-white border-2 rounded-xl  '
                    />
                  </div>
                </>
              )}
            </div>
          )}

          <button type="submit" className='w-64 bgp1 py-2 text-white rounded-xl'>
            {isSignUp ? 'Sign Up' : 'Login'}
          </button>
        </form>
        
        <div className="mt-4 text-center">
          <p>{isSignUp ? 'Already have an account? ' : "Don't have an account? "}</p>
          <button onClick={toggleMode} className='underline text-purple-700'>
            {isSignUp ? 'Login' : 'Sign Up'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Auth;
