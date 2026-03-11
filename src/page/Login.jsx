import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const navigate = useNavigate();

  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => setShowPassword(prev => !prev);

  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("user"));
    if (savedUser) console.log(savedUser);
  }, []);

  const handleSubmit = e => {
    e.preventDefault();

    const savedUser = JSON.parse(localStorage.getItem("user"));

    if (!savedUser) {
      setErrorMessage("No account found. Please register.");
      return;
    }

    if (
      savedUser.email === inputEmail &&
      savedUser.password === inputPassword
    ) {
      setSuccessMessage("Welcome back 🎉");
      setErrorMessage("");

      setTimeout(() => navigate("/dashboard"), 1000);
    } else {
      setErrorMessage("Incorrect email or password");
      setSuccessMessage("");
    }
  };

  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">

      {/* ================= LEFT PANEL */}
      <div className="hidden md:flex bg-black text-white items-center justify-center p-10">
        <div className="max-w-md space-y-4">
          <h1 className="text-4xl font-bold leading-tight">
            Welcome Back
          </h1>
          <p className="text-gray-300">
            Login to continue your experience.
            Secure and seamless access to your account.
          </p>
        </div>
      </div>

      {/* ================= RIGHT PANEL */}
      <div className="flex items-center justify-center bg-gray-50 p-6">
        <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">

          <h2 className="text-3xl font-bold text-center mb-2">
            Login
          </h2>
          <p className="text-gray-500 text-center mb-6">
            Enter your credentials
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">

            {/* EMAIL */}
            <div>
              <label>Email</label>
              <input
                type="email"
                value={inputEmail}
                onChange={e => setInputEmail(e.target.value)}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-black outline-none"
                required
              />
            </div>

            {/* PASSWORD */}
            <div className="relative">
              <label>Password</label>
              <input
                type={showPassword ? "text" : "password"}
                value={inputPassword}
                onChange={e => setInputPassword(e.target.value)}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-black outline-none pr-10"
                required
              />

              <span
                onClick={togglePassword}
                className="absolute right-3 top-10 cursor-pointer text-gray-500"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>

            {/* REMEMBER */}
            <div className="flex items-center gap-2 text-sm">
              <input type="checkbox" />
              <span>Remember me</span>
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded-lg
              hover:opacity-90 transition font-semibold"
            >
              Login
            </button>

            {/* REGISTER LINK */}
            <p className="text-center text-sm text-gray-500">
              Don’t have an account?{" "}
              <Link to="/" className="underline font-medium">
                Sign up
              </Link>
            </p>
          </form>

          {/* SUCCESS */}
          {successMessage && (
            <div className="mt-4 bg-green-500 text-white p-2 rounded text-center">
              {successMessage}
            </div>
          )}

          {/* ERROR */}
          {errorMessage && (
            <div className="mt-4 bg-red-500 text-white p-2 rounded text-center">
              {errorMessage}
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default Login;
