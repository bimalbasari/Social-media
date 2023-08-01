import { useState } from "react";
import { createAccount } from "../../services/Api";

const Signup = ({ setAccount }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [picture, setPicture] = useState("");
  const [previewURL, setPreviewURL] = useState("");
  const [create, setCreate] = useState(null);

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };
  const handlePictureChange = (e) => {
    let selectedPicture = e.target.files[0];
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
      setError("Invalid email format");
      return;
    }

    // Validate mobile format using regex pattern
    const mobilePattern = /^\d{10}$/;
    if (!mobilePattern.test(mobile)) {
      setError("Invalid mobile number");
      return;
    }

    // Validate password format using regex pattern
    const passwordPattern =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
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
      setError("Password and confirm password do not match");
      return;
    }

    const formData = { firstName, lastName, email, mobile, password, picture };
    try {
      const userCreate = await createAccount(formData);
      if (userCreate) {
        setCreate(userCreate.data.message);
        setAccount(true);
      }
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  return (
    <div className="flex justify-center items-center p-8  bg-gray-100">
      <div className="bg-blue-100 shadow-md rounded-md p-8 w-96">
        {create && (
          <div className="bg-indigo-900 text-center py-4 lg:px-4">
            <div
              className="p-2 bg-indigo-800 items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex"
              role="alert"
            >
              <span className="flex rounded-full bg-indigo-500 uppercase px-2 py-1 text-xs font-bold mr-3">
                New
              </span>
              <span className="font-semibold mr-2 text-left flex-auto">
                {create}
              </span>
              <svg
                className="fill-current opacity-75 h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" />
              </svg>
            </div>
          </div>
        )}

        <h2 className="text-2xl font-bold mb-6 text-center">Signup</h2>
        {error && (
          <div
            className="flex items-center bg-red-500 text-white text-sm font-bold px-4 py-3"
            role="alert"
          >
            <svg
              className="fill-current w-4 h-4 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z" />
            </svg>
            <p>{error}</p>
          </div>
        )}
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
                type={showPassword ? "text" : "password"}
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
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>
          <div className="mb-4">
            <label className="block mb-2" htmlFor="confirmPassword">
              Confirm Password:
            </label>
            <input
              type={showPassword ? "text" : "password"}
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
        <button type="button" className=" text-blue rounded-md m-2 w-full">
          Existing User?{" "}
          <span
            className="text-pink-500 mx-1 font-bold"
            onClick={() => setAccount(true)}
          >
            Log in
          </span>
        </button>
      </div>
    </div>
  );
};

export default Signup;
