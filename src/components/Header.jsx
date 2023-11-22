import { useState } from "react";
import PropTypes from "prop-types";
import logoutUser from "../helper/logoutUser";

function Header({ user }) {
  const onMobile = /Mobi|Android/i.test(navigator.userAgent);

  const [clicked, setClicked] = useState(false);

  return (
    <div className="w-full flex items-center justify-between bg-blue-600 text-[whitesmoke] px-4 md:px-12 sticky top-0">
      <div className="text-3xl py-3">Xpenser</div>
      {onMobile ? (
        <>
          <div className="flex flex-col items-center pr-2">
            <i
              className={
                clicked ? "fas fa-times scale-125" : "fas fa-bars scale-125"
              }
              onClick={() => setClicked(!clicked)}
            ></i>
            {clicked && (
              <div className="flex flex-col items-center space-y-2 fixed top-16 right-0 bg-gray-300 p-3 rounded-md">
                <div className="w-full flex justify-center capitalize bg-blue-600 p-2 rounded">
                  {user.username}
                </div>
                <div
                  className="w-full text-[whitesmoke] bg-red-600 px-3 py-2 rounded active:bg-red-700"
                  onClick={() => logoutUser(user.email)}
                >
                  Logout
                </div>
              </div>
            )}
          </div>
        </>
      ) : (
        <>
          <div className="hidden md:flex md:items-center md:space-x-3">
            <div className="capitalize bg-blue-600 p-2 rounded">
              {user.username}
            </div>
            <div
              className="text-[whitesmoke] bg-red-600 px-3 py-2 rounded active:bg-red-700 cursor-pointer"
              onClick={() => logoutUser(user.email)}
            >
              Logout
            </div>
          </div>
          <div className="flex flex-col items-center md:hidden">
            <i
              className={
                clicked
                  ? "fas fa-times scale-125 cursor-pointer hover:bg-white p-2 rounded hover:text-blue-600"
                  : "fas fa-bars scale-125 cursor-pointer hover:bg-white p-2 rounded hover:text-blue-600"
              }
              onClick={() => setClicked(!clicked)}
            ></i>
            {clicked && (
              <div className="flex flex-col items-center space-y-2 fixed top-16 right-0 bg-gray-300 p-3 rounded-md">
                <div className="w-full flex justify-center capitalize bg-blue-600 p-2 rounded">
                  {user.username}
                </div>
                <div
                  className="w-full text-[whitesmoke] bg-red-600 px-3 py-2 rounded  active:bg-red-700 cursor-pointer"
                  onClick={() => logoutUser(user.email)}
                >
                  Logout
                </div>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}

Header.propTypes = {
  user: PropTypes.object,
};

export default Header;
