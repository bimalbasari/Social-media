import React, { useState } from 'react';
import axios from 'axios';

const Login = ({setAccount}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate email format using regex pattern
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setError('Invalid email format');
      return;
    }

    // Validate password format using regex pattern
    const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
    if (!passwordPattern.test(password)) {
      setError(
        `Invalid  password format `
      );
      return;
    }
    // Perform login logic here
    try {
      const user = await axios.post('http://localhost:3000/api/auth/login', {
        email,
        password
      });
      alert(user.data.token)
      console.log(user.data)
      // Redirect to the login page after successful signup
      // Replace '/login' with your desired login route
      // window.location.href = '/login';
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-md p-8 w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Login </h2>
        {error && <div className="text-red-500 mb-4">{error}</div>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-2" htmlFor="email">
              Email:
            </label>
            <input
              type="email"
              id="email"
              className="border border-gray-300 rounded-md px-3 py-2 w-full"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2" htmlFor="password">
              Password:
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                className="border border-gray-300 rounded-md px-3 py-2 w-full"
                value={password}
                onChange={handlePasswordChange}
                required
              />
              <button
                type="button"
                className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500 focus:outline-none"
                onClick={handleTogglePassword}
              >
                {showPassword ? 'Hide' : 'Show'}
              </button>
            </div>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white rounded-md px-4 py-2 w-full hover:bg-blue-600"
          >
            Login
          </button>
        </form>
        <button  onClick={()=>setAccount(false)}
            type="button"
            className="bg-white text-blue rounded-md px-4 py-2 w-full"
          >
          New user? Create an account
          </button>
      </div>
    </div>
  );
};

export default Login;
