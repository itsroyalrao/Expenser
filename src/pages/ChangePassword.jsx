import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { changePass } from "../helper/auth";

function ChangePassword() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const email = queryParams.get("email");

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    document.title = "Change Password | Todo";
  }, []);
  return (
    <>
      <div className="bg-[#202020] w-full h-[100dvh] flex flex-col items-center justify-center">
        <div className="bg-white flex flex-col items-center rounded-2xl">
          <img
            className="w-20 h-20 -my-10 rounded-full"
            src="https://img.freepik.com/premium-vector/man-character_665280-46970.jpg?w=740"
            alt="This is an image"
          />
          <div className="px-4 mt-12 pb-3">
            <div className="text-blue-600 text-2xl">Change your password</div>
            <div className="flex flex-col items-center py-4 space-y-2">
              <input
                type="password"
                id="new-password"
                className="w-full px-3 py-2 border-2 rounded-lg focus:scale-105 outline-none border-blue-500"
                placeholder="New password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <input
                type="password"
                id="confirm-new-password"
                className="w-full px-3 py-2 border-2 rounded-lg focus:scale-105 outline-none border-blue-500"
                placeholder="Confirm new password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              {message && (
                <div className="text-red-500 flex justify-center">
                  {message}
                </div>
              )}
            </div>
          </div>
        </div>
        <div
          className="bg-blue-600 w-44 rounded-b-xl flex items-center justify-center text-white p-2 cursor-pointer hover:bg-blue-700 text-lg"
          onClick={() =>
            changePass(email, password, confirmPassword, setMessage)
          }
        >
          Change Password
        </div>
      </div>
    </>
  );
}

export default ChangePassword;
