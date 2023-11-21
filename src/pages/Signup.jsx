import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useState } from "react";

import addUser from "../helper/addUser";

function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState(null);

  return (
    <div className="w-full h-[100dvh] md:min-h-screen flex items-center justify-center bg-[#202020]">
      <div className="w-full sm:w-[60%] md:w-[40%] lg:w-[25%] h-full sm:h-[80%] flex flex-col items-center justify-center bg-white py-[10%] space-y-6 sm:rounded-2xl">
        <div className="flex justify-center text-4xl font-bold text-blue-600">
          Expenser
        </div>
        <div className="w-full flex flex-col items-center pb-4">
          <div className="w-[80%] flex flex-col space-y-2">
            <div className="space-y-1">
              <input
                type="text"
                className="w-full px-3 py-2 border-2 rounded-lg focus:scale-105 outline-none border-blue-500"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                autoComplete="on"
              />
              <input
                type="email"
                className="w-full px-3 py-2 border-2 rounded-lg focus:scale-105 outline-none border-blue-500"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="on"
              />
              <input
                type="password"
                className="w-full px-3 py-2 border-2 rounded-lg focus:scale-105 outline-none border-blue-500"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <input
                type="password"
                className="w-full px-3 py-2 border-2 rounded-lg focus:scale-105 outline-none border-blue-500"
                placeholder="Confirm password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            {message && (
              <div className="text-red-500 flex justify-center">{message}</div>
            )}
            <button
              className="w-full bg-blue-600 flex justify-center py-2 rounded-lg text-white text-xl"
              onClick={() => {
                addUser(username, email, password, confirmPassword, setMessage);
              }}
            >
              Sign up
            </button>
            <div className="flex justify-center space-x-1">
              <span>Already have an account?</span>
              <Link to={"/login"} className="font-bold text-green-600">
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Signup.propTypes = {
  onMobile: PropTypes.any,
};

export default Signup;
