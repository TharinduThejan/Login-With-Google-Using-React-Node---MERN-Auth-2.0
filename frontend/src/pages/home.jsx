import React from "react";
import axios from "axios";

export default function Home({ user }) {
  const logout = async () => {
    try {
      await axios.get("http://localhost:8080/auth/logout", {
        withCredentials: true,
      });
      window.location.href = "/login";
    } catch (error) {
      console.error("Logout failed:", error.response?.data || error.message);
      alert("Logout failed. Please try again.");
    }
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
          <h2 className="mb-6 text-2xl font-bold text-center">Home</h2>
          <h3 className="mb-4 text-lg font-semibold text-center">
            Members Area
          </h3>

          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="UserName"
              defaultValue={user.displayName}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <input
              type="email"
              placeholder="Email"
              defaultValue={user.emails[0].value}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />

            <button
              type="button"
              onClick={logout}
              className="w-full py-2 font-semibold text-white transition bg-yellow-400 rounded-lg hover:bg-yellow-500"
            >
              Logout
            </button>
          </form>

          <div className="flex items-center my-4">
            <hr className="flex-grow border-gray-300" />
            <span className="px-2 text-sm text-gray-500">or</span>
            <hr className="flex-grow border-gray-300" />
          </div>
        </div>
      </div>
    </div>
  );
}
