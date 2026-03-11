import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => setShowPassword(prev => !prev);

  // ================= EMAIL
  const handleEmailChange = e => {
    const value = e.target.value;
    setEmail(value);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmailError(emailRegex.test(value) ? "" : "Enter valid email");
  };

  // ================= PASSWORD
  const handlePasswordChange = e => {
    const value = e.target.value;
    setPassword(value);

    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,16}$/;

    if (!passwordRegex.test(value)) {
      setPasswordError(
        "8–16 chars, uppercase, lowercase, number & special character"
      );
    } else if (confirmPassword && value !== confirmPassword) {
      setPasswordError("Passwords don't match");
    } else {
      setPasswordError("");
    }
  };

  // ================= CONFIRM
  const handleConfirmChange = e => {
    const value = e.target.value;
    setConfirmPassword(value);

    if (password && value !== password) {
      setPasswordError("Passwords don't match");
    } else {
      setPasswordError("");
    }
  };

  // ================= SUBMIT
  const handleSubmit = e => {
    e.preventDefault();

    if (!email || !password || !confirmPassword) return;

    if (!emailError && !passwordError && password === confirmPassword) {
      localStorage.setItem("user", JSON.stringify({ email, password }));
      setSuccessMessage("Account Created Successfully");

      setTimeout(() => navigate("/login"), 1000);
    }
  };

  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("user"));
    if (savedUser) console.log(savedUser);
  }, []);

  // ================= UI
  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">
        

      {/* ================= LEFT PANEL */}
      <div className="hidden md:flex bg-black text-white items-center justify-center p-10">
        <div className="absolute top-0 left-4"><a href="/" className="text-sm text-yellow-500 font-bold mb-6">
          <span className="text-white">711</span>Tohon
        </a></div>
        <div className="max-w-md space-y-4">
          <h1 className="text-4xl font-bold leading-tight">
            Welcome to Our Platform
          </h1>
          <p className="text-gray-300">
            Create your account and start your journey with us.
            Secure, fast, and simple onboarding experience.
          </p>
        </div>
      </div>

      {/* ================= RIGHT PANEL */}
      <div className="flex items-center justify-center bg-gray-50 p-4">
        <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">

          <h2 className="text-3xl font-bold mb-2 text-center">
            Create Account
          </h2>
          <p className="text-gray-500 text-center mb-6">
            Enter your details below
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">

            {/* NAME */}
            <div>
              <label>Name</label>
              <input
                type="text"
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-black outline-none"
                required
              />
            </div>

            {/* EMAIL */}
            <div>
              <label>Email</label>
              <input
                type="email"
                onChange={handleEmailChange}
                className={`w-full p-3 border rounded-lg outline-none
                ${emailError ? "border-red-500" : "focus:ring-2 focus:ring-black"}`}
                required
              />
              {emailError && (
                <p className="text-sm text-red-500 mt-1">{emailError}</p>
              )}
            </div>

            {/* PASSWORD */}
            <div className="relative">
              <label>Password</label>
              <input
                type={showPassword ? "text" : "password"}
                onChange={handlePasswordChange}
                className={`w-full p-3 border rounded-lg outline-none pr-10
                ${passwordError ? "border-red-500" : "focus:ring-2 focus:ring-black"}`}
                required
              />

              <span
                onClick={togglePassword}
                className="absolute right-3 top-10 cursor-pointer text-gray-500"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>

            {/* CONFIRM */}
            <div>
              <label>Confirm Password</label>
              <input
                type={showPassword ? "text" : "password"}
                onChange={handleConfirmChange}
                className={`w-full p-3 border rounded-lg outline-none
                ${passwordError ? "border-red-500" : "focus:ring-2 focus:ring-black"}`}
                required
              />
              {passwordError && (
                <p className="text-sm text-red-500 mt-1">{passwordError}</p>
              )}
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded-lg
              hover:opacity-90 transition font-semibold"
            >
              Create Account
            </button>

            {/* LOGIN LINK */}
            <p className="text-center text-sm text-gray-500">
              Already have an account?{" "}
              <Link to="/login" className="underline font-medium">
                Login
              </Link>
            </p>

            {/* SUCCESS */}
            {successMessage && (
              <div className="bg-green-500 text-white p-2 rounded text-center">
                {successMessage}
              </div>
            )}

          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
