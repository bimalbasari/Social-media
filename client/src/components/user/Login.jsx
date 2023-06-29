import { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from "../../features/index.jsx";
import { authenticationLogin } from '../../services/api.jsx';

const Login = ({ setAccount }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  // const [image, setImage] = useState("")

  const dispatch = useDispatch();
  const navigate = useNavigate();

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
    setError(null)

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
    const data = {
      email,
      password
    }
    try {
      const LogUser = await authenticationLogin(data);
      if (LogUser) {
        const type = 'buffer';
        const { token, user } = LogUser.data;
        const { firstName, lastName, email, mobile, picture } = user;

        // Convert the array of image data into a Uint8Array
        const uint8Array = new Uint8Array(picture.data);

        // Create a Blob from the Uint8Array
        const blob = new Blob([uint8Array], { type });

        // Create an object URL for the Blob
        const objectURL = URL.createObjectURL(blob);

        const newUser = {
          firstName, lastName, email, mobile, picture: objectURL, token
        }

        dispatch(login(newUser))
        navigate("/")
      }

    } catch (error) {
      console.log(error)
      setError(error.message)
    }

  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-blue-100 shadow-md rounded-md p-8 w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Login </h2>
        {error &&
          <div className="flex items-center bg-pink-500 text-white text-sm font-bold px-4 py-3" role="alert">
            <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z" /></svg>
            <p>{error}</p>
          </div>}
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
        <button
          type="button"
          className=" text-blue rounded-md m-2 w-full"
        >
          New user?<span className='text-pink-500 mx-1 font-bold' onClick={() => setAccount(false)} >Create an account</span>
        </button>
      </div>
    </div>
  );
};

export default Login;
