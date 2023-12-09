import { useState } from "react";
import { resetPass } from "../helper/auth";

function ResetPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

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
            <div className="text-2xl text-blue-600">Reset your password</div>
            <div className="flex flex-col items-center py-4 space-y-2">
              <input
                type="email"
                id="email"
                className="w-full px-3 py-2 border-2 rounded-lg focus:scale-105 outline-none border-blue-500"
                placeholder="Email Address"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
          className="bg-blue-600 text-white w-44 rounded-b-xl flex items-center justify-center p-2 cursor-pointer text-lg hover:bg-blue-700"
          onClick={() => resetPass(email, setMessage)}
        >
          Reset Password
        </div>
      </div>
    </>
  );
}

export default ResetPassword;
