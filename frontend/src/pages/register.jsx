import React from "react";
import { Link } from "react-router-dom";

export default function Register() {
  const googleAuth = () => {
    window.open(`${import.meta.env.VITE_API_URL}/auth/google`, "_self");
  };
  return (
    <div className="flex justify-center items-center min-h-screen bg-blue-50">
      {/* Container */}
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-5xl flex flex-col md:flex-row">
        {/* Left Section - Illustration */}
        <div className="hidden md:flex w-1/2 justify-center items-center">
          <img
            src="https://cdni.iconscout.com/illustration/premium/thumb/woman-using-mobile-login-screen-illustration-download-in-svg-png-gif-file-formats--sign-cellphone-signup-application-pack-business-illustrations-5590722.png?f=webp"
            alt="login illustration"
            className="w-80"
          />
        </div>

        {/* Right Section - Form */}
        <div className="w-full md:w-1/2 flex flex-col justify-center px-6">
          <h2 className="text-2xl font-bold text-center mb-6">Log in Form</h2>
          <h3 className="text-lg font-semibold mb-4 text-center">
            Members Log in
          </h3>

          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="UserName"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />

            <button
              type="submit"
              className="w-full bg-yellow-400 text-white font-semibold py-2 rounded-lg hover:bg-yellow-500 transition"
            >
              Register
            </button>
          </form>

          <div className="flex items-center my-4">
            <hr className="flex-grow border-gray-300" />
            <span className="px-2 text-gray-500 text-sm">or</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          {/* Google Sign In */}
          <button
            onClick={googleAuth}
            className="w-full flex items-center justify-center border border-gray-300 py-2 rounded-lg hover:bg-gray-100 transition"
          >
            <img
              src="https://www.svgrepo.com/show/355037/google.svg"
              alt="Google"
              className="w-5 h-5 mr-2"
            />
            Sign in with Google
          </button>

          {/* Forgot Password */}
          <div className="text-right mt-2">
            <a href="#" className="text-sm text-gray-500 hover:text-yellow-500">
              Forgot password?
            </a>
          </div>

          {/* Sign Up Link */}
          <p className="text-center text-sm text-gray-600 mt-4">
            You Already Have Account?{" "}
            <Link
              to="/login"
              className="text-yellow-500 hover:text-yellow-600 font-semibold"
            >
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
