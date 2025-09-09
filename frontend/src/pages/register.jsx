import React from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Register() {
  const navigate = useNavigate();

  const handleRegster = async (e) => {
    e.preventDefault();
    const userData = {
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.passw.value,
    };

    try {
      const res = await axios.post(
        "http://localhost:8080/auth/register",

        userData,

        { withCredentials: true }
      );

      console.log("Register success", res.data);
      navigate("/login");
    } catch (err) {
      console.error("Register failed", err.response?.data || err.message);
      alert(
        err.response?.data?.message || "Registration failed. Please try again."
      );
    }
  };

  const googleAuth = () => {
    window.open("http://localhost:8080/auth/google", "_self");
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-50">
      {/* Container */}
      <div className="flex flex-col w-full max-w-5xl p-8 bg-white shadow-lg rounded-2xl md:flex-row">
        {/* Left Section - Illustration */}
        <div className="items-center justify-center hidden w-1/2 md:flex">
          <img
            src="https://cdni.iconscout.com/illustration/premium/thumb/woman-using-mobile-login-screen-illustration-download-in-svg-png-gif-file-formats--sign-cellphone-signup-application-pack-business-illustrations-5590722.png?f=webp"
            alt="login illustration"
            className="w-80"
          />
        </div>

        {/* Right Section - Form */}
        <div className="flex flex-col justify-center w-full px-6 md:w-1/2">
          <h2 className="mb-6 text-2xl font-bold text-center">Sign up Form</h2>
          <h3 className="mb-4 text-lg font-semibold text-center">
            Members Sign up
          </h3>

          <form className="flex flex-col gap-4" onSubmit={handleRegster}>
            <input
              type="text"
              name="name"
              placeholder="UserName"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <input
              type="password"
              name="passw"
              placeholder="Password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />

            <button
              type="submit"
              className="w-full py-2 font-semibold text-white transition bg-yellow-400 rounded-lg hover:bg-yellow-500"
            >
              Register
            </button>
          </form>

          <div className="flex items-center my-4">
            <hr className="flex-grow border-gray-300" />
            <span className="px-2 text-sm text-gray-500">or</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          {/* Google Sign In */}
          <button
            onClick={googleAuth}
            className="flex items-center justify-center w-full py-2 transition border border-gray-300 rounded-lg hover:bg-gray-100"
          >
            <img
              src="https://www.svgrepo.com/show/355037/google.svg"
              alt="Google"
              className="w-5 h-5 mr-2"
            />
            Sign in with Google
          </button>

          {/* Forgot Password */}
          <div className="mt-2 text-right">
            <a href="#" className="text-sm text-gray-500 hover:text-yellow-500">
              Forgot password?
            </a>
          </div>

          {/* Sign Up Link */}
          <p className="mt-4 text-sm text-center text-gray-600">
            You Already Have Account?{" "}
            <Link
              to="/login"
              className="font-semibold text-yellow-500 hover:text-yellow-600"
            >
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
