export default function Home(userDetails) {
  const user = userDetails.user;

  const logout = async (e) => {
    e.preventDefault();
    try {
      await fetch(`${import.meta.env.VITE_API_URL}/auth/logout`, {
        method: "GET",
        credentials: "include",
      });
      // Redirect manually in React
      window.location.href = "/";
    } catch (err) {
      console.error("Logout failed", err);
    }
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
              defaultValue={user.name}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <input
              type="email"
              placeholder="Email"
              defaultValue={user.email}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />

            <button
              onClick={logout}
              className="w-full bg-yellow-400 text-white font-semibold py-2 rounded-lg hover:bg-yellow-500 transition"
            >
              Logout
            </button>
          </form>

          <div className="flex items-center my-4">
            <hr className="flex-grow border-gray-300" />
            <span className="px-2 text-gray-500 text-sm">or</span>
            <hr className="flex-grow border-gray-300" />
          </div>
        </div>
      </div>
    </div>
  );
}
