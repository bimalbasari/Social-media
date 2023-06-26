import React, { useState } from 'react';
import axios from 'axios';

const Signup = ({ setAccount }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [picture, setPicture] = useState("");
  const [previewURL, setPreviewURL] = useState('');

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };
  const handlePictureChange = (e) => {
    let selectedPicture = e.target.files[0]
    setPicture(selectedPicture);

    if (selectedPicture) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewURL(reader.result);
      };
      reader.readAsDataURL(selectedPicture);
    }


  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMobileChange = (e) => {
    setMobile(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    // Validate email format using regex pattern
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setError('Invalid email format');
      return;
    }

    // Validate mobile format using regex pattern
    const mobilePattern = /^\d{10}$/;
    if (!mobilePattern.test(mobile)) {
      setError('Invalid mobile number');
      return;
    }

    // Validate password format using regex pattern
    const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
    if (!passwordPattern.test(password)) {
      setError(
        `Password must contain at least 8 characters,
        including one uppercase letter,
        one lowercase letter, one number, 
        and one special character`
      );
      return;
    }

    // Check if password and confirm password match
    if (password !== confirmPassword) {
      setError('Password and confirm password do not match');
      return;
    }
    const formData = new FormData();
    formData.append('firstName', firstName);
    formData.append('lastName', lastName);
    formData.append('picture', picture);
    formData.append('email', email);
    formData.append('mobile', mobile);
    formData.append('password', password);

    try {
     

      await axios.post('http://localhost:3000/api/user/signup', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      // Redirect to the login page after successful signup
      // Replace '/login' with your desired login route
      // window.location.href = '/login';
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  return (
    <div className="flex justify-center items-center p-8  bg-gray-100">
      < div className="bg-white shadow-md rounded-md p-8 w-96" >
        <h2 className="text-2xl font-bold mb-6 text-center">Signup</h2>
        {error && <div className="text-red-500 mb-4">{error}</div>}
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block mb-2" htmlFor="firstName">
                First Name:
              </label>
              <input
                type="text"
                id="firstName"
                className="border border-gray-300 rounded-md px-3 py-2 w-full"
                value={firstName}
                onChange={handleFirstNameChange}
                required
              />
            </div>
            <div>
              <label className="block mb-2" htmlFor="lastName">
                Last Name:
              </label>
              <input
                type="text"
                id="lastName"
                className="border border-gray-300 rounded-md px-3 py-2 w-full"
                value={lastName}
                onChange={handleLastNameChange}
                required
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block mb-2" htmlFor="picture">
              Picture:
            </label>
            <input
              type="file"
              id="picture"
              className="border border-gray-300 rounded-md px-3 py-2 w-full"
              onChange={handlePictureChange}
              required
            />
            {picture && (
              <img
                src={previewURL}
                alt="User's Picture"
                className="mt-2 m-auto w-32 h-32 object-contain"
              />
            )}
          </div>

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
            <label className="block mb-2" htmlFor="mobile">
              Mobile Number:
            </label>
            <input
              type="tel"
              id="mobile"
              className="border border-gray-300 rounded-md px-3 py-2 w-full"
              value={mobile}
              onChange={handleMobileChange}
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
          <div className="mb-4">
            <label className="block mb-2" htmlFor="confirmPassword">
              Confirm Password:
            </label>
            <input
              type={showPassword ? 'text' : 'password'}
              id="confirmPassword"
              className="border border-gray-300 rounded-md px-3 py-2 w-full"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white rounded-md px-4 py-2 w-full hover:bg-blue-600"
          >
            Signup
          </button>
        </form>
        <button onClick={() => setAccount(true)}
          type="button"
          className="bg-white text-blue rounded-md px-4 py-2 w-full"
        >
          Existing User? Log in
        </button>
      </div >
    </div >

  );
};

export default Signup;
